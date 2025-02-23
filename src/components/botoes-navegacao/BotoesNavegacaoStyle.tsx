import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 60,
        width: '100%',
        backgroundColor: colors.azulSecundario,
        alignItems: 'center'
    },
    botao: {
        height: 60,
        width: 57,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    iconeBotao: {
        fontSize: 30,
        color: colors.cinzaEscuro
    },
    textoBotao: {
        fontSize: 12,
        color: colors.cinzaEscuro
    },
    botaoAdicionar: {
        height: 60,
        backgroundColor: colors.azulPrimario,
        borderRadius: 40,
        top: -10
    },
    iconeBotaoAdicionar: {
        fontSize: 30,
        color: colors.branco
    },
    botaoSelecionado: {
        color: colors.azulPrimario
    }
});