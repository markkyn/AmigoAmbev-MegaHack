import React, { useState } from 'react';

import { StatusBar, View, Text } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { Input, Button } from 'react-native-elements';

import { AppContainer } from '../../components/AppContainer'

import { LogoView, LogoImg, MainView, Label, InputView, BottomView } from './styles';
import { colors, metrics } from '../../styles'

import Logo from '../../assets/LogoAmigo.png'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [emailError, setEmailError] = useState('');
    const [passError, setPassError] = useState('');

    const inputValidation = () => {
        if (email == '') {
            setEmailError('Email Inválido');
        }
        if (password == '' || password.length < 6) {
            setPassError('Senha Inválida')
        }
    }

    return (
        <>
            <StatusBar backgroundColor='white' barStyle='dark-content' />
            <AppContainer>
                <LogoView>
                    <LogoImg source={Logo} tintColor={colors.primary} />
                    <Svg fill={colors.primary} width={metrics.screenWidth} height={50}>
                        <Path
                            d={`M 0 50 Q ${metrics.screenWidth * 0.8} 50 ${metrics.screenWidth} 0 L ${metrics.screenWidth} 50 Z`}
                        />
                    </Svg>
                </LogoView>
                <MainView>
                    <Label>Bem-Vindo</Label>
                    <InputView>
                        <Input
                            placeholder='Digite seu Email'
                            placeholderTextColor={colors.background}
                            autoCapitalize="none"
                            keyboardType="email-address"
                            leftIcon={{ type: 'material-icons', name: 'email', color: colors.background }}
                            inputContainerStyle={emailError == '' ? { borderBottomColor: colors.background } : { borderBottomColor: 'yellow' }}
                            inputStyle={{ color: colors.background, marginLeft: 10, }}
                            errorMessage={emailError}
                            errorStyle={{ color: 'yellow' }}
                            value={email}
                            onChangeText={text => setEmail(text)}
                        />
                        <Input
                            placeholder='Digite sua Senha'
                            placeholderTextColor={colors.background}
                            leftIcon={{ type: 'material-icons', name: 'lock', color: colors.background }}
                            inputStyle={{ color: colors.background, marginLeft: 10 }}
                            inputContainerStyle={emailError == '' ? { borderBottomColor: colors.background } : { borderBottomColor: 'yellow' }}
                            autoCapitalize="none"
                            keyboardType="default"
                            errorMessage={passError}
                            errorStyle={{ color: 'yellow' }}
                            value={password}
                            onChangeText={text => setPassword(text)}
                            secureTextEntry={true}
                        />
                    </InputView>
                    <Button
                        title="Entrar"
                        titleStyle={{ color: colors.primary, fontSize: 18 }}
                        buttonStyle={{ backgroundColor: 'yellow' }}
                        containerStyle={{ marginBottom: 60 }}
                    />
                    <Label
                        style={{ alignSelf: 'center', marginTop: 30 }}
                    >Não tem uma Conta? Inscreva-se</Label>
                </MainView>

            </AppContainer>

        </>
    )
}