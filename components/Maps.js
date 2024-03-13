import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { getCurrentLocation, getWatchedLoaction } from '../utils/ExpoLocation';

export default function Maps({location,setLocation}) {

    useEffect(() => {
        (async () => {
            let locationResponse = await getCurrentLocation()
            // let watchPosition=await getWatchedLoaction() // if calling within the component(pickup/destination) then it works 
            // console.log(watchPosition,'watchPosition') 
            setLocation(locationResponse)
        })()
    }, [])

    if (!location) {
        return <Text>Loading Maps...</Text>
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
