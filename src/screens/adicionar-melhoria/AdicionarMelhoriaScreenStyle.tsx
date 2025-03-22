import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    topBar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        paddingHorizontal: 20,
        borderWidth: 2,
        borderColor: 'black'
    },
    containerNovaMelhoria: {
        flex: 1,
        backgroundColor: colors.azulPrimario
    }

});