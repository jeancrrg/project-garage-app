import { StyleSheet } from "react-native";
import colors from "../../../styles/Colors";

export const styles = StyleSheet.create({
    containerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        position: 'relative'
    },
    iconeInfo: {
        width: 50,
        height: 50,
        backgroundColor: colors.azulRoyal,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 3, // Fica acima das outras divs
        elevation: 5, // Sombra no Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        position: 'relative',
        marginRight: -20 // Sobreposição
    },
    tipoInfo: {
        width: 165,
        height: 45,
        backgroundColor: colors.azulPrimario,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2, // Fica abaixo do ícone
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 10, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        position: 'relative',
        marginRight: -15, // Sobreposição
        paddingLeft: 10
    },
    info: {
        width: 165,
        height: 45,
        backgroundColor: 'white',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1, // Fica abaixo das outras divs
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2
    }
});