import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import InicioScreen from "../screens/inicio/InicioScreen";
import MelhoriaScreen from '../screens/melhorias/MelhoriaScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Pressable, View } from 'react-native';
import colors from '../styles/Colors';
import RelatorioScreen from '../screens/relatorios/RelatorioScreen';
import MaisInformacoesScreen from '../screens/mais/MaisInformacoesScreen';
import React from 'react';
import AdicionarMelhoriaScreen from '../screens/adicionar-melhoria/AdicionarMelhoriaScreen';
import { useNavigation } from '@react-navigation/native';
import { Surface } from 'react-native-paper';

const { Screen, Navigator } = createBottomTabNavigator();

export default function AppRoutes() {

    const navigation = useNavigation();

    return (
        <Navigator
            screenOptions={{
                tabBarStyle: () => (
                    <View style={{
                        height: 1000,
                        paddingTop: 5,
                        backgroundColor: colors.azulSecundario,
                        overflow: 'visible'
                    }}/>
                ),
                tabBarActiveTintColor: colors.azulPrimario, 
                tabBarInactiveTintColor: colors.cinzaEscuro,
            }}
        >
            <Screen 
                name="inicio"
                component={InicioScreen} 
                options={{
                    // Esconde o cabeçalho padrão do React Navigation
                    headerShown: false,
                    title: 'Início',
                    tabBarIcon:({ focused }) => (
                        <MaterialCommunityIcons name="home" color={focused ? colors.azulPrimario : colors.cinzaEscuro} size={30}/>
                    ),
                }}
            />
            <Screen 
                name="melhorias" 
                component={MelhoriaScreen} 
                options={{
                    // Esconde o cabeçalho padrão do React Navigation
                    headerShown: false,
                    title: 'Melhorias',
                    tabBarIcon:({ focused }) => (
                        <MaterialCommunityIcons name="hammer-wrench" color={focused ? colors.azulPrimario : colors.cinzaEscuro} size={30}/>
                    )
                }}
            />
            <Screen 
                name="adicionar-melhoria"
                component={AdicionarMelhoriaScreen} 
                options={{
                    headerShown: false,
                    title: '',
                    tabBarButton: (props) => (
                        <Surface
                            {...props}
                            onTouchEnd={() => navigation.navigate('adicionar-melhoria')}
                            style={{
                                position: 'absolute',
                                bottom: 10, // Eleva o botão acima da barra
                                left: '50%',
                                transform: [{ translateX: -30 }],
                                backgroundColor: colors.azulPrimario,
                                width: 60,
                                height: 60,
                                borderRadius: 30,
                                justifyContent: 'center',
                                alignItems: 'center',
                                shadowColor: "#000",
                                shadowOffset: { width: 0, height: 4 },
                                shadowOpacity: 0.3,
                                shadowRadius: 4,
                                elevation: 5,
                            }}
                        >
                            <MaterialCommunityIcons 
                                name="plus"
                                color={colors.branco} 
                                size={30}
                            />
                        </Surface>
                    )
                }}
            />
            <Screen 
                name="relatorios"
                component={RelatorioScreen} 
                options={{
                    // Esconde o cabeçalho padrão do React Navigation
                    headerShown: false,
                    title: 'Relatórios',
                    tabBarIcon:({ focused }) => (
                        <MaterialCommunityIcons name="chart-bar" color={focused ? colors.azulPrimario : colors.cinzaEscuro} size={30}/>
                    )
                }}
            />
            <Screen 
                name="mais" 
                component={MaisInformacoesScreen} 
                options={{
                    // Esconde o cabeçalho padrão do React Navigation
                    headerShown: false,
                    title: 'Mais',
                    tabBarIcon:({ focused }) => (
                        <MaterialCommunityIcons name="dots-horizontal" color={focused ? colors.azulPrimario : colors.cinzaEscuro} size={30}/>
                    )
                }}
            />
        </Navigator>
    );
}