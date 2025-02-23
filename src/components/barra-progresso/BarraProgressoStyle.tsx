import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center' 
    },
    barra: {
        width: '80%',
        height: 20,
        backgroundColor: colors.cinzaClaro,
        borderRadius: 10,
        overflow: 'hidden',
        marginBottom: 10
    },
    barraProgresso: {
        height: '100%',
        backgroundColor: colors.verde,
        borderRadius: 10
    },
    percentualProgresso: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333'
    }
});