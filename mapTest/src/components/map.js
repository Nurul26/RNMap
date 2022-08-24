import React, { useState } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const Map = ({ route }) => {
    const { locations } = route.params

    return (
        <View style={styles.container}>
            <View style={styles.mapContainer}>
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
    mapContainer: {
        ...StyleSheet.absoluteFillObject,
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        ...StyleSheet.absoluteFillObject,
    },
});


export default Map;