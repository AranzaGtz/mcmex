import { StyleSheet,  View, ActivityIndicator} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './Screens/HomeScreen';
import { Component, useState, useEffect } from 'react';
import BottomTab from './Navigations/BottomTab'

export default function App(){
  const [cargado, setCargado] = useState(false)

  useEffect(() => {
    setTimeout(()=>setCargado(true),5000)
  }, [])

    return(
      <View style={styles.container}>
      {
        cargado
        ?
        (
          <NavigationContainer>
            <BottomTab/>
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