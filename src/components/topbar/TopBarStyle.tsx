import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: '100%',
        height: 60,
        backgroundColor: colors.azulPrimario,
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    texto: {
        fontSize: 25,
        color: colors.branco
    },
    iconeBotao: {
        fontSize: 30,
        color: colors.branco
    }
});

