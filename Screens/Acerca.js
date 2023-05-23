import React from "react";
import { StyleSheet, View } from "react-native";
import ThemeTemplate from "../Components/ThemeTemplate";
import { Text, Card } from "@rneui/themed";
import logo from "../assets/adaptive-taco.png";
import logoITT from "../assets/ITT.png";
import app from "../app.json";

export default function Acerca(props) {
	return (
		<ThemeTemplate>
			<Card>
				<Card.Title>Información de la aplicación</Card.Title>
				<Card.Divider />
				<View
					style={{
						flexDirection: "row",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Card.Image
						style={{
							padding: 0,
							marginBottom: 10,
							width: 100,
							height: 100,
						}}
						source={logo}
					/>
					<Text h4> X </Text>
					<Card.Image
						style={{
							padding: 0,
							marginBottom: 10,
							width: 100,
							height: 100,
						}}
						source={logoITT}
					/>
				</View>
				<Card.Divider />
				<Text style={styles.textFull}>
					Esta es una aplicación móvil desarrollada con el propósito
					de fungir como aplicación de tableta para hacer pedidos en
					un restaurante mexicano.
				</Text>
				<Text style={styles.textFull}>
					Creado para la clase de "Desarrollo de Aplicaciones para
					Dispositivos Móviles" impartido por la maestra "Dra. Daniela
					Adriana Sanchez Vizcarra".
				</Text>
				<Card.Divider />
				<Text style={styles.text} h4>
					Version
				</Text>
				<Text style={styles.text}>{app.expo.version}</Text>
				<Text style={styles.text} h4>
					Creadores
				</Text>
				<Text style={styles.text}>Pablo Alberto Espinoza Ruiz</Text>
				<Text style={styles.text}>Aranza Gutierrez Mora</Text>
			</Card>
		</ThemeTemplate>
	);
}
const styles = StyleSheet.create({
	text: {
		textAlign: "center",
		marginBottom: 10,
	},
	textFull: {
		textAlign: "center",
		marginBottom: 10,
		marginHorizontal: 10,
	},
});
