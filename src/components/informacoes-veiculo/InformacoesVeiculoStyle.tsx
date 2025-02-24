import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerImagem: {
        height: 200,
        width: 348,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        elevation: 10,
        zIndex: 10,
        overflow: 'hidden', 
        borderRadius: 10
    },
    imagem: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover'
    },
    modalContainer: {
        flex: 1, // Ocupar toda a tela
        backgroundColor: 'rgba(0,0,0,0.9)', // Fundo escuro
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImagemExpandida: {
        position: 'relative',
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    botaoFechar: {
        position: 'absolute',
        top: 190,
        right: 20,
        zIndex: 1
    },
    imagemExpandida: {
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    },
    informacoesModelo: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 10
    },
    modelo: {
        flexDirection: 'row',
        backgroundColor: colors.azulPrimario,
        width: 130,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2,
        marginRight: -15
    },
    textoModelo: {
        color: colors.branco,
        fontSize: 16,
        marginLeft: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoModelo: {
        backgroundColor: colors.branco,
        width: 130,
        padding: 10,
        marginRight: 3,
        alignItems: 'center',
        borderBottomRightRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 10, // Somente para Android, cria uma elevação para o card
        zIndex: 1,
    }
});