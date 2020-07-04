import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet } from 'react-native';
import { Overlay, Button } from 'react-native-elements';


import { BarCodeScanner } from 'expo-barcode-scanner';
import Header from '../../components/Header'

import { colors } from '../../styles'

export default function QRScreen() {
    const [hasPermission, setPermission] = useState(false);
    const [scanned, setScanned] = useState(0);
    const [isVisible, setOverlay] = useState(false);

    useEffect(() => {
        (async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            if (status === 'granted') {
                setPermission(true);

            }
        })()
    }, []);

    const handleScan = async ({ data }) => {
        setScanned('true')
        setOverlay(true)
    }

    return (
        <View
            style={{
                flex: 1,
                flexDirection: 'column',
            }}
        >
            <Header></Header>
            <View
                style={{
                    backgroundColor: colors.primaryDark,
                    height: 70,
                    justifyContent: 'center',
                    alignItems: "center"
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
                    setOverlay(false);
                    setScanned(false);
                }}
            >
                <Button
                    title='Voltar para Pagina Inicial'
                />
            </Overlay>
        </View>
    )
}