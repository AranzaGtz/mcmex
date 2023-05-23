import {
	StyleSheet,
	ActivityIndicator,
	SafeAreaView,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import DrawerNavigator from "./Navigations/DrawerNavigator";
import { useDataContext } from "./Context/DataContext";
import { StatusBar } from "expo-status-bar";

export default function AppView() {
	const { cargado } = useDataContext();

	return (
		<SafeAreaView style={styles.container}>
			<StatusBar
				animated={true}
				showHideTransition="fade"
				hidden={true}
			/>
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
