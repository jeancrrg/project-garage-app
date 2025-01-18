import { SafeAreaView } from "react-native";
import { styles } from "./InicioStyles";
import BotoesNavegacao from "../../components/botoes-navegacao/BotoesNavegacao";
import BarraSuperior from "../../components/barra-superior/BarraSuperior";
import SelecaoVeiculo from "../../components/selecao-veiculo/SelecaoVeiculo";
import CardProgresso from "../../components/card-progresso/CardProgresso";

export default function Inicio() {
    return (
        <SafeAreaView style={styles.container}>
            <BarraSuperior/>
            <SelecaoVeiculo/>

            <CardProgresso/>

            <BotoesNavegacao/>
        </SafeAreaView>
    );
}