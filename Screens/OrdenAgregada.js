import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useDataContext } from "../Context/DataContext";
import { Button, Card } from "@rneui/themed";

export default function OrdenAgregada({ navigation, route }) {
	const { orden } = route.params;

	const {
		producto,
		cantidad,
		complementos: complementosSeleccionados,
		notas,
	} = orden;
	const { complementos, categorias } = useDataContext();

	const precioTotal = cantidad * producto.precio;
	return (
		<ScrollView>
			<Card containerStyle={{ marginTop: 15 }}>
				<Card.Title style={styles.title}>
					Información del pedido
				</Card.Title>
				<Card.Image
					style={styles.image}
					source={{
						uri: producto.imagen,
					}}
				/>
				<View style={styles.content}>
					<Text style={styles.category}>
						{categorias.find((cat) => cat.id === producto.categoria)
							.nombre || "Sin categoría"}
					</Text>
					<Text style={styles.title}>{producto.nombre}</Text>
					<View style={styles.counter}>
						<View style={styles.counterContainer}>
							<Text style={styles.counterText}>x{cantidad}</Text>
						</View>
						<Text style={styles.price}>
							${precioTotal.toFixed(2)}
						</Text>
					</View>
					<Text numberOfLines={2} style={styles.description}>
						{producto.descripcion}
					</Text>
					<Card.Divider />
					<Card.Title style={styles.title}>Complementos</Card.Title>
					{complementosSeleccionados.length > 0 ? (
						complementosSeleccionados.map((complementoSel, idx) => {
							const complemento = complementos.find(
								(complemento) =>
									complemento.id === complementoSel.id
							);
							return (
								<View key={idx} style={styles.complemento}>
									<Text style={styles.complementoTitle}>
										{complemento.nombre}
									</Text>
									<View style={styles.complementoCounter}>
										<Text
											style={
												styles.complementoCounterText
											}
										>
											x{complementoSel.cantidad}
										</Text>
									</View>
								</View>
							);
						})
					) : (
						<Text style={styles.complementoTitleEmpty}>
							Sin complementos
						</Text>
					)}
					<Card.Divider />
					<Card.Title style={styles.title}>Notas</Card.Title>
                    <Text style={styles.description}>{notas}</Text>
					<Card.Divider />
					<Button
						buttonStyle={styles.button}
						size="lg"
						titleStyle={{ color: "white", marginHorizontal: 20 }}
						color="black"
						title="Regresar"
						onPress={async () => {
							// Regresar 2 veces la pantalla anterior, es decir, la de ordenar
							navigation.pop(2);
						}}
					/>
				</View>
			</Card>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	title: {
		fontSize: 25,
	},
	image: {
		width: "100%",
		height: 200,
		borderRadius: 10,
	},
	content: {
		marginTop: 10,
	},
	category: {
		fontSize: 12,
		color: "black",
		opacity: 0.6,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black",
	},
	counter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
	},
	counterContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	counterText: {
		fontSize: 25,
		fontWeight: "bold",
		marginHorizontal: 10,
	},
	price: {
		fontSize: 25,
		fontWeight: "bold",
	},
	description: {
		fontSize: 14,
		lineHeight: 20,
		color: "black",
		opacity: 0.6,
		marginVertical: 10,
	},
	button: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "black",
		padding: 10,
		width: "80%",
		alignSelf: "center",
		marginVertical: 10,
		fontWeight: "bold",
		width: "100%",
	},
	complemento: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
	},
	complementoTitle: {
		fontSize: 16,
		fontWeight: "bold",
	},
	complementoTitleEmpty: {
		fontSize: 16,
		fontWeight: "bold",
		color: "black",
		opacity: 0.6,
		marginVertical: 10,
		alignSelf: "center",
	},
	complementoCounter: {
		flexDirection: "row",
		alignItems: "center",
	},
	complementoCounterText: {
		fontSize: 20,
		fontWeight: "bold",
		marginHorizontal: 10,
	},
});
