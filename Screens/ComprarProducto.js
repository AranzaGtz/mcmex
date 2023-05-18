import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function ComprarProducto({ navigation, route }) {
	return (
		<View style={styles.container}>
			<View>
				<Text>Comprar producto</Text>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
