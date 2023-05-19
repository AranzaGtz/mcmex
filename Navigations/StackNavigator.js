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
			<Stack.Screen name="Inicio" component={Inicio} options={{ title: 'Comida Mexicana' }}  />
			<Stack.Screen name="Comprar" component={Comprar} options={{ title: 'Pedir' }} />
			<Stack.Screen name="ComprarProducto" component={ComprarProducto}  options={{ title: 'Detalles del pedido' }} />
		</Stack.Navigator>
	);
};

const CarritoStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Carrito" component={Carrito} options={{ title: 'Carrito' }} />
			<Stack.Screen name="Pago" component={Pago} options={{ title: 'Método de Pago' }} />
		</Stack.Navigator>
	);
};

const QuejasStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Quejas" component={Quejas} options={{ title: 'Quejas' }} />
		</Stack.Navigator>
	);
};

const ProductosStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="Productos" component={Productos} options={{ title: 'Productos' }} />
			<Stack.Screen name="Producto" component={Producto} options={{ title: 'Detalle del producto' }} />
		</Stack.Navigator>
	);
};

export { MainStackNavigator, CarritoStackNavigator, QuejasStackNavigator, ProductosStackNavigator };
