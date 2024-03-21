import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Maps from "../components/Maps";
import { useEffect, useState } from "react";
import { buttonStyles, textfieldStyles } from "../utils/stylesUtils";

export default function PickupScreen({ navigation }) {
    const [location, setLocation] = useState(null)
    const [pickupAddress, setPickupAddress] = useState(null)
    const [pickupValue, setPickupValue] = useState('')
    const [places, setPlaces] = useState([])

    const searchPlaces = (text) => {
        setPickupValue(text)
        setPickupAddress(null)
        const options = {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                Authorization: "fsq3+vlLzYO+teOyuLPZ9RyA2stwHg1SvQf+b+JoHLr9lZ8=",
            }
        };
        const { latitude, longitude } = location.coords
        fetch(`https://api.foursquare.com/v3/places/search?query=${text}&ll=${latitude},${longitude}&raduis=3000`, options)
            .then(response => response.json())
            .then(response => {
                console.log(response, 'for suqare')
                setPlaces(response?.results)
            })
            .catch(err => console.error(err));
    }

    const selectPickup = (selectedLocation) => {
        let { main } = selectedLocation?.geocodes
        setPickupAddress(selectedLocation)
        setLocation({ coords: main })
        setPickupValue("")
    }
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.inputText}>Enter Pickup Location</Text>
                <TextInput style={textfieldStyles.input} value={pickupValue} placeholder="Type here..." onChangeText={searchPlaces} />
                {
                    pickupAddress ? (
                        <Text style={styles.address}>{`Your Pickup Location : ${pickupAddress?.name}`}</Text>
                    ) : (
                        places?.length ? 
                        places?.map((item, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => selectPickup(item)}>
                                    <Text>{item.name}, {item.location.address}</Text>
                                </TouchableOpacity>
                            )
                        }) : null
                    )
                }
                <View style={styles.buttonDiv}>
                    <TouchableOpacity style={buttonStyles.buttonDiv} onPress={() => navigation.goBack()}>
                        <Text style={buttonStyles.buttonText}>Go Back</Text>
                    </TouchableOpacity>
                    { pickupAddress && 
                    <TouchableOpacity style={buttonStyles.buttonDiv} onPress={() => navigation.navigate('Destination',pickupAddress)}>
                        <Text style={buttonStyles.buttonText}>Select Dropoff Location</Text>
                    </TouchableOpacity>}
                </View>
            </View>
            <Maps location={location} setLocation={setLocation} />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 12
    },
    inputText: {
        fontSize: 14,
    },
    buttonDiv: {
        display: 'flex'
    },
    address:{
        fontSize:16,
        fontWeight:'bold',
        color:'#008000'
    }
});
