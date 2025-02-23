import { Image, SafeAreaView, Text, View } from "react-native";
import { styles } from "./InformacoesVeiculoStyle";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useState } from "react";
import CardInfo from "./card-info/CardInfo";

export default function InformacoesVeiculo() {
    
    const [modelo, setModelo] = useState('Astra GL');
    const [motor, setMotor] = useState('1.8 8v');
    const [potenciaAtual, setPotenciaAtual] = useState('110 cv');
    const [velocidadeMaxima, setVelocidadeMaxima] = useState('220 km/h');
    const [dataAquisicaoVeiculo, setDataAquisicaoVeiculo] = useState('02/08/2023');
    
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.containerImagem}>
                <Image source={require('../../../assets/astra.png')} style={styles.imagem}/>
            </View>
            <View style={styles.informacoesModelo}>
                <View style={styles.modelo}>
                    <MaterialCommunityIcons name='shield-car' size={25} color='white' />
                    <Text style={styles.textoModelo}> Modelo </Text>
                </View>
                <View style={styles.infoModelo}> 
                    <Text style={{fontSize: 16}}> {modelo} </Text>
                </View>
            </View>

            <View>
                <CardInfo icone='engine' tipoInformacao='Motor' informacao={motor}></CardInfo>
            </View>

            <View>
                <CardInfo icone='car-turbocharger' tipoInformacao='Potência Atual' informacao={potenciaAtual}></CardInfo>
            </View>

            <View>
                <CardInfo icone='car-speed-limiter' tipoInformacao='Velocidade Máx.' informacao={velocidadeMaxima}></CardInfo>
            </View>

            <View>
                <CardInfo icone='key-chain-variant' tipoInformacao='Comigo desde...' informacao={dataAquisicaoVeiculo}></CardInfo>
            </View>
        </SafeAreaView>
    );
}