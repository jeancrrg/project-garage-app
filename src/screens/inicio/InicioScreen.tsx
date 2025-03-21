import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./InicioScreenStyles";
import BarraSuperior from "../../components/barra-superior/BarraSuperior";
import SelecaoVeiculo from "../../components/selecao-veiculo/SelecaoVeiculo";
import CardProgresso from "../../components/card-progresso/CardProgresso";
import { StatusBar } from "expo-status-bar";
import InformacoesVeiculo from "../../components/informacoes-veiculo/InformacoesVeiculo";

export default function InicioScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <BarraSuperior label="Início"/>
            <SelecaoVeiculo/>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <CardProgresso/>
                <InformacoesVeiculo/>
            </ScrollView>

            <StatusBar style='dark' />
        </SafeAreaView>
    );
}