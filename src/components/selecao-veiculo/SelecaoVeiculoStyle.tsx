import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%'
    },
    viewSelecaoVeio: {
        height: 40,
        backgroundColor: colors.branco,
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
        color: colors.cinzaEscuro
    },
    iconeSelecao: {
        fontSize: 25,
        color: colors.cinzaEscuro,
        marginRight: 5,
        marginLeft: 5
    }
});