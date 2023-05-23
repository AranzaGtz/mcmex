import "react-native-gesture-handler";
import "react-native-reanimated";
import React from "react";
import DataProvider from "./Context/DataContext";
import AppView from "./AppView";

export default function App() {
	return (
		<DataProvider>
			<AppView />
		</DataProvider>
	);
}
