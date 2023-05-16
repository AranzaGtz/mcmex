import React, {Component} from "react";
import { StyleSheet, Text , View , Button } from "react-native";

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text>Menú de comida Mexicana</Text>
                    {/* Aqui quiero poner la listas de comidas */}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });