import {
	StyleSheet,
	View,
	ActivityIndicator,
	SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import DrawerNavigator from "./Navigations/DrawerNavigator";
import DataProvider, { useDataContext } from "./Context/DataContext";

export default function AppView() {
	const { cargado, productos, categorias, complementos } = useDataContext();

	useEffect(() => {
		if (cargado) {
			console.log("Productos: ", productos);
            console.log("Categorias: ", categorias);
            console.log("Complementos: ", complementos);
		}
	}, [cargado]);
	return (
		<SafeAreaView style={styles.container}>
			{cargado ? (
				<NavigationContainer>
					<DrawerNavigator />
				</NavigationContainer>
			) : (
				<ActivityIndicator size="large" color="#00ff00" />
			)}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
	},
});
