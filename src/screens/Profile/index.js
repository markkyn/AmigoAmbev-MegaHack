import React from 'react';

import { View, Text } from 'react-native';
import { Avatar, ListItem } from 'react-native-elements';

import { Body, TopView, AvatarView, DataView, MidView, CuponsView, NameLabel, LocationLabel, DataLabel, SectionLabel, NumberLabel } from './styles';
import { colors } from '../../styles';

import { AppContainer } from '../../components/AppContainer'
import Header from '../../components/Header'

import ambevAvatar from '../../assets/avatar.jpg';

export default function Profile() {

    const cupomArray = [
        {
            name: 'Retro Bar',
            description: 'Você tem um Cupom de R$17,00 reais',
            avatar: 'https://www.logaster.com.br/blog/wp-content/uploads/sites/6/2019/03/t_Retro-Burger-Bar-Logo_1.png'
        },
        {
            name: 'Tops Bar',
            description: 'Você tem um Cupom de R$10,00 reais',
            avatar: 'https://i.pinimg.com/originals/62/d6/90/62d690a2857600e189a72963659bb9f6.jpg'
        },
        {
            name: 'Bar do Juarez',
            description: 'Você tem um Cupom de R$19,00 reais',
            avatar: 'https://static.wixstatic.com/media/7201a9_394287cd09314c90a77b61beeb484679~mv2_d_2466_2176_s_2.png/v1/fit/w_2500,h_1330,al_c/7201a9_394287cd09314c90a77b61beeb484679~mv2_d_2466_2176_s_2.png'
        },
        {
            name: 'Lorem Ipsum Vinhos',
            description: 'Você tem um Cupom de R$3,00 reais',
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
                        <NameLabel>Marcos Gabriel</NameLabel>
                        <LocationLabel> Aracaju , SE</LocationLabel>
                    </AvatarView>

                    <DataView>
                        <View
                            style={{ alignItems: 'center', width: 80 }}
                        >
                            <DataLabel>
                                {`Bares\nVisitados`}
                            </DataLabel>
                            <NumberLabel>
                                6
                            </NumberLabel>

                        </View>
                        <View
                            style={{ alignItems: 'center', flex: 1, width: 80 }}
                        >
                            <DataLabel>
                                {`Ambev\nPoints`}
                            </DataLabel>
                            <NumberLabel>
                                180
                            </NumberLabel>

                        </View>
                        <View
                            style={{ alignItems: 'center', width: 80 }}
                        >
                            <DataLabel>
                                {`Cupons\nRecebidos`}
                            </DataLabel>
                            <NumberLabel>
                                5
                            </NumberLabel>
                        </View>
                    </DataView>
                </TopView>
                <MidView
                    elevation={7}
                >
                    <CuponsView>
                        <SectionLabel>Cupons</SectionLabel>
                        <View>

                            {
                                cupomArray.map((cupom, index) => {
                                    return (
                                        <ListItem
                                            containerStyle={{ backgroundColor: colors.background }}
                                            key={index}
                                            leftAvatar={{ source: { uri: cupom.avatar } }}
                                            title={cupom.name}
                                            subtitle={cupom.description}
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