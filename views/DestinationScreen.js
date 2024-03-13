import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Maps from "../components/Maps";
import { useState } from "react";


export default function DestinationScreen({ navigation }) {
    const [location,setLocation]=useState(null)

    return (
        <>
        <View style={styles.container}>
            <Text style={styles.inputText}>Enter Dropoff Location</Text>
            <TextInput style={styles.input}/>            
        </View>
        <Maps location={location} setLocation={setLocation} />
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
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
});