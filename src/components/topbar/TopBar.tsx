import { SafeAreaView, View } from "react-native";
import { styles } from "./TopBarStyle";
import { Text } from "react-native";

interface BarraSuperiorProps {
    label: string
}

export default function TopBar(props: BarraSuperiorProps) {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.texto}> {props.label} </Text>
            </View>
        </SafeAreaView>
    );
}