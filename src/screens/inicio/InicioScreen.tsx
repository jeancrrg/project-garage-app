import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./InicioScreenStyles";
import TopBar from "../../components/topbar/TopBar";
import SelecaoVeiculo from "../../components/selecao-veiculo/SelecaoVeiculo";
import CardProgresso from "../../components/card-progresso/CardProgresso";
import { StatusBar } from "expo-status-bar";
import InformacoesVeiculo from "../../components/informacoes-veiculo/InformacoesVeiculo";

export default function InicioScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TopBar label="Início"/>
            <SelecaoVeiculo/>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <CardProgresso/>
                <InformacoesVeiculo/>
            </ScrollView>

            <StatusBar style='dark' />
        </SafeAreaView>
    );
}