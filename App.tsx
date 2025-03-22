import { NavigationContainer } from '@react-navigation/native';
import AppRoutes from './src/routes/AppRoutes';
import { StatusBar, StyleSheet, View } from 'react-native';

export default function App() {
    return (
        <NavigationContainer>
            <StatusBar
                barStyle="dark-content" 
                backgroundColor="transparent" 
                translucent 
            />
            <View style={styles.container}>
                <AppRoutes />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // Remove o espaçamento extra que o SafeAreaView tenta aplicar
        marginTop: StatusBar.currentHeight
    },
});
