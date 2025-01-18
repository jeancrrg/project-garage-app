import { SafeAreaView, Text, View } from "react-native";
import { styles } from "./CardProgressoStyle";
import BarraProgresso from "../barra-progresso/BarraProgresso";

export default function CardProgresso() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.card}>
                <Text style={styles.textoCard}> Progresso do seu projeto </Text>
                <BarraProgresso/>
            </View>
        </SafeAreaView>
    );
}