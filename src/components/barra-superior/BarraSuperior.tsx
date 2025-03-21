import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./BarraSuperiorStyle";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Text } from "react-native";

interface BarraSuperiorProps {
    label: string
}

export default function BarraSuperior(props: BarraSuperiorProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.texto}> {props.label} </Text>
            </View>

            <View>
                <TouchableOpacity>
                    <Icon name="filter-list" style={styles.iconeBotao}/>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}