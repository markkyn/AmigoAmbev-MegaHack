import React from 'react';

import { View, Text, StatusBar } from 'react-native';
import { Avatar } from 'react-native-elements';

import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

import { Wrapper, Logo, LogoView } from './styles';

import { colors } from '../../styles';

import logo from '../../assets/amigoHeader.png'
import avatar from '../../assets/avatar.jpg';

export default function Header({ statusBarColor, onIconPress, onProfilePress, onLogoPress, Icon }) {
    return (
        <>
            <StatusBar
                backgroundColor={statusBarColor ? statusBarColor : colors.primary}
                barStyle="light"
            />
            <Wrapper
                elevation={3}
            >
                <FontAwesome name={Icon ? Icon :'qrcode'} size={34} color={colors.background} style={{ width: 34 }}
                    onPress={onIconPress}
                />

                <LogoView
                    onPress={onLogoPress}
                >
                    <Logo
                        style={{tintColor:colors.background }}
                        source={logo}
                        tintColor={colors.background}
                    />
                </LogoView>
                <Avatar
                    rounded
                    source={avatar}
                    containerStyle={{ borderColor: colors.background, borderWidth: 1 }}
                    onPress={onProfilePress}
                />
            </Wrapper>
        </>
    )
}