import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";

const image = {uri: 'https://i.pinimg.com/564x/c1/8f/f2/c18ff2a10107fc3b08419db54241ea95.jpg'};

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
						onPress={() => navigation.navigate("Comprar")}
						color="#E74C3C"
						// We added an onPress event which would navigate to the About screen
					/>
				</View>
			</ImageBackground>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FE9C68",
		alignItems: "center",
		justifyContent: "center",
	},
	child: {
		marginTop: 20
	},
	image: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	}
});
