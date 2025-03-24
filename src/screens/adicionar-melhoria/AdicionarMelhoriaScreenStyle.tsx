import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    topBar: {
        flexDirection: 'row',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20
    },
    tituloTopBar: {
        fontSize: 20, 
        marginLeft: 15
    },
    containerMelhoria: {
        flex: 1,
        backgroundColor: colors.cinzaClaroFundo,
        padding: 20
    },
    cardMeuVeiculo: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        height: 80,
        backgroundColor: colors.azulRoyal,
        paddingHorizontal: 20,
        marginBottom: 20,
        marginLeft: 45,
        borderRadius: 10
    },
    textoCardMeuVeiculo: {
        color: colors.branco, 
        fontSize: 20
    },
    nomeVeiculo: {
        color: colors.branco,
        fontSize: 15
    },
    infoVeiculo: {
        paddingLeft: 10
    },
    info: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 55,
        marginBottom: 20
    },
    input: {
        flex: 1,
        marginLeft: 15
    },
    picker: {
        flex: 1,
        marginLeft: 15,
        borderWidth: 1,
        borderColor: colors.cinzaEscuro,
        borderRadius: 5,
        overflow: 'hidden'
    },
    inputPicker: {
        color: colors.preto,
        backgroundColor: colors.branco,
    },
    textoPrioridade: {
        fontSize: 15,
        marginHorizontal: 20
    },
    tamanhoSwitch: {
        transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }]
    }
});