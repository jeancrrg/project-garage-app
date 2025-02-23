import { SafeAreaView, ScrollView } from "react-native";
import { styles } from "./InicioStyles";
import BotoesNavegacao from "../../components/botoes-navegacao/BotoesNavegacao";
import BarraSuperior from "../../components/barra-superior/BarraSuperior";
import SelecaoVeiculo from "../../components/selecao-veiculo/SelecaoVeiculo";
import CardProgresso from "../../components/card-progresso/CardProgresso";
import { StatusBar } from "expo-status-bar";
import InformacoesVeiculo from "../../components/informacoes-veiculo/InformacoesVeiculo";
import { View } from "react-native";

export default function Inicio() {
    return (
        <SafeAreaView style={styles.container}>
            <BarraSuperior label="Início"/>
            <SelecaoVeiculo/>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <CardProgresso/>
                <InformacoesVeiculo/>
            </ScrollView>

            <View style={styles.botoesFixos}>
                <BotoesNavegacao/>
            </View>

            <StatusBar style='dark' />
        </SafeAreaView>
    );
}