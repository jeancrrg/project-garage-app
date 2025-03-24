import { Keyboard, SafeAreaView, Switch, Text, View } from "react-native";
import colors from "../../styles/Colors";
import { useState } from "react";
import { styles } from "./AdicionarMelhoriaScreenStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import RNPickerSelect from "react-native-picker-select";
import { TextInput } from "react-native-paper";
import { RNPickerItem } from "../../models/types/RNPickerItem";

export default function AdicionarMelhoriaScreen() {

    const [nomeVeiculo] = useState('Astra GL');

    const [descricao, setDescricao] = useState('');
    const [tipo, setTipo] = useState('');
    const [pickerTipo] = useState<RNPickerItem<string>[]>([
        { label: 'Performance', value: 'performance' },
        { label: 'Estética', value: 'estetica' },
        { label: 'Som', value: 'som' },
        { label: 'Interior', value: 'interior' }
    ]);
    const [status, setStatus] = useState('');
    const [pickerStatus, setPickerStatus] = useState<RNPickerItem<string>[]>([
        { label: 'Novo', value: 'novo' },
        { label: 'Em Progresso', value: 'emProgresso' },
        { label: 'Concluído', value: 'concluido' },
    ]);
    const [valor, setValor] = useState('');
    const [isPrioridade, setPrioridade] = useState(false);

    function formatarValorMonetarioComVirgula(value: string): string {
        // Remove tudo que não seja número ou vírgula
        let valorSomenteNumero: string = value.replace(/\D/g, '');
        
        // Adiciona a vírgula antes dos dois últimos números
        if (valorSomenteNumero.length > 2) {
            valorSomenteNumero = valorSomenteNumero.slice(0, -2) + ',' + valorSomenteNumero.slice(-2);
        }
        
        // Adiciona separadores de milhar a cada 3 dígitos
        valorSomenteNumero = valorSomenteNumero.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        return valorSomenteNumero;
    };

    function onChangeValor(valor: string) {
        const valorFormatadoEmMonetario: string = formatarValorMonetarioComVirgula(valor);
        setValor(valorFormatadoEmMonetario);
    };

    function alterarPrioridade(indicadorPrioridade: boolean) {
        setPrioridade(indicadorPrioridade);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topBar}>
                <MaterialCommunityIcons name='keyboard-backspace' color={colors.azulPrimario} size={30}/>
                <Text style={styles.tituloTopBar}> Nova Melhoria </Text>
            </View>

            <View style={styles.containerMelhoria}>
                <View style={styles.cardMeuVeiculo}>
                    <MaterialCommunityIcons name='car-outline' color={colors.branco} size={30}/>
                    <View style={styles.infoVeiculo}>
                        <Text style={styles.textoCardMeuVeiculo}> Meu Veículo </Text>
                        <Text style={styles.nomeVeiculo}> {nomeVeiculo} </Text>
                    </View>
                </View>

                <View style={styles.info}>
                    <MaterialCommunityIcons name='clipboard-text-outline' color={colors.azulPrimario} size={30}/>

                    <TextInput
                        mode='outlined'
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                        theme={{
                            colors: {
                                primary: colors.azulPrimario
                            },
                        }}
                        label='Descrição'
                        value={descricao}
                        onChangeText={valor => {setDescricao(valor)}}
                        placeholder={'Digite a descrição'}
                        multiline={true}
                        maxLength={200}
                    />
                </View>

                <View style={styles.info}>
                    <MaterialCommunityIcons name='cog-outline' color={colors.azulPrimario} size={30}/>

                    <View style={styles.picker}>
                        <RNPickerSelect
                            placeholder={{}}
                            onValueChange={(tipo) => setTipo(tipo)}
                            items={pickerTipo}
                            value={tipo}
                            style={{
                                // Estilo do input específico para Android
                                inputAndroid: styles.inputPicker,
                                // Estilo do input específico para IOS
                                inputIOS: styles.inputPicker
                            }}
                        />
                    </View>
                </View>

                <View style={styles.info}>
                    <MaterialCommunityIcons name='cash-multiple' color={colors.azulPrimario} size={30}/>

                    <TextInput
                        mode='outlined'
                        autoCapitalize='none'
                        autoCorrect={false}
                        style={styles.input}
                        theme={{
                            colors: {
                                primary: colors.azulPrimario
                            },
                        }}
                        label={'Valor'}
                        value={valor}
                        onChangeText={onChangeValor}
                        placeholder={'Digite o valor'}
                        maxLength={10}
                        keyboardType='numeric'
                        
                    />
                </View>

                <View style={styles.info}>
                    <MaterialCommunityIcons name='bookmark-outline' color={colors.azulPrimario} size={30}/>

                    <View style={styles.picker}>
                        <RNPickerSelect
                            placeholder={{}}
                            onValueChange={(status) => setStatus(status)}
                            items={pickerStatus}
                            value={status}
                            style={{
                                // Estilo do input específico para Android
                                inputAndroid: styles.inputPicker,
                                // Estilo do input específico para IOS
                                inputIOS: styles.inputPicker
                            }}
                        />
                    </View>
                </View>

                <View style={styles.info}>
                    <MaterialCommunityIcons name='flag-outline' color={colors.azulPrimario} size={30}/>

                    <Text style={styles.textoPrioridade}> Prioridade? </Text>
                    <Switch
                        onValueChange={alterarPrioridade}
                        value={isPrioridade}
                        style={styles.tamanhoSwitch}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
}