import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Maps from "../components/Maps";
import { useEffect, useState } from "react";
import { buttonStyles, textfieldStyles } from "../utils/stylesUtils";

export default function PickupScreen({ navigation }) {
    const [location,setLocation]=useState(null)
    const [places,setPlaces]=useState([])
 
    const searchPlaces=(text)=>{
        console.log(text,'inputtext')
        
        const options = {method: 'GET', 
        headers: {
            Accept: 'application/json',
            Authorization: "fsq3+vlLzYO+teOyuLPZ9RyA2stwHg1SvQf+b+JoHLr9lZ8=",
          }
        };
        const { latitude, longitude } = location.coords
        fetch(`https://api.foursquare.com/v3/places/search?query=${text}&ll=${latitude},${longitude}&raduis=3000`, options)
        .then(response => response.json())
        .then(response => {
            console.log(response,'for suqare')
            setPlaces(response?.results)
        })
        .catch(err => console.error(err));
    }
    return (
        <>
        <View style={styles.container}>
            <Text style={styles.inputText}>Enter Pickup Location</Text>
            <TextInput style={textfieldStyles.input} placeholder="Type here..." onChangeText={searchPlaces}/>  
            {places?.map(item=>{
                return (
                    <TouchableOpacity >
                       <Text>{item.name}, {item.location.address}</Text>
                </TouchableOpacity>  
                )
            })} 
            <View style={styles.buttonDiv}>
                <TouchableOpacity style={buttonStyles.buttonDiv} onPress={()=>  navigation.goBack()}>
                    <Text style={buttonStyles.buttonText}>Go Back</Text>    
                </TouchableOpacity>   
                <TouchableOpacity style={buttonStyles.buttonDiv} onPress={()=>  navigation.navigate('Destination')}>
                    <Text style={buttonStyles.buttonText}>Select Dropoff Location</Text>    
                </TouchableOpacity>   
            </View>
        </View>
        {/* {location ?  */}
          <Maps location={location} setLocation={setLocation} />
        {/* : <Text>Loading...</Text> */}
        {/* } */}
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
    },
});
