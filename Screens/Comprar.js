import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";
import { useDataContext } from "../Context/DataContext";
import { Picker } from "@react-native-picker/picker";
import ListaProductosComprar from "../Components/ListaProductosComprar";

const PickerFiltro = ({ values, onSelectValue }) => {
	const [selectedValue, setSelectedValue] = useState("-1");
	return (
		<View style={styles.pickerContainer}>
			<Picker
				selectedValue={selectedValue}
				onValueChange={(itemValue) => {
					setSelectedValue(itemValue);
					onSelectValue(itemValue);
				}}
				style={styles.picker}
			>
				<Picker.Item label="Todos" value="-1" />
				{values.map((value, idx) => (
					<Picker.Item
						key={idx}
						label={value.nombre}
						value={value.id}
					/>
				))}
			</Picker>
		</View>
	);
};
export default function Comprar({ navigation }) {
	const { productos, categorias, complementos } = useDataContext();
	const [productosFiltrados, setProductosFiltrados] = useState(productos);

	/* useEffect(() => {
		console.log("Productos filtrados: ", productosFiltrados);
	}, [productosFiltrados]); */

	return (
		<SafeAreaView style={styles.container}>
			<PickerFiltro
				values={categorias}
				onSelectValue={(categoria) => {
					let nuevosProductos = [];
					if (categoria !== "-1") {
						nuevosProductos = productos.filter(
							(producto) => producto.categoria == categoria
						);
					} else {
						nuevosProductos = [...productos];
					}
					setProductosFiltrados(nuevosProductos);
				}}
			/>
			<ListaProductosComprar
				navigation={navigation}
				productos={productosFiltrados}
			/>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#eee",
		alignItems: "center",
		justifyContent: "center",
	},
	// Set pickerContainer in a row align to right center
	pickerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginBottom: 10,
	},
	picker: {
		width: "100%",
		height: 30,
		backgroundColor: "#fff",
		borderWidth: 1,
		borderColor: "#000",
	},
});
