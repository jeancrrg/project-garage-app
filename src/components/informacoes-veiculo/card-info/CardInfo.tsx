import { Text, View } from "react-native";
import { SafeAreaView } from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { styles } from "./CardInfoStyle";

interface CardInfoProps {
    icone: string;
    tipoInformacao: string;
    informacao: string;
}

export default function CardInfo(props: CardInfoProps) {
    return (
        <SafeAreaView>
            <View style={styles.containerInfo}>
                <View style={styles.iconeInfo}>
                    <MaterialCommunityIcons name={props.icone} size={25} color="white" />
                </View>
                <View style={styles.tipoInfo}>
                    <Text style={{fontSize: 16, color: 'white'}}> {props.tipoInformacao} </Text>
                </View>
                <View style={styles.info}>
                    <Text style={{fontSize: 16, color: 'black'}}> {props.informacao} </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}