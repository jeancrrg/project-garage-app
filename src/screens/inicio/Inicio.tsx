import { SafeAreaView } from "react-native";
import { styles } from "./InicioStyles";
import BotoesNavegacao from "../../components/botoes-navegacao/BotoesNavegacao";
import BarraSuperior from "../../components/barra-superior/BarraSuperior";
import SelecaoVeiculo from "../../components/selecao-veiculo/SelecaoVeiculo";

export default function Inicio() {
    return (
        <SafeAreaView style={styles.container}>
            <BarraSuperior/>
            <SelecaoVeiculo/>

            <BotoesNavegacao/>
        </SafeAreaView>
    );
}