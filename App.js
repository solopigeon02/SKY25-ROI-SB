import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HelpScreen from './screens/HelpScreen';
import HomeScreen from './screens/HomeScreen';
import PersonViewScreen from './screens/PersonViewScreen';
import PersonEditScreen from './screens/PersonEditScreen';
import PeopleViewScreen from './screens/PeopleViewScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HelpScreen/>
      <HomeScreen/>
      <PeopleViewScreen/>
      <PersonEditScreen/> */}
      <PersonViewScreen/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    /* alignItems: 'center',
    justifyContent: 'center', */
  },
});
