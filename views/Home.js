import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { buttonStyles } from "../utils/stylesUtils";

export default function Home({navigation }){
    return (
        <>
        <View style={styles.container}>
         <Text style={styles.heading}>Welcome To Our Services</Text>
         <TouchableOpacity style={buttonStyles.buttonDiv} onPress={()=>  navigation.navigate('Pickup')}>
            <Text style={buttonStyles.buttonText}>Book A Ride</Text>
         </TouchableOpacity>
         </View>
        </>
    )
}
const styles = StyleSheet.create({
    container:{
        margin:12,
        marginTop:'50%'
    },
    heading:{
        textAlign:'center',
        fontWeight:'500',
        fontSize:24,
        color:"#000"
    },
  });