import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: colors.branco,
        alignItems: 'center',
        justifyContent: 'center'
    },
    scrollContainer: {
        borderWidth: 2,
        borderColor: 'black',
        flex: 1,
        paddingBottom: 100 // Para garantir que não fique sobre os botões
    }
});