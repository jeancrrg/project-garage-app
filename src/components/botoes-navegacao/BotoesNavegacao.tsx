import { Pressable, SafeAreaView, Text, TouchableOpacity } from "react-native";
import { styles } from "./BotoesNavegacaoStyle";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { useState } from "react";

export default function BotoesNavegacao() {

    const [botaoSelecionado, setBotaoSelecionado] = useState('inicio');

    function selecionarBotao(nomeBotaoSelecionado: string): void {
        setBotaoSelecionado(nomeBotaoSelecionado);
    }

    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.botao} onPress={() => selecionarBotao('inicio')}>
                <Icon name="home" style={[styles.iconeBotao, botaoSelecionado === 'inicio' && styles.botaoSelecionado]}/>
                <Text style={[styles.textoBotao, botaoSelecionado === 'inicio' && styles.botaoSelecionado]}> Início </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => selecionarBotao('melhorias')}>
                <Icon name="construction" style={[styles.iconeBotao, botaoSelecionado === 'melhorias' && styles.botaoSelecionado]}/>
                <Text style={[styles.textoBotao, botaoSelecionado === 'melhorias' && styles.botaoSelecionado]}> Melhorias </Text>
            </TouchableOpacity>
 
            <Pressable style={[styles.botao, styles.botaoAdicionar]}>
                <Icon name="add" style={styles.iconeBotaoAdicionar}/>
            </Pressable>

            <TouchableOpacity style={styles.botao} onPress={() => selecionarBotao('relatorios')}>
                <Icon name="equalizer" style={[styles.iconeBotao, botaoSelecionado === 'relatorios' && styles.botaoSelecionado]}/>
                <Text style={[styles.textoBotao, botaoSelecionado === 'relatorios' && styles.botaoSelecionado]}> Relatórios </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.botao} onPress={() => selecionarBotao('mais')}>
                <Icon name="more-horiz" style={[styles.iconeBotao, botaoSelecionado === 'mais' && styles.botaoSelecionado]}/>
                <Text style={[styles.textoBotao, botaoSelecionado === 'mais' && styles.botaoSelecionado]}> Mais </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}