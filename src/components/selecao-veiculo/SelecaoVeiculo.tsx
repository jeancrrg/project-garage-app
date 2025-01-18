import { SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./SelecaoVeiculoStyle";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function SelecaoVeiculo() {
    return (
        <SafeAreaView  style={styles.container}>
            <TouchableOpacity>
                <View style={styles.viewSelecaoVeio}>
                    <View style={styles.selecaoVeiculo}>
                        <Icon name="directions-car-filled" style={styles.iconeSelecao}/>
                        <Text style={styles.textoSelecao}> Astra GL 1.8 </Text>
                        <Icon name="keyboard-arrow-down" style={styles.iconeSelecao}/>
                    </View>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
}