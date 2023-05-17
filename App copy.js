import { StyleSheet,  View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { useState, useEffect } from 'react';
import StackNavigator from './Navigations/StackNavigator';

export default function App(){
  const [cargado, setCargado] = useState(false)

  useEffect(() => {
    setTimeout(()=>setCargado(true),2000)
  }, [])

    return(
      <View style={styles.container}>
      {
        cargado
        ?
        (
          <NavigationContainer>
            <StackNavigator/>
          </NavigationContainer>)
        :
        <ActivityIndicator size="large" color="#00ff00"/>
      }
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
}});