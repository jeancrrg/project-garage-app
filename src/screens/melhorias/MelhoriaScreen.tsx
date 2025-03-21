import { ScrollView, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BarraSuperior from "../../components/barra-superior/BarraSuperior";
import { styles } from "./MelhoriaScreenStyle";

export default function MelhoriaScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <BarraSuperior label="Melhorias"/>

            <ScrollView contentContainerStyle={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                <Text>melhorias</Text>
            </ScrollView>
        </SafeAreaView>
    );
}