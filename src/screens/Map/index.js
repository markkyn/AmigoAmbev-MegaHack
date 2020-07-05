import React from 'react';
import MapView, { Marker, Callout } from 'react-native-maps';
import { StyleSheet, Text, View } from 'react-native';

import Header from '../../components/Header';


export default function MapScreen({ navigation }) {

    const markers = [
        {
            id: 1,
            name: "Bar da Ana",
            coords: {
                latitude: -10.941322615325621,
                longitude: -37.059260699898005,
            },
            nota: 4.6
        },
        {
            id: 2,
            name: "Bar da Duda",
            coords: {
                latitude: -10.926928997122529,
                longitude: -37.05252148211002,
            },
            nota: 5
        },
        {
            id: 3,
            name: "Bar do Will",
            coords: {
                latitude: -10.953074025170846,
                longitude: -37.06655077636242,
            },
            nota: 4.0
        },
        {
            id: 4,
            name: "Bar do Marcos",
            coords: {
                latitude: -10.918979429935312,
                longitude: -37.06691589206457,
            },
            nota: 5
        },
        {
            id: 5,
            name: "Bar do Kaynan",
            coords: {
                latitude: -10.96061386153719,
                longitude: -37.04447150230408,
            },
            nota: 4.8

        },
    ]

    return (
        <>
        <Header
            onIconPress={() => navigation.navigate('Home')}
            Icon='home'
        />
        <View style={styles.container}>

            <MapView
                style={StyleSheet.absoluteFillObject}
                initialRegion={{
                    latitude: -10.944191195508207,
                    latitudeDelta: 0.08268135615418615,
                    longitude: -37.06029603257775,
                    longitudeDelta: 0.04212576895952225,
                }}
                onPress={e => console.log(e.nativeEvent)}
            >
                {
                    markers.map((bar) => {
                        return (
                            <Marker
                                coordinate={{ latitude: bar.coords.latitude, longitude: bar.coords.longitude }}
                                key={bar.id}

                            >
                                <Callout
                                >
                                    <View
                                        style={{ height: 100, width: 120, justifyContent: "center", alignItems: "center" }}
                                    >
                                        <Text
                                            style={{ fontSize: 18 }}
                                        >{bar.name}</Text>
                                        <View>

                                        </View>

                                        <Text
                                            style={{ textAlign: "center" }}
                                        >Ambev Stars</Text>
                                        <Text>{bar.nota}</Text>
                                    </View>

                                </Callout>
                            </Marker>
                        )
                    })
                }



            </MapView>
        </View >
        </>
        );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});