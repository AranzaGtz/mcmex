import React from "react";
import { Text, View } from "react-native";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import Productos from "../Screens/Productos";
import Quejas from "../Screens/Quejas";
import Inicio from "../Screens/Inicio";
import BottomTabNavigator from "./BottomTabNavigator";
import {
	ProductosStackNavigator,
	QuejasStackNavigator,
} from "./StackNavigator";

const Drawer = createDrawerNavigator();

/* export default function DrawerNavigator() {
	const DrawerNavigatorContent = (props) => {
		<DrawerContentScrollView {...props}>
			<DrawerItemList {...props} />
			<View
				style={{ flexDirection: "row", marginLeft: 20, marginTop: 15 }}
			>
				<Ionicons name="md-exit" size={25} color={"#060606"} />
				<Text
					style={{ marginLeft: 30 }}
					onPress={() => alert("Cerrando sesión")}
				>
					Cerrar sesión
				</Text>
			</View>
		</DrawerContentScrollView>;
	};
	return (
		<Drawer.Navigator
			useLegacyImplementation
			screenOptions={{
				//drawerContentOptions
				drawerStyle: {
					backgroundColor: "#ffff",
					width: "80%",
				},
				drawerActiveTintColor: "#ff6600", //activeTintColor
				drawerInactiveTintColor: "#060606", //inactiveTintColor
			}}
			drawerContent={DrawerNavigatorContent}
		>
			<Drawer.Screen
				name="Inicio"
				component={BottomTabNavigator}
				options={{
					headerShown: false,
					drawerLabel: "Inicio",
					drawerIcon: ({ color }) => (
						<Ionicons name={"ios-home"} size={20} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="Productos"
				component={ProductosStackNavigator}
				options={{
					headerShown: false,
					drawerLabel: "Productos",
					drawerIcon: ({ color }) => (
						<Ionicons
							name={"list-outline"}
							size={20}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="Quejas"
				component={QuejasStackNavigator}
				options={{
					headerShown: false,
					drawerLabel: "Quejas",
					drawerIcon: ({ color }) => (
						<Ionicons
							name={"ios-help-circle"}
							size={20}
							color={color}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
 */
const DrawerNavigatorContent = (props) => (
	<DrawerContentScrollView {...props}>
		<DrawerItemList {...props} />
{/* 		<View style={{ flexDirection: "row", marginLeft: 20, marginTop: 15 }}>
			<Ionicons name="md-exit" size={25} color={"#060606"} />
			<Text
				style={{ marginLeft: 30 }}
				onPress={() => alert("Cerrando sesión")}
			>
				Cerrar sesión
			</Text>
		</View> */}
	</DrawerContentScrollView>
);
export default function DrawerNavigator() {
	return (
		<Drawer.Navigator
			screenOptions={{
				//drawerContentOptions
				drawerStyle: {
					backgroundColor: "#ffff",
					width: "70%",
				},
				drawerActiveTintColor: "#ff6600", //activeTintColor
				drawerInactiveTintColor: "#060606", //inactiveTintColor
			}}
			drawerContent={(props) => <DrawerNavigatorContent {...props} />}
		>
			<Drawer.Screen
				name="DrawerInicio"
				component={BottomTabNavigator}
				options={{
					headerShown: false,
					drawerLabel: "Inicio",
					drawerIcon: ({ color }) => (
						<Ionicons name={"ios-home"} size={20} color={color} />
					),
				}}
			/>
			<Drawer.Screen
				name="DrawerProductos"
				component={ProductosStackNavigator}
				options={{
					headerShown: false,
					drawerLabel: "Productos",
					drawerIcon: ({ color }) => (
						<Ionicons
							name={"list-outline"}
							size={20}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="DrawerQuejas"
				component={QuejasStackNavigator}
				options={{
					headerShown: false,
					drawerLabel: "Quejas",
					drawerIcon: ({ color }) => (
						<Ionicons
							name={"ios-help-circle"}
							size={20}
							color={color}
						/>
					),
				}}
			/>
		</Drawer.Navigator>
	);
}
