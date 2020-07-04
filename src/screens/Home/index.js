import React from "react";

import { View, Text, FlatList, Image } from 'react-native';
import { Button } from 'react-native-elements';

import { AppContainer } from '../../components/AppContainer';
import Header from '../../components/Header';

import { SectionView } from './styles';
import { colors } from "../../styles";

import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import QRScreen from "../QRScanner";

const DATA = [
    {
        id: 1,
        picURI: 'https://instagram.faju2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/p1080x1080/106063739_607661873211131_4177645860607252040_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net&_nc_cat=111&_nc_ohc=DAwH7BqaB-kAX-xnpaY&oh=abf55ee19e2c2363d15ce5daaf1024da&oe=5F02A637',
    },
    {
        id: 2,
        picURI: 'https://instagram.faju2-1.fna.fbcdn.net/v/t51.2885-15/e35/106157982_703205367183384_1072728688922152136_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=tZUawEwZBqgAX-kprcY&oh=bfd6bc909ce241c08c8a56e1d8d0fd89&oe=5F28D389',
    },
    {
        id: 3,
        picURI: 'https://instagram.faju2-1.fna.fbcdn.net/v/t51.2885-15/fr/e15/s1080x1080/106393075_179546073530777_1128636140314743013_n.jpg?_nc_ht=instagram.faju2-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=ObSmEt3B3fAAX89DHBY&oh=39a6df3e7be6d7c3000f7e8bb0ed9349&oe=5F296E24',
    },
];

export default function Home({ navigation }) {
    return (
        <>
            <AppContainer
                style={{ backgroundColor: colors.backgroundDark }}
            >
                <Header
                    onIconPress={() => navigation.navigate('QRScanner')}
                    onProfilePress={() => navigation.navigate('Profile')}
                ></Header>
                <View
                    style={{ backgroundColor: colors.backgroundDark, paddingTop: 10 }}
                >
                    <Text
                        style={{ alignSelf: 'center', fontWeight: 'bold', fontSize: 24, borderBottomWidth: 2 }}
                    >
                        Novidades Ambev
                    </Text>
                    <FlatList
                        style={{ height: 260, paddingLeft: 20 }}
                        data={DATA}
                        horizontal
                        renderItem={({ item }) =>
                            <View elevation={3}>
                                <Image source={{ uri: item.picURI }} style={{ height: 200, width: 230, margin: 20, borderRadius: 20, borderColor: '#999', borderWidth: 1 }} />
                            </View>
                        }
                        keyExtractor={item => item.id}
                    />
                </View>

                <Button
                    iconLeft
                    buttonStyle={{ width: 150, borderRadius: 30, backgroundColor: colors.background, borderWidth: 3, borderColor: colors.primary }}
                    titleStyle={{ color: colors.primaryDark, fontSize: 15, fontWeight: 'bold' }}
                    icon={<MaterialCommunityIcons name="beer" size={18} color={colors.primaryDark} />}
                    title='Deixa com Ambev'
                    onPress={() => { console.log('pressionado') }}
                />
                <Button
                    iconLeft
                    buttonStyle={{ width: 150, borderRadius: 30, backgroundColor: colors.background, borderWidth: 3, borderColor: colors.primary }}
                    titleStyle={{ color: colors.primaryDark, fontSize: 15, fontWeight: 'bold' }}
                    title='AmbevStars'
                    icon={<AntDesign name="star" size={18} color={colors.primaryDark} />}
                    onPress={() => { console.log('pressionado') }}
                />
            </AppContainer>
        </>
    )
}