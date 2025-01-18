import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewBarra: {
        width: '100%',
        height: 20,
        backgroundColor: colors.cinzaClaro,
        borderRadius: 10,
        overflow: 'hidden' // Garante que o conteúdo não ultrapasse a borda
    },
    barraProgresso: {
        height: '100%',
        backgroundColor: colors.verde,
        borderRadius: 10
    },
    percentualProgresso: {
        color: colors.preto,
        fontSize: 18,
        marginTop: 10
    },
});