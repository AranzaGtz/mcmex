import React from "react";
import database from "../utils/firebaseDB";
import { get, push, ref } from "firebase/database";

const DataContext = React.createContext();

export const useDataContext = () => React.useContext(DataContext);

const DataProvider = ({ children }) => {
	const [cargado, setCargado] = React.useState(false);
	const [categorias, setCategorias] = React.useState([]);
	const [complementos, setComplementos] = React.useState([]);
	const [productos, setProductos] = React.useState([]);
	const [carrito, setCarrito] = React.useState([]);

	const cargarCategorias = async () => {
		const categoriasLoaded = [];
		const snapshot = await get(ref(database, "Categorias"));
		if (snapshot.exists()) {
			snapshot.forEach((child) => {
				categoriasLoaded.push(child.val());
			});
		} else {
			console.log("No categorias data available");
		}
		setCategorias(categoriasLoaded);
	};
	const cargarComplementos = async () => {
		const complementosLoaded = [];
		const snapshot = await get(ref(database, "Complementos"));
		if (snapshot.exists()) {
			snapshot.forEach((child) => {
				complementosLoaded.push(child.val());
			});
		} else {
			console.log("No complementos data available");
		}
		setComplementos(complementosLoaded);
	};
	const cargarProductos = async () => {
		const productosLoaded = [];
		const snapshot = await get(ref(database, "Productos"));
		if (snapshot.exists()) {
			snapshot.forEach((child) => {
				productosLoaded.push(child.val());
			});
		} else {
			console.log("No productos data available");
		}
		setProductos(productosLoaded);
	};
	const preload = async () => {
		await cargarCategorias();
		await cargarComplementos();
		await cargarProductos();

		setCargado(true);
	};
	const agregarAlCarrito = (orden) => {
		setCarrito([...carrito, orden]);
	};
	const eliminarDelCarrito = (ordenIdx) => {
		const newCarrito = [...carrito];
		newCarrito.splice(ordenIdx, 1);
		setCarrito(newCarrito);
	};
	const completarPedido = (informacion) => {
		const pedido = {
			...informacion,
			orden: carrito,
		};
		const pedidosRef = ref(database, "Pedidos");
		push(pedidosRef, pedido);
	};
	React.useEffect(() => {
		preload();
	}, []);
	return (
		<DataContext.Provider
			value={{
				cargado,
				categorias,
				complementos,
				productos,
				carrito,
				agregarAlCarrito,
				eliminarDelCarrito,
				completarPedido,
			}}
		>
			{children}
		</DataContext.Provider>
	);
};
export default DataProvider;
