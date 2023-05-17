import {
	StyleSheet,
	View,
	ActivityIndicator,
	SafeAreaView,
} from "react-native";
import React from "react";
import DataProvider from "./Context/DataContext";
import AppView from "./AppView";
import "react-native-reanimated";

export default function App() {
	return (
		<DataProvider>
			<AppView/>
		</DataProvider>
	);
}
