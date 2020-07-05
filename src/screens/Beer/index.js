import React from 'react';

import { ScrollView, View, Text } from 'react-native';
import { Button } from 'react-native-elements';
import { Svg, Path } from 'react-native-svg';

import Header from '../../components/Header';
import { AppContainer } from '../../components/AppContainer';

import { colors, metrics } from '../../styles';
import { TopView, TextView, Beer, Logo, DescriptionL, DescriptionR, MidView } from './styles';


import coronaLogo from '../../assets/corona.png';
import coronaLN from '../../assets/coronaLN.png';

export default function BeerDesc({ navigation }) {

    return (
        <AppContainer>
            <Header
                onIconPress={() => navigation.navigate('Home')}
                Icon='home'
            ></Header>
            <ScrollView>
                <View
                >

                    <TopView>

                        <Beer
                            source={coronaLN}
                        />
                        <TextView>
                            <Logo
                                source={coronaLogo}
                                tintColor="#f1f1f1"
                            />
                            <View
                                style={{ flexDirection: 'row', }}
                            >
                                <View>
                                    <DescriptionL>Categoria</DescriptionL>
                                    <DescriptionL>Teor Alcólico</DescriptionL>
                                    <DescriptionL>Origem</DescriptionL>
                                </View>
                                <View>
                                    <DescriptionR>American Lager</DescriptionR>
                                    <DescriptionR>4.6</DescriptionR>
                                    <DescriptionR>México</DescriptionR>
                                </View>
                            </View>
                            <Button
                                title='Encontre perto de você!'
                                containerStyle={{ marginTop: 40, borderRadius: 20 }}
                                buttonStyle={{ backgroundColor: colors.yellow }}
                                titleStyle={{ color: '#262626' }}
                                onPress={()=>{navigation.navigate('MapScreen')}}
                            />
                        </TextView>

                    </TopView>
                    <Svg height={50} width={metrics.screenWidth} fill={colors.primaryDark} style={{ position: "relative", zIndex: -1 }}>
                        <Path d="M 0 0 Q 150 50 800 50 L 800 0 Z" />
                    </Svg>
                </View>

                <MidView>
                    <View
                        style={{ marginTop: 10, alignItems: 'center', padding: 30 }}
                    >
                        <Text
                            style={{ fontSize: 24, paddingBottom: 3, borderBottomColor: '#262626', borderBottomWidth: 3, marginBottom: 30 }}
                        >
                            Bibliografia
                        </Text>
                        <Text
                            style={{ textAlign: "center" }}
                        >
                            A CORONA foi introduzida no mercado mexicano como uma cerveja tipo Pilsner no ano de 1925 pela Cervecería Modelo, localizada na Cidade do México e fundada neste mesmo ano pelos imigrantes espanhóis Pablo Díez Fernández e Félix Aramburuzabala. No ano seguinte a cerveja começou a ser embalada em garrafa transparente (de 250 ml), atendendo a preferência popular, ao contrário de muitas outras da época, que eram engarrafadas em vasilhames de cor escura (âmbar). Durante anos a marca ganhou grande popularidade no mercado nacional mexicano com ações de marketing agressivas para época, como, por exemplo, anúncios em néon, patrocínios de festas e eventos, e distribuição de abridores e calendários para fixar a marca na cabeça do consumidor. Uma década após seu lançamento a CORONA já era considerada a melhor cerveja do país e a mais vendida. Um verdadeiro fenômeno.      No verão de 1940, a marca foi relançada no mercado com o nome de CORONA EXTRA, tendo como novidade o rótulo impresso diretamente no vidro da garrafa, deixando o tradicional rótulo de papel para trás. Essa mudança concedeu modernidade à marca. Três anos mais tarde, os caminhões de entrega da cerveja carregavam cartazes com o slogan “The finest Beer”
                        </Text>
                    </View>
                    <View
                        style={{ marginTop: 10, alignItems: 'center', padding: 30 }}
                    >
                        <Text
                            style={{ fontSize: 24, paddingBottom: 3, borderBottomColor: '#262626', borderBottomWidth: 3, marginBottom: 30 }}
                        >
                            Comentários
                        </Text>

                    </View>

                </MidView>
            </ScrollView>

        </AppContainer>
    );
}