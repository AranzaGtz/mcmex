import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
	CarritoStackNavigator,
	MainStackNavigator,
	QuejasStackNavigator,
} from "./StackNavigator";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
	return (
		<Tab.Navigator
			screenOptions={{
				//Versiones anteriores tabBarOptions
				tabBarActiveTintColor: "#ff6600", //activeTintColor
				tabBarInactiveTintColor: "#060606", //inactiveTintColor
				tabBarShowLabel: true, //showLabel
				tabBarLabelStyle: {
					//labelStyle
					fontSize: 12,
				},
				tabBarStyle: {
					//style
					paddingBottom: 5,
					backgroundColor: "#f3f3f1",
				},
			}}
		>
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
				name="MainCarrito"
				component={CarritoStackNavigator}
				options={{
                    headerShown: false,
					tabBarLabel: "Carrito",
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
