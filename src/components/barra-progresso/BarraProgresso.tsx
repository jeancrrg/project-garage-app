import { useEffect, useState } from "react";
import { styles } from "./BarraProgressoStyle";
import { View, Animated } from 'react-native';

export default function BarraProgresso() {

    const valorProgresso = new Animated.Value(0);
    const progressoFinal = 100;

    useEffect(() => {
        // Inicia a animação quando o componente é montado
        Animated.timing(valorProgresso, {
            toValue: progressoFinal, // Valor final da animação
            duration: 2000, // Duração da animação em milissegundos (2 segundos neste exemplo)
            useNativeDriver: false, // `false` porque estamos animando a largura, que não é suportada por native driver
        }).start();
    }, []);

    return (
        <View style={styles.container}>
            
            <View style={styles.barra}>
                <Animated.View
                    style={[
                        styles.barraProgresso,
                        {
                            width: valorProgresso.interpolate({
                                inputRange: [0, 100],
                                outputRange: ['0%', '100%'], // Progresso animado em porcentagem
                            }),
                        },
                    ]}
                />
            </View>

            <Animated.Text style={styles.percentualProgresso}>
                {valorProgresso.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', `${progressoFinal}%`],
                })}
            </Animated.Text>
        </View>
    );
}