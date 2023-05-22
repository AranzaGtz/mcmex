import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
	PedidoStackNavigator,
	MainStackNavigator,
	QuejasStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

const screenOptionStyle = {
	//Versiones anteriores tabBarOptions
	tabBarActiveTintColor: "#B1B1B1", //activeTintColor
	tabBarInactiveTintColor: "#FFFFFF", //inactiveTintColor
	tabBarShowLabel: true, //showLabel
	tabBarLabelStyle: {
		//labelStyle
		fontSize: 12,
	},
	tabBarStyle: {
		//style
		paddingBottom: 5,
		backgroundColor: "#FF0000",
	},
};

export default function BottomTabNavigator() {
	return (
		<Tab.Navigator screenOptions={screenOptionStyle}>
			<Tab.Screen
				name="Main"
				component={MainStackNavigator}
				options={{
					headerShown: false,
					tabBarLabel: "Inicio",
					tabBarIcon: ({ color }) => (
						<Ionicons name={"ios-home"} size={20} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name="MainPedido"
				component={PedidoStackNavigator}
				options={{
					headerShown: false,
					tabBarLabel: "Mi pedido",
					tabBarIcon: ({ color }) => (
						<Ionicons
							name={"cart-outline"}
							size={20}
							color={color}
						/>
					),
				}}
			/>
			<Tab.Screen
				name="MainQuejas"
				component={QuejasStackNavigator}
				options={{
					headerShown: false,
					tabBarLabel: "Quejas",
					tabBarIcon: ({ color }) => (
						<Ionicons
							name={"ios-help-circle"}
							size={20}
							color={color}
						/>
					),
				}}
			/>
		</Tab.Navigator>
	);
}
