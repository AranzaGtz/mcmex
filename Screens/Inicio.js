import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function Inicio({ navigation }) {
	return (
		<View style={styles.container}>
			<View>
				<Text>Menú de comida Mexicana</Text>
			</View>
			<View style={styles.child}>
				<Button
					title="Ir a comprar"
					onPress={() => navigation.navigate("Comprar")} // We added an onPress event which would navigate to the About screen
				/>
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
	child: {
		marginTop: 20,
	},
});
