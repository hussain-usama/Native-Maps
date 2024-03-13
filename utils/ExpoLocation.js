
import * as Location from 'expo-location';


export const requestAccessLocation=async()=>{
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') {
        return 'Permission to access location was denied';
    }
    return true
}

export const getCurrentLocation=async()=>{
    let access= await requestAccessLocation()
    if(!access){
        return
    }
    let location = await Location.getCurrentPositionAsync({});
    if(location){
        return location
    }
    return 'Loading...'
}

export const getWatchedLoaction=async()=>{
    let access= await requestAccessLocation()
    if(!access){
        return
    }
    console.log("CHALA")
    let location = await Location.watchPositionAsync({
        accuracy:6,
        timeInterval:1000,
        distanceInterval:1 // km
    })
    if(location){
        return location
    }
    return 'Loading...'
}