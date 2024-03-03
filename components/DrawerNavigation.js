import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../views/Home';
import PickupScreen from '../views/PickupScreen';
import DestinationScreen from '../views/DestinationScreen';
const Drawer = createDrawerNavigator();

export default function DrawerNavigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Pickup" component={PickupScreen} />
        <Drawer.Screen name="Destination" component={DestinationScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}