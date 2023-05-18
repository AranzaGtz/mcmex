import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

const image = { uri: "assets/fondo1.jpg" };

export default function Inicio({ navigation }) {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={image}
				resizeMode="cover"
				style={styles.image}
			>
				<View>
					<Text>Menú de comida Mexicana</Text>
				</View>
				<View style={styles.child}>
					<Button
						title="Para pedir aqui!"
						onPress={() => navigation.navigate("Comprar")} // We added an onPress event which would navigate to the About screen
					/>
				</View>
			</ImageBackground>
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
		backgroundColor: "#E74C3C"
	},
	image: {
		flex: 1,
		justifyContent: "center",
	},
});
