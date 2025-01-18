import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 90,
        backgroundColor: colors.roxoPrimario,
        justifyContent: 'center', // Alinha verticalmente
        alignItems: 'flex-start', // Alinha horizontalmente à esquerda
        paddingLeft: 20,
        paddingTop: 30
    },
    iconeBotao: {
        fontSize: 30,
        color: colors.branco
    }
});

