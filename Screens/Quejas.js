import { Text, Card, Button, Input, Switch } from "@rneui/themed";
import React, { useMemo } from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import { useDataContext } from "../Context/DataContext";
import { PedidoStatus, PedidoTipo, PhoneRegExp } from "../utils/constants";
import { cleanRedirect } from "../utils/navigationHelper";
import { alert } from "../utils/alertPolyfill";

const ValidationSchema = Yup.object().shape({
	name: Yup.string()
		.min(3, "El nombre debe tener al menos 3 caracteres")
		.max(20, "El nombre debe tener menos de 20 caracteres")
		.required("Este campo es requerido"),
	phoneNumber: Yup.string().matches(
		PhoneRegExp,
		"El formato del número de teléfono no es válido"
	),
	email: Yup.string().email("El formato del correo electrónico no es válido"),
	queja: Yup.string()
		.min(3, "La queja debe tener al menos 5 caracteres")
		.max(100, "La queja debe tener menos de 100 caracteres")
		.required("Este campo es requerido"),
});

export default function Quejas({navigation}) {
	const { insertarQueja } = useDataContext();
	return (
		<ScrollView>
			<Card containerStyle={{ marginTop: 15 }}>
				<Card.Title>
					<Text h4>Detalles de la queja</Text>
				</Card.Title>
				<Card.Divider />
				<Formik
					validationSchema={ValidationSchema}
					initialValues={{
						name: "",
						phoneNumber: "",
						email: "",
						queja: "",
					}}
					onSubmit={(values) => {
						const insertedData = insertarQueja({
							nombre: values.name,
							telefono: values.phoneNumber,
							email: values.email,
							queja: values.queja,
							fecha: new Date().toISOString(),
						});
						alert(
							"Queja enviada",
							"Se ha enviado la queja con exito.\n\nNos disculpamos que haya tenido inconvenientes, recibiremos su queja y trataremos de mejorar nuestros servicios.\n\nMuchas gracias.",
							[
								{
									text: "Aceptar",
									onPress: () =>
										cleanRedirect(navigation, "DrawerInicio"),
								},
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
								Nombre con apellido
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
							<Text style={styles.labels}>Número telefónico</Text>
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
								Correo electrónico
							</Text>
							<Input
								name="email"
								placeholder="Ejemplo: prueba@gmail.com"
								style={styles.textInput}
								onChangeText={handleChange("email")}
								onBlur={handleBlur("email")}
								value={values.email}
								keyboardType="email-address"
							/>
							{errors.email && (
								<Text style={{ fontSize: 10, color: "red" }}>
									{errors.email}
								</Text>
							)}
							<Text style={styles.labels}>Queja</Text>
							<Input
								name="queja"
								placeholder="Ejemplo: El servicio fue muy malo..."
								style={styles.textInputLarge}
								onChangeText={handleChange("queja")}
								onBlur={handleBlur("queja")}
								value={values.queja}
								keyboardType="default"
								multiline={true}
							/>
							{errors.queja && (
								<Text style={{ fontSize: 10, color: "red" }}>
									{errors.queja}
								</Text>
							)}
							<Card.Divider />
							<Button
								onPress={handleSubmit}
								title="Enviar"
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
	textInputLarge: {
		width: "100%",
		height: 100,
	},
});
