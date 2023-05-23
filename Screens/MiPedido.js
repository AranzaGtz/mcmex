import React, { useEffect } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { Text, Button, Icon, ListItem } from "@rneui/themed";
import { useDataContext } from "../Context/DataContext";
import { B } from "../Components/ClassicHtmlTags";
import { defaultNotes } from "../utils/constants";

export default function MiPedido({ navigation }) {
	const { complementos, carrito, eliminarDelCarrito, completarPedido } =
		useDataContext();

	// Expandable list
	const [expanded, setExpanded] = React.useState({});

	useEffect(() => {
		const newExpanded = {};
		carrito.forEach((pedido, idx) => {
			newExpanded[idx] = false;
		});
		setExpanded(newExpanded);
	}, [carrito]);

	return (
		<View style={styles.container}>
			<ScrollView>
				{carrito.length > 0 ? (
					<>
						{carrito.map((pedido, idx) => {
							const precioTotal =
								pedido.producto.precio * pedido.cantidad;
							return (
								<ListItem.Accordion
									key={idx}
									bottomDivider
									isExpanded={expanded[idx]}
									onPress={() => {
										setExpanded({
											...expanded,
											[idx]: !expanded[idx],
										});
									}}
									containerStyle={styles.listItem}
									content={
										<>
											<ListItem.Content>
												<ListItem.Title>
													<B>x{pedido.cantidad}</B>{" "}
													{pedido.producto.nombre}
												</ListItem.Title>
											</ListItem.Content>
										</>
									}
								>
									<ListItem key={idx} bottomDivider>
										<ListItem.Content>
											{pedido.notas.length > 0 &&
												pedido.notas !=
													defaultNotes && (
													<ListItem.Title>
														Notas: {pedido.notas}
													</ListItem.Title>
												)}
											<ListItem.Subtitle>
												Con{" "}
												{pedido.complementos
													.map(
														(c) =>
															complementos.find(
																(complemento) =>
																	complemento.id ===
																	c.id
															).nombre
													)
													.join(", ")}{" "}
												por ${precioTotal.toFixed(2)}
											</ListItem.Subtitle>
										</ListItem.Content>
										<View style={styles.buttons}>
											<Icon
												reverse
												name="ios-trash"
												type="ionicon"
												color="red"
												size={20}
												onPress={() =>
													eliminarDelCarrito(idx)
												}
											/>
										</View>
									</ListItem>
								</ListItem.Accordion>
							);
						})}
					</>
				) : (
					<>
						<Text
							style={{
								marginTop: 50,
								textAlign: "center",
								fontSize: 20,
							}}
						>
							No hay nada de tu pedido.
						</Text>
					</>
				)}
			</ScrollView>
			{carrito.length > 0 && (
				<View style={styles.bottomButtonContainer}>
					<Button
						title="Proceder"
						icon={{
							name: "arrow-right",
							type: "font-awesome",
							size: 40,
							color: "white",
						}}
						iconRight
						iconContainerStyle={{ marginLeft: 10 }}
						titleStyle={{ fontWeight: "700", fontSize: 40 }}
						buttonStyle={{
							backgroundColor: "black",
						}}
						containerStyle={{}}
						onPress={() => navigation.push("MiPedidoInfo")}
					/>
				</View>
			)}
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "white",
		width: "100%",
		height: "100%",
	},
	buttons: {
		width: "25%",
		flexDirection: "row",
		justifyContent: "space-between",
	},
	bottomButtonContainer: {
		position: "absolute",
		bottom: 0,
		width: "100%",
	},
	listItem: {
		backgroundColor: "#F8F8F8",
	},
});
