import React, {Component} from "react";
import { StyleSheet, Text , View , Button } from "react-native";

export default class Productos extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text>Lista de Productos</Text>
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