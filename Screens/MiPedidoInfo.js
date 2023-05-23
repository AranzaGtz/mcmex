import { Text, Card, Button, Input, Switch } from "@rneui/themed";
import React, { useMemo } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDataContext } from "../Context/DataContext";
import { PedidoStatus, PedidoTipo } from "../utils/constants";
import { cleanRedirect } from "../utils/navigationHelper";
import { alert } from "../utils/alertPolyfill";

const phoneRegExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

const pedidoInfoValidationSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "El nombre debe tener al menos 3 caracteres")
		.max(20, "El nombre debe tener menos de 20 caracteres")
		.required("Este campo es requerido"),
	phoneNumber: Yup.string()
		.matches(phoneRegExp, "El formato del número de teléfono no es válido")
		.required("Este campo es requerido"),
	paraLlevar: Yup.boolean(),
});

export default function MiPedidoInfo({ navigation }) {
	const { carrito, completarPedido } = useDataContext();
	const total = useMemo(
		() =>
			carrito.reduce((acc, pedido) => {
				return acc + pedido.producto.precio * pedido.cantidad;
			}, 0),
		[carrito]
	);
	const iva = useMemo(() => total * 0.08, [total]);
	const subTotal = useMemo(() => total - iva, [total, iva]);

	return (
		<ScrollView>
			<Card containerStyle={{ marginTop: 15 }}>
				<Card.Title>
					<Text h4>Detalles del pedido</Text>
				</Card.Title>
				<Card.Divider />
				<Formik
					validationSchema={pedidoInfoValidationSchema}
					initialValues={{
						name: "",
						phoneNumber: "",
						paraLlevar: false,
					}}
					onSubmit={(values) => {
						completarPedido({
							status: PedidoStatus.PENDIENTE,
							nombre: values.name,
							telefono: values.phoneNumber,
							tipo: values.paraLlevar
								? PedidoTipo.LLEVAR
								: PedidoTipo.COMER_AQUI,
							fecha: new Date().toISOString(),
						});
                        alert(
                            "Pedido exitoso",
                            "Se ha realizado el pedido con exito.\n\nEspere a que te llamemos para confirmar tu pedido.",
                            [
                                {
                                    text: "Aceptar",
                                    onPress: () => cleanRedirect(navigation, "Main"),
                                }
                            ],
                            { cancelable: false }
                        );
					}}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						setFieldValue,
						values,
						errors,
						isValid,
					}) => (
						<>
							<Text style={styles.labels}>
								Nombre de referencia
							</Text>
							<Input
								name="name"
								placeholder="Ejemplo: Juan Pérez..."
								style={styles.textInput}
								onChangeText={handleChange("name")}
								onBlur={handleBlur("name")}
								value={values.name}
								keyboardType="default"
							/>
							{errors.name && (
								<Text style={{ fontSize: 10, color: "red" }}>
									{errors.name}
								</Text>
							)}
							<Text style={styles.labels}>
								Telefono de referencia
							</Text>
							<Input
								name="phoneNumber"
								placeholder="Ejemplo: +526641231212 o 6641231212..."
								style={styles.textInput}
								onChangeText={handleChange("phoneNumber")}
								onBlur={handleBlur("phoneNumber")}
								value={values.phoneNumber}
								keyboardType="phone-pad"
							/>
							{errors.phoneNumber && (
								<Text style={{ fontSize: 10, color: "red" }}>
									{errors.phoneNumber}
								</Text>
							)}
							<Text style={styles.labels}>
								¿Pedido para llevar?
							</Text>
							<Switch
								value={values.paraLlevar}
								onValueChange={(value) =>
									setFieldValue("paraLlevar", value)
								}
                                style={{alignSelf: "flex-start"}}
							/>
							<Card.Divider />
							<View style={styles.summary}>
								<View style={styles.summarySeparator}>
									<Text style={styles.summaryLabel}>
										Subtotal:
									</Text>
									<Text style={styles.summaryLabel}>
										IVA (8%):
									</Text>
									<Text style={styles.summaryLabel}>
										Total:
									</Text>
								</View>
								<View style={styles.summarySeparator}>
									<Text style={styles.summaryValue}>
										${subTotal.toFixed(2)}
									</Text>
									<Text style={styles.summaryValue}>
										${iva.toFixed(2)}
									</Text>
									<Text style={styles.summaryValue}>
										${total.toFixed(2)}
									</Text>
								</View>
							</View>
							<Card.Divider />
							<Button
								onPress={handleSubmit}
								title="Pedir"
								disabled={!isValid}
								buttonStyle={{
									backgroundColor: "black",
								}}
							/>
						</>
					)}
				</Formik>
			</Card>
		</ScrollView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	fonts: {
		marginBottom: 8,
	},
	labels: {
		color: "black",
		fontWeight: "bold",
		fontSize: 15,
		marginBottom: 5,
	},
	textInput: {
		width: "100%",
	},
	summary: {
		display: "flex",
		flexDirection: "row",
		alignSelf: "flex-end",
	},
	summarySeparator: {
		display: "flex",
		alignItems: "flex-end",
		flexDirection: "column",
		justifyContent: "space-between",
		marginBottom: 8,
	},
	summaryItem: {
		flexDirection: "row",
		marginBottom: 8,
	},
	summaryLabel: {
		fontSize: 20,
		fontWeight: "bold",
	},
	summaryValue: {
		fontSize: 20,
		marginLeft: 10,
	},
});
