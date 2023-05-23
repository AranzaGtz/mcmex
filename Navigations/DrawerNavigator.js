import React from "react";
import {
	createDrawerNavigator,
	DrawerContentScrollView,
	DrawerItemList,
} from "@react-navigation/drawer";
import Ionicons from "react-native-vector-icons/Ionicons";
import BottomTabNavigator from "./BottomTabNavigator";
import { AcercaStackNavigator, QuejasStackNavigator } from "./StackNavigator";
/* import {Text, View} from "react-native"; */

const Drawer = createDrawerNavigator();

const DrawerNavigatorContent = (props) => (
	<DrawerContentScrollView {...props} >
		<DrawerItemList {...props} />
		{/* <View style={{ flexDirection: "row", marginLeft: 20, marginTop: 15 }}>
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
export default function DrawerNavigator(props) {
	return (
		<Drawer.Navigator
			screenOptions={{
				//drawerContentOptions
				drawerStyle: {
					backgroundColor: "#ffff",
					width: "70%",
					zIndex: 100,
				},
				drawerActiveTintColor: "#2E9200", //activeTintColor
				drawerInactiveTintColor: "#060606", //inactiveTintColor
			}}
			contentContainerStyle={{
				flexGrow: 1
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
				name="DrawerQuejas"
				component={QuejasStackNavigator}
				options={{
					headerShown: false,
					drawerLabel: "Quejas",
					drawerIcon: ({ color }) => (
						<Ionicons
							name={"sad-outline"}
							size={20}
							color={color}
						/>
					),
				}}
			/>
			<Drawer.Screen
				name="DrawerAcerca"
				component={AcercaStackNavigator}
				options={{
					headerShown: false,
					drawerLabel: "Acerca de",
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
