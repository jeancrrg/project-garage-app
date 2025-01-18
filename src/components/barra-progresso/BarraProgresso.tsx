import { useEffect, useState } from "react";
import { styles } from "./BarraProgressoStyle";
import { View, Text, Animated } from 'react-native';

export default function BarraProgresso() {

    const [progresso, setProgresso] = useState(0);
    const valorProgresso = new Animated.Value(70);

    // Atualiza o estado do progresso a cada 100 ms para mostrar o valor
    useEffect(() => {
        const intervalo = setInterval(() => {
            if (progresso < 100) {
                setProgresso(progresso + 1);
            }
        }, 100);

        return () => clearInterval(intervalo);
    }, [progresso]);

    return (
        <View style={styles.container}>
            <View style={styles.viewBarra}>
                <Animated.View
                    style={[
                        styles.barraProgresso,
                        { width: valorProgresso.interpolate({ inputRange: [0, 100], outputRange: ['0%', '100%'] }) },
                    ]}
                />
            </View>
            <Text style={styles.percentualProgresso}> 70% </Text>
        </View>
    );
}