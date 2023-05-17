import React, {Component} from "react";
import { StyleSheet, Text , View , Button } from "react-native";

export default class Pago extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text>Metodos de pago</Text>
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