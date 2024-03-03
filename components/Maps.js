import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { getCurrentLocation, getWatchedLoaction } from '../utils/ExpoLocation';

export default function Maps() {

    const [location, setLocation] = useState(null)

    useEffect(() => {
        (async () => {
            let locationResponse = await getCurrentLocation()
            console.log('location response', locationResponse)
            setLocation(locationResponse)
        })()
    }, [])

    console.log(location,'location')
    if (!location) {
        return <Text>Loading...</Text>
    }
    return (
        <>
            <MapView
                style={styles.map}
                region={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
            >
            <Marker
                coordinate={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude
                }}
                title={'Title is Here'}
                description={'Description is Here'}
            />
            </MapView>
        </>
    );
}

const styles = StyleSheet.create({
    map: {
        width: '100%',
        height: '100%',
    },
});
