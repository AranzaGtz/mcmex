import React from "react";
import database from "../utils/firebaseDB";
import { get, onValue, ref } from "firebase/database";

const DataContext = React.createContext();

export const useDataContext = () => React.useContext(DataContext);

const DataProvider = ({ children }) => {
	const [cargado, setCargado] = React.useState(false);
	const [categorias, setCategorias] = React.useState([]);
	const [complementos, setComplementos] = React.useState([]);
	const [productos, setProductos] = React.useState([]);

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
	React.useEffect(() => {
		preload();
	}, []);
	return (
		<DataContext.Provider
			value={{ cargado, categorias, complementos, productos }}
		>
			{children}
		</DataContext.Provider>
	);
};
export default DataProvider;
