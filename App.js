import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, } from 'react-native';
import { useState } from 'react';
import HelpScreen from './screens/HelpScreen';
import HomeScreen from './screens/HomeScreen';
import PersonViewScreen from './screens/PersonViewScreen';
import PersonEditScreen from './screens/PersonEditScreen';
import PeopleViewScreen from './screens/PeopleViewScreen';

export default function App() {
  /* const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]); */
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState({});
  const [productList, setProductList] = useState([]);
  
  
  return (
    <View style={styles.container}>
     
      <PeopleViewScreen/>
      
      
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
