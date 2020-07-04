import React from 'react';

import { colors } from '../../styles';

import { Image } from 'react-native';
import { Button } from 'react-native-elements';

import { AppContainer } from '../../components/AppContainer'
import Header from '../../components/Header'


import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons'; 
import logo from '../../assets/amigoHeader.png'

export default function Buttons() {
    return (
        <>
            <Header />
            <AppContainer
                style={{ paddingTop: 10, paddingHorizontal: 30 }}
            >
                <Button
                    containerStyle={{marginBottom: 10}}
                    iconLeft
                    buttonStyle={{ borderRadius: 30, backgroundColor: colors.background, borderWidth: 3, borderColor: colors.primary }}
                    titleStyle={{ color: colors.primaryDark, fontSize: 20, fontWeight: 'bold' }}
                    icon={<MaterialCommunityIcons name="beer" size={24} color={colors.primaryDark} />}
                    title='Calcule Sua Festa!'
                    onPress={() => { console.log('pressionado') }}
                />
                <Button
                    iconLeft
                    buttonStyle={{ borderRadius: 30, backgroundColor: colors.background, borderWidth: 3, borderColor: colors.primary }}
                    titleStyle={{ color: colors.primaryDark, fontSize: 20, fontWeight: 'bold' }}
                    icon={<AntDesign name="star" size={24} color={colors.primaryDark} />}
                    title='AmbevStars'
                    onPress={() => { console.log('pressionado') }}
                />


            </AppContainer>
        </>
    );
}