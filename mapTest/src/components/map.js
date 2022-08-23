import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'

const Map = ({ route }) => {
    const {locations} = route.params
    console.log("places"+ locations)

    return (
        <View>
            <Text>Map</Text>
            <View>
                <MapView
                    style={styles.map}
                    region={{
                        latitude: parseFloat(locations.latitude),
                        longitude: parseFloat(locations.longitude),
                        latitudeDelta: 0.01,
                        longitudeDelta: 0.01,
                    }}
                >
                    <Marker
                        coordinate={{
                            latitude: parseFloat(locations.latitude),
                            longitude: parseFloat(locations.longitude)
                        }}
                        title={locations.name}
                    />
                </MapView>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    content: {
        fontSize: 18,
        textAlign: 'center',
    },
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'flex-end',
        alignItems: 'center',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        position: 'absolute',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default Map;