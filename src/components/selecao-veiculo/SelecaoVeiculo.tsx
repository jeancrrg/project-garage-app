import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./SelecaoVeiculoStyle";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";

export default function SelecaoVeiculo() {

    const [nomeVeiculo, setNomeVeiculo] = useState('Astra GL 1.8');

    return (
        <SafeAreaView  style={styles.container}>
            <TouchableOpacity>
                <View style={styles.viewSelecaoVeio}>
                    <View style={styles.selecaoVeiculo}>
                        <Icon name="directions-car-filled" style={styles.iconeSelecao}/>
                        <Text style={styles.textoSelecao}> {nomeVeiculo} </Text>
                        <Icon name="keyboard-arrow-down" style={styles.iconeSelecao}/>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}