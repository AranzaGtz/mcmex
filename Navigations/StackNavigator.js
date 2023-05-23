import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../Screens/Inicio";
import MiPedido from "../Screens/MiPedido";
import MiPedidoInfo from "../Screens/MiPedidoInfo";
import Quejas from "../Screens/Quejas";
import Acerca from "../Screens/Acerca";
import Ordenar from "../Screens/Ordenar";
import OrdenDetalles from "../Screens/OrdenDetalles";
import Ionicons from "react-native-vector-icons/Ionicons";

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "white",
	},
	headerTintColor: "black",
	headerBackTitle: "Regresar",
	headerTitleAlign: "center",
};

const navigationOptions = (props) => ({
	headerLeft: () => (
		<Ionicons
			name={"ios-menu"}
			size={40}
			color={"black"}
			onPress={() => props.navigation.toggleDrawer()}
			style={{ marginLeft: 5 }}
		/>
	),
	...props,
});

const MainStackNavigator = (props) => {
	return (
		<Stack.Navigator
			screenOptions={screenOptionStyle}
			initialRouteName="Inicio"
		>
			<Stack.Screen
				name="Inicio"
				component={Inicio}
				options={(props) =>
					navigationOptions({ title: "Comida Mexicana", ...props })
				}
			/>
			<Stack.Screen
				name="Ordenar"
				component={Ordenar}
				options={(props) =>
					navigationOptions({ title: "Ordenar", ...props })
				}
			/>
			<Stack.Screen
				name="OrdenDetalles"
				component={OrdenDetalles}
				options={(props) =>
					navigationOptions({
						title: "Detalles de la orden",
						...props,
					})
				}
			/>
		</Stack.Navigator>
	);
};

const PedidoStackNavigator = () => {
	return (
		<Stack.Navigator
			screenOptions={screenOptionStyle}
			initialRouteName="MiPedido"
		>
			<Stack.Screen
				name="MiPedido"
				component={MiPedido}
				options={(props) =>
					navigationOptions({ title: "Mi Pedido", ...props })
				}
			/>
			<Stack.Screen
				name="MiPedidoInfo"
				component={MiPedidoInfo}
				options={(props) =>
					navigationOptions({
						title: "Información del Pedido",
						...props,
					})
				}
			/>
		</Stack.Navigator>
	);
};

const QuejasStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Quejas"
				component={Quejas}
				options={(props) =>
					navigationOptions({ title: "Quejas", ...props })
				}
			/>
		</Stack.Navigator>
	);
};

const AcercaStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen
				name="Acerca"
				component={Acerca}
				options={(props) =>
					navigationOptions({
						title: "Acerca de la aplicación",
						...props,
					})
				}
			/>
		</Stack.Navigator>
	);
};

export {
	MainStackNavigator,
	PedidoStackNavigator,
	QuejasStackNavigator,
	AcercaStackNavigator,
};
