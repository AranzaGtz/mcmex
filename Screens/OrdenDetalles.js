import React, { useMemo, useState } from "react";
import { Alert, StyleSheet, Text, View, ScrollView } from "react-native";
import { useDataContext } from "../Context/DataContext";
import { AntDesign } from "@expo/vector-icons";
import { Dialog, Button, Card, Input } from "@rneui/themed";
import DialogComplementos from "../Components/DialogComplementos";
import { cleanRedirect } from "../utils/navigationHelper";
import { alert } from "../utils/alertPolyfill";
import { defaultNotes } from "../utils/constants";

export default function OrdenDetalles({ navigation, route }) {
	const { producto } = route.params;
	const { complementos, categorias, agregarAlCarrito } = useDataContext();
	const [cantidad, setCantidad] = useState(1);
	const [complementosSeleccionados, setComplementosSeleccionados] = useState(
		producto.precomplementos.map((precomplemento) => ({
			id: precomplemento,
			cantidad: 1,
		}))
	);
	const [notas, setNotas] = useState("");
	const precioTotal = useMemo(() => cantidad * producto.precio, [cantidad]);
	const [showDialogComplementos, setShowDialogComplementos] = useState(false);

	const toggleDialogComplementos = () => {
		setShowDialogComplementos((prev) => !prev);
	};

	return (
		<ScrollView>
			<Dialog
				isVisible={showDialogComplementos}
				onBackdropPress={toggleDialogComplementos}
			>
				<DialogComplementos
					onSelected={(complemento) =>
						setComplementosSeleccionados([
							...complementosSeleccionados,
							{ id: complemento.id, cantidad: 1 },
						])
					}
					taked={complementosSeleccionados.map(
						(complemento) => complemento.id
					)}
					closeDialog={toggleDialogComplementos}
				/>
			</Dialog>
			<Card containerStyle={{ marginTop: 15 }}>
				<Card.Title style={styles.title}>
					Información del producto
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
							<AntDesign
								name="minuscircleo"
								size={30}
								color={"black"}
								onPress={() => setCantidad(cantidad - 1)}
							/>
							<Text style={styles.counterText}>x{cantidad}</Text>
							<AntDesign
								name="pluscircleo"
								size={30}
								color={"black"}
								onPress={() => setCantidad(cantidad + 1)}
							/>
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
										<AntDesign
											name="minuscircleo"
											size={30}
											color={"black"}
											onPress={() => {
												if (
													complementoSel.cantidad > 0
												) {
													const newComplementosSeleccionados =
														[
															...complementosSeleccionados,
														];
													newComplementosSeleccionados[
														idx
													] = {
														id: complementoSel.id,
														cantidad:
															complementoSel.cantidad -
															1,
													};
													setComplementosSeleccionados(
														newComplementosSeleccionados
													);
													if (
														complementoSel.cantidad <=
														1
													) {
														newComplementosSeleccionados.splice(
															idx,
															1
														);
														setComplementosSeleccionados(
															newComplementosSeleccionados
														);
													}
												}
											}}
										/>
										<Text
											style={
												styles.complementoCounterText
											}
										>
											x{complementoSel.cantidad}
										</Text>
										<AntDesign
											name="pluscircleo"
											size={30}
											color={"black"}
											onPress={() => {
												const newComplementosSeleccionados =
													[
														...complementosSeleccionados,
													];
												newComplementosSeleccionados[
													idx
												] = {
													id: complementoSel.id,
													cantidad:
														complementoSel.cantidad +
														1,
												};
												setComplementosSeleccionados(
													newComplementosSeleccionados
												);
											}}
										/>
									</View>
								</View>
							);
						})
					) : (
						<Text style={styles.complementoTitleEmpty}>
							No hay complementos
						</Text>
					)}
					<Button
						title="Agregar"
						icon={{
							name: "plus",
							type: "font-awesome",
							size: 15,
							color: "white",
						}}
						iconRight
						iconContainerStyle={{ marginLeft: 10 }}
						titleStyle={{ fontWeight: "700" }}
						buttonStyle={{
							backgroundColor: "rgba(127, 220, 103, 1)",
							borderColor: "transparent",
							borderWidth: 0,
							borderRadius: 5,
						}}
						containerStyle={{
							width: 200,
							marginHorizontal: 50,
							marginVertical: 10,
						}}
						onPress={toggleDialogComplementos}
					/>
					<Card.Divider />
					<Card.Title style={styles.title}>Notas</Card.Title>
					<Input
						placeholder="Ej: Sin cebolla"
						onChangeText={(text) => setNotas(text)}
						value={notas}
						multiline={true}
					/>
					<Card.Divider />
					<Button
						buttonStyle={styles.button}
						size="lg"
						titleStyle={{ color: "white", marginHorizontal: 20 }}
						color="black"
						title="Agregar a la orden"
						onPress={() => {
							const orden = {
								producto: producto,
								cantidad: cantidad,
								complementos: complementosSeleccionados,
								notas: notas.length > 0 ? notas : defaultNotes,
							};
							agregarAlCarrito(orden);
							alert(
								"Orden de pedido",
								"Se ha añadido con exito la orden al pedido",
								[
									{
										text: "Regresar",
										onPress: () => navigation.pop(1),
									},
									{
										text: "Ir al Carrito",
										onPress: () => {
											cleanRedirect(navigation, "MainPedido")
										},
										style: "cancel",
									},
								],
								{ cancelable: false }
							);
							/* 							navigation.navigate("OrdenAgregada", {
								orden: orden,
								
							}); */
							// navigation.pop(0);
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
