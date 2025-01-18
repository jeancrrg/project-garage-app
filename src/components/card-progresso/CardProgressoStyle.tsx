import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '90%',
        margin: 30
    },
    card: {
        backgroundColor: colors.branco,
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 30,
        paddingLeft: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5 // Somente para Android, cria uma elevação para o card
    },
    textoCard: {
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 15
    }
});