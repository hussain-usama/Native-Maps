import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import DrawerNavigation from './components/DrawerNavigation';
export default function App() {
  return (
    <View style={styles.container}>
      <DrawerNavigation/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c0c0c0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
