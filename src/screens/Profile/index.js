import React from 'react';

import { View, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import { Body, TopView, AvatarView, DataView, MidView, CuponsView } from './styles';
import { colors } from '../../styles';

import { AppContainer } from '../../components/AppContainer'
import Header from '../../components/Header'

import ambevAvatar from '../../assets/avatar.jpg';

export default function Profile() {

    const cupomArray = [
        {
            name: 'Retro Bar',
            description: 'Olá',
            avatar: 'https://www.logaster.com.br/blog/wp-content/uploads/sites/6/2019/03/t_Retro-Burger-Bar-Logo_1.png'
        },
        {
            name: 'Tops Bar',
            description: 'Olá',
            avatar: 'https://i.pinimg.com/originals/62/d6/90/62d690a2857600e189a72963659bb9f6.jpg'
        },
        {
            name: 'Bar do Juarez',
            description: 'Olá',
            avatar: 'https://static.wixstatic.com/media/7201a9_394287cd09314c90a77b61beeb484679~mv2_d_2466_2176_s_2.png/v1/fit/w_2500,h_1330,al_c/7201a9_394287cd09314c90a77b61beeb484679~mv2_d_2466_2176_s_2.png'
        },
        {
            name: 'Lorem Ipsum Vinhos',
            description: 'Olá',
            avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHhYmNfeRYHLjKlRhMhPlgYkkXPYfZPvVY3g&usqp=CAU'
        }
    ]
    return (
        <AppContainer>
            <Header />
            <Body>
                <TopView>

                    <AvatarView>
                        <Avatar rounded size="xlarge" source={ambevAvatar} containerStyle={{ borderColor: '#262626', borderWidth: 3, marginBottom: 15 }} />
                        <Text style={{ fontSize: 20, color: colors.background }}>Marcos Gabriel</Text>
                        <Text style={{ color: '#999' }}>Aracaju , SE</Text>
                    </AvatarView>

                    <DataView>
                        <View
                            style={{ alignItems: 'center', width: 80 }}
                        >
                            <Text
                                style={{ textAlign: "center", fontSize: 16, fontWeight: 'bold', color: colors.background }}
                            >
                                {`Bares\nVisitados`}
                            </Text>
                            <Text
                                style={{ fontSize: 24, color: colors.background }}

                            >
                                4
                            </Text>

                        </View>
                        <View
                            style={{ alignItems: 'center', flex: 1, width: 80 }}
                        >
                            <Text
                                style={{ textAlign: "center", fontSize: 16, fontWeight: 'bold', color: colors.background }}
                            >
                                {`Ambev\nPoints`}

                            </Text>
                            <Text
                                style={{ fontSize: 24, color: colors.background }}
                            >
                                5
                            </Text>

                        </View>
                        <View
                            style={{ alignItems: 'center', width: 80 }}
                        >
                            <Text
                                style={{ textAlign: "center", fontSize: 16, fontWeight: 'bold', color: colors.background }}
                            >
                                {`Cupons`}
                            </Text>
                            <Text
                                style={{ fontSize: 24, color: colors.background }}

                            >
                                14
                            </Text>
                        </View>
                    </DataView>
                </TopView>
                <MidView>
                    <CuponsView>
                        <Text style={{ alignSelf: 'center' }}>Cupons</Text>
                        <View>

                            {
                                cupomArray.map((cupom, index) => {
                                    return (
                                        <ListItem
                                            key={index}
                                            leftAvatar={{ source: { uri: cupom.avatar } }}
                                            title={cupom.name}
                                            bottomDivider
                                        />
                                    )
                                })
                            }
                        </View>
                    </CuponsView>
                </MidView>
            </Body>
        </AppContainer>
    );
}