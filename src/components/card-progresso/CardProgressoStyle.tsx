import { StyleSheet } from "react-native";
import colors from "../../styles/Colors";

export const styles = StyleSheet.create({
    container: {
        width: '98%',
        marginVertical: 30,
        marginHorizontal: 3
    },
    card: {
        backgroundColor: colors.branco,
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 2, height: 2 },
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