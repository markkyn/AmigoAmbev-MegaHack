import React from 'react';

import { View, Text } from 'react-native';
import { Avatar } from 'react-native-elements';

import { Body, TopView, AvatarView, DataView } from './styles';

import { AppContainer } from '../../components/AppContainer'
import Header from '../../components/Header'

import ambevAvatar from '../../assets/avatar.jpg';

export default function Profile() {
    return (
        <AppContainer>
            <Header />
            <Body>
                <TopView>

                    <AvatarView>
                        <Avatar rounded size="xlarge" source={ambevAvatar} containerStyle={{ borderColor: '#262626', borderWidth: 3, marginBottom: 15 }} />
                        <Text style={{ fontSize: 20 }}>Marcos Gabriel</Text>
                        <Text style={{ color: '#999' }}>Aracaju , SE</Text>
                    </AvatarView>

                    <DataView>
                        <View
                            style={{ alignItems: 'center', width: 80 }}
                        >
                            <Text
                                style={{ textAlign: "center", fontSize: 16, fontWeight: 'bold' }}
                            >
                                {`Bares\nVisitados`}
                            </Text>
                            <Text
                                style={{ fontSize: 24 }}

                            >4</Text>

                        </View>
                        <View
                            style={{ alignItems: 'center', flex: 1, width: 80 }}
                        >
                            <Text
                                style={{ textAlign: "center", fontSize: 16, fontWeight: 'bold' }}
                            >
                                {`Ambev\nPoints`}

                            </Text>
                            <Text
                                style={{ fontSize: 24 }}
                            >5</Text>

                        </View>
                        <View
                            style={{ alignItems: 'center', width: 80 }}
                        >
                            <Text
                                style={{ textAlign: "center", fontSize: 16, fontWeight: 'bold' }}
                            >
                                {`Cupons`}
                            </Text>
                            <Text
                                style={{ fontSize: 24 }}

                            >14</Text>
                        </View>
                    </DataView>
                </TopView>
            </Body>
        </AppContainer>
    );
}