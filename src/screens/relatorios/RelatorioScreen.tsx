import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/topbar/TopBar";
import { styles } from "./RelatorioScreenStyle";

export default function RelatorioScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TopBar label="Relatórios"/>
        </SafeAreaView>
    );
}