import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Maps from "../components/Maps";
import { useEffect, useState } from "react";
import { getCurrentLocation, getWatchedLoaction } from "../utils/ExpoLocation";
import { buttonStyles, textfieldStyles } from "../utils/stylesUtils";


export default function PickupScreen({ navigation }) {
    const [location,setLocation]=useState(null)

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.inputText}>Enter Pickup Location</Text>
            <TextInput style={textfieldStyles.input} placeholder="Type here..."/>   
            <View style={styles.buttonDiv}>
                <TouchableOpacity style={buttonStyles.buttonDiv} onPress={()=>  navigation.goBack()}>
                    <Text style={buttonStyles.buttonText}>Go Back</Text>    
                </TouchableOpacity>   
                <TouchableOpacity style={buttonStyles.buttonDiv} onPress={()=>  navigation.navigate('Destination')}>
                    <Text style={buttonStyles.buttonText}>Select Dropoff Location</Text>    
                </TouchableOpacity>   
            </View>
        </View>
        <Maps />
        </>
    )
}

const styles = StyleSheet.create({
    container:{
       margin:12
    },
    inputText:{
        fontSize:14,
    },
    buttonDiv:{
        display:'flex'
    }
});