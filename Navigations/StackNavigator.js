import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../Screens/Inicio";
import Comprar from "../Screens/Comprar";
import Carrito from "../Screens/Carrito";
import Pago from "../Screens/Pago";
import Quejas from "../Screens/Quejas";
import Productos from "../Screens/Productos";
import Producto from "../Screens/Producto";
import ComprarProducto from "../Screens/ComprarProducto";

const Stack = createStackNavigator();

const screenOptionStyle = {
	headerStyle: {
		backgroundColor: "white",
	},
	headerTintColor: "black",
	headerBackTitle: "Regresar",
	headerTitleAlign: 'center'
};

const MainStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Inicio" component={Inicio} />
			<Stack.Screen name="Comprar" component={Comprar} />
			<Stack.Screen name="ComprarProducto" component={ComprarProducto} />
		</Stack.Navigator>
	);
};

const CarritoStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Carrito" component={Carrito} />
			<Stack.Screen name="Pago" component={Pago} />
		</Stack.Navigator>
	);
};

const QuejasStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Quejas" component={Quejas} />
		</Stack.Navigator>
	);
};

const ProductosStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Productos" component={Productos} />
			<Stack.Screen name="Producto" component={Producto} />
		</Stack.Navigator>
	);
};

export { MainStackNavigator, CarritoStackNavigator, QuejasStackNavigator, ProductosStackNavigator };
/* export default function StackNavigator() {
	return (
		<Stack.Navigator initialRouteName="DrawerNavigator">
			<Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
		</Stack.Navigator>
	);
}
 */
