import React from 'react';

import { View, Text, StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 

import { Wrapper, Logo } from './styles';

import { colors } from '../../styles';

import logo from '../../assets/amigoHeader.png'
import avatar from '../../assets/avatar.jpg';

export default function Header({statusBarColor}) {
    return (
        <>
            <StatusBar
                backgroundColor={statusBarColor ? statusBarColor : colors.primary }
                barStyle="light"
            />
            <Wrapper
                elevation={3}
            >
                <MaterialCommunityIcons name="qrcode-scan" size={34} color={colors.background} style={{ width: 34 }}/>
                <Logo
                    source={logo}
                    tintColor={colors.background}
                />
                <Avatar
                    rounded
                    source={avatar}
                    containerStyle={{borderColor:colors.background, borderWidth: 1}}
                />
            </Wrapper>
        </>
    )
}