import React from "react";
import { StyleSheet, View,  } from "react-native";
import ThemeButton from "../Components/ThemeButton";
import ThemeTemplate from "../Components/ThemeTemplate";
import ThemeText from "../Components/ThemeText";

export default function Inicio({ navigation }) {
	return (
		<ThemeTemplate>
			<View style={styles.container}>
			<View>
				<ThemeText style={styles.title}>Menú de comida Mexicana</ThemeText>
			</View>
			<View style={styles.child}>
				<ThemeButton
					title="Para ordenar aqui!"
					onPress={() => navigation.navigate("Ordenar")}
				/>
			</View>
			</View>
		</ThemeTemplate>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	child: {
		marginTop: 20,
	},
	title: {
		fontSize: 25,
		fontWeight: "bold",
		marginBottom: 40,
	}
});
