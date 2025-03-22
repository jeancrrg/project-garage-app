import { SafeAreaView, Text, View } from "react-native";
import colors from "../../styles/Colors";
import { useState } from "react";
import { styles } from "./AdicionarMelhoriaScreenStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function AdicionarMelhoriaScreen() {

    const [descricao, setDescricao] = useState('');

    return (
        <SafeAreaView>
            <View style={styles.topBar}>
                <MaterialCommunityIcons name='keyboard-backspace' color={colors.azulPrimario} size={30}/>

                <Text style={{fontSize: 20}}> Nova Melhoria </Text>

                <MaterialCommunityIcons name='check-circle-outline' color={colors.azulPrimario} size={30}/>
            </View>

            <View style={styles.containerNovaMelhoria}>
                
                
            </View>
            

        </SafeAreaView>
    );
}