import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 60,
        backgroundColor: colors.roxoPrimario,
        justifyContent: 'center', // Alinha verticalmente
        alignItems: 'flex-end', // Alinha horizontalmente à esquerda
        paddingRight: 20
    },
    iconeBotao: {
        fontSize: 30,
        color: colors.branco
    }
});

