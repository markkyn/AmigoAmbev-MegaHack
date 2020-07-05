import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Overlay, Button, Avatar } from 'react-native-elements';


import { BarCodeScanner } from 'expo-barcode-scanner';
import Header from '../../components/Header'

import { colors } from '../../styles'

export default function QRScreen({ navigation }) {
    const [hasPermission, setPermission] = useState(false);
    const [scanned, setScanned] = useState(0);
    const [isVisible, setOverlay] = useState(false);

    const [dados, setDados] = useState({ name: "", avatar: "", description: "" });
    const [erro, SetErro] = useState('');

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            if (status === 'granted') {
                setPermission(true);
            }
        })()
    }, []);

    const handleScan = async ({ data }) => {
        if (dados == JSON.parse(data)) {
            SetErro('Você já resgatou esse código');
        }
        setDados(JSON.parse(data))
        setScanned('true')
        setOverlay(true)
    }

    return (
        <>
            <Header
                paddingBar={Platform.OS === 'ios' ? 30 : 0}
                onIconPress={() => navigation.navigate('Home')}
                onProfilePress={() => navigation.navigate('Profile')}
                Icon='home'
            ></Header>
            <View
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    backgroundColor: colors.primaryDark
                }}
            >
                <View
                    style={{
                        backgroundColor: colors.primaryDark,
                        justifyContent: 'center',
                        alignItems: "center",
                        paddingTop: 40
                    }}
                >
                    <Text
                        style={{ fontWeight: 'bold', color: colors.background }}
                    >
                        Escaneie o QRCode da Ambev e ganhe pontos
                </Text>
                </View>
                <BarCodeScanner
                    style={StyleSheet.absoluteFillObject}
                    onBarCodeScanned={scanned ? undefined : handleScan}
                />
                <Overlay
                    isVisible={isVisible}
                    onBackdropPress={() => {
                        setScanned(false);
                    }}
                >
                    <View
                        style={{ height: 400, width: 320, padding: 10, alignItems: "center" }}
                    >
                        {erro == ''
                            ? <Text
                                style={{ fontSize: 20, marginBottom: 30 }}
                            >
                                Parabens, {dados.description} de {dados.name}
                            </Text>
                            : <Text>{erro}</Text>
                        }
                        <Avatar
                            source={{
                                uri:
                                    dados.avatar,
                            }}
                            rounded
                            icon={{ name: 'home' }}
                            size='xlarge'
                        />
                        <Button
                            containerStyle={{ marginTop: 30 }}
                            title='Voltar para Pagina Inicial'
                            onPress={() => navigation.navigate('Home')}
                        />
                    </View>
                </Overlay>
            </View>
        </>
    )
}