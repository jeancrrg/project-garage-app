import { SafeAreaView } from "react-native-safe-area-context";
import TopBar from "../../components/topbar/TopBar";
import { styles } from "./MelhoriaScreenStyle";

export default function MelhoriaScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <TopBar label="Melhorias"/>
                
        </SafeAreaView>
    );
}