import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import fondo from "../assets/fondo-inicio.png";
import { themeColors } from "../utils/constants";
import ThemeButton from "../Components/ThemeButton";

const image =
	fondo; /* {uri: 'https://i.pinimg.com/564x/c1/8f/f2/c18ff2a10107fc3b08419db54241ea95.jpg'} */

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
					<ThemeButton
						title="Para pedir aqui!"
						onPress={() => navigation.navigate("Comprar")}
					/>
				</View>
			</ImageBackground>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	child: {
		marginTop: 20,
	},
	image: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
