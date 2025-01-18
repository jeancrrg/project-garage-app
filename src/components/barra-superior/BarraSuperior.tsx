import { SafeAreaView, TouchableOpacity, View } from "react-native";
import { styles } from "./BarraSuperiorStyle";
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function BarraSuperior() {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity>
                <Icon name="filter-list" style={styles.iconeBotao}/>
            </TouchableOpacity>
        </SafeAreaView>
    );
}