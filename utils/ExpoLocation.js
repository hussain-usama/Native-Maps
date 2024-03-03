
import * as Location from 'expo-location';


export const requestAccessLocation=async()=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        return 'Permission to access location was denied';
    }
}

export const getCurrentLocation=async()=>{
    await requestAccessLocation()
    let location = await Location.getCurrentPositionAsync({});
    if(location){
        return location
    }
    return 'Loading...'
}

export const getWatchedLoaction=async()=>{
    await requestAccessLocation()
    Location.watchPositionAsync({
        accuracy:6,
        timeInterval:1000,
        distanceInterval:1 // km
    },(location)=>{
        return location
    })

}