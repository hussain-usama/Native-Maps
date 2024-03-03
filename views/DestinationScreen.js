import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Maps from "../components/Maps";


export default function DestinationScreen({ navigation }) {
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.inputText}>Enter Dropoff Location</Text>
            <TextInput style={styles.input}/>            
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
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
    },
});