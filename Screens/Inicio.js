import React from "react";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import fondo from "../assets/fondo-inicio.png";
import ThemeButton from "../Components/ThemeButton";
import ThemeTemplate from "../Components/ThemeTemplate";
import ThemeText from "../Components/ThemeText";

const image =
	fondo; /* {uri: 'https://i.pinimg.com/564x/c1/8f/f2/c18ff2a10107fc3b08419db54241ea95.jpg'} */

export default function Inicio({ navigation }) {
	return (
		<ThemeTemplate>
			<View>
				<ThemeText style={styles.title}>Menú de comida Mexicana</ThemeText>
			</View>
			<View style={styles.child}>
				<ThemeButton
					title="Para ordenar aqui!"
					onPress={() => navigation.navigate("Ordenar")}
				/>
			</View>
		</ThemeTemplate>
	);
}
const styles = StyleSheet.create({
	child: {
		marginTop: 20,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		marginBottom: 40,
	}
});
