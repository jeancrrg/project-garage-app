import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    viewSelecaoVeio: {
        height: 40,
        backgroundColor: colors.azulRoyal,
        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        justifyContent: 'center', // Alinha verticalmente
        alignItems: 'flex-start', // Alinha horizontalmente à esquerda
        paddingLeft: 20
    },
    selecaoVeiculo: {
        flexDirection: 'row', // Alinha para os itens ficaram lado a lado
        alignItems: 'center' // Alinha verticalmente
    },
    textoSelecao: {
        color: colors.branco
    },
    iconeSelecao: {
        fontSize: 25,
        color: colors.branco,
        marginRight: 5,
        marginLeft: 5
    }
});