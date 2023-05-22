import { createStackNavigator } from "@react-navigation/stack";
import Inicio from "../Screens/Inicio";
import MiPedido from "../Screens/MiPedido";
import Pago from "../Screens/Pago";
import Quejas from "../Screens/Quejas";
import Productos from "../Screens/Productos";
import Producto from "../Screens/Producto";
import Ordenar from "../Screens/Ordenar";
import OrdenDetalles from "../Screens/OrdenDetalles"
import OrdenAgregada from "../Screens/OrdenAgregada"

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
		<Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Inicio">
			<Stack.Screen name="Inicio" component={Inicio} options={{ title: 'Comida Mexicana' }}  />
			<Stack.Screen name="Ordenar" component={Ordenar} options={{ title: 'Ordenar' }} />
			<Stack.Screen name="OrdenDetalles" component={OrdenDetalles}  options={{ title: 'Detalles de la orden' }} />
			<Stack.Screen name="OrdenAgregada" component={OrdenAgregada}  options={{ title: 'Orden del pedido' }} />
		</Stack.Navigator>
	);
};

const PedidoStackNavigator = () => {
	return (
		<Stack.Navigator screenOptions={screenOptionStyle}>
			<Stack.Screen name="MiPedido" component={MiPedido} options={{ title: 'Mi Pedido' }} />
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

export { MainStackNavigator, PedidoStackNavigator, QuejasStackNavigator, ProductosStackNavigator };
