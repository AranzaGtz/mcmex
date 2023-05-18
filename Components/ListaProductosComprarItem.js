import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDataContext } from "../Context/DataContext";

export default function ListaProductosComprarItem({ navigation, producto }) {
	const { categorias } = useDataContext();
	const {
		id,
		nombre,
		descripcion,
		imagen,
		precio,
		categoria,
		complementos,
		precomplementos,
	} = producto;
	return (
		<View style={styles.container}>
			<View style={styles.imageContainer}>
				<Image
					source={{ uri: producto.imagen }}
					style={styles.image}
					resizeMode="contain"
				/>
			</View>
			<View style={styles.content}>
				<Text style={styles.category}>
					{categorias.find((cat) => cat.id === categoria).nombre ||
						"Sin categoría"}
				</Text>
				<Text style={styles.title}>{nombre}</Text>
				<View style={styles.counter}>
					{/* <View style={styles.counterContainer}>
						            <AntDesign
              name="minuscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count - 1)}
            />
            <Text style={styles.counterText}>{count}</Text>
            <AntDesign

              name="pluscircleo"
              size={24}
              color={colorScheme === "light" ? "black" : "white"}
              onPress={() => setCount(count + 1)}
            />
          </View> */}
					<Text style={styles.price}>${precio.toFixed(2)}</Text>
				</View>
				<Text numberOfLines={2} style={styles.description}>
					{descripcion}
				</Text>
				<TouchableOpacity style={styles.button}>
					<Text style={styles.buttonText}>
						Pedir
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		marginVertical: 10,
        width: "100%",
	},
	imageContainer: {
		backgroundColor: "white",
		borderRadius: 20,
		overflow: "hidden",
	},
	image: {
		width: "100%",
		height: 200,
	},
	content: {
		marginTop: 10,
	},
	category: {
		fontSize: 12,
		color: "black",
		opacity: 0.6,
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
		color: "black"
	},
	counter: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		marginVertical: 10,
	},
	counterContainer: {
		flexDirection: "row",
		alignItems: "center",
	},
	counterText: {
		fontSize: 20,
		fontWeight: "bold",
		marginHorizontal: 10,
	},
	price: {
		fontSize: 20,
		fontWeight: "bold",
	},
	description: {
		fontSize: 14,
        lineHeight: 20,
		color: "black",
		opacity: 0.6,
	},
	button: {
		flexDirection: "row",
		justifyContent: "center",
		backgroundColor: "black",
		borderRadius: 20,
		padding: 10,
		width: "80%",
		alignSelf: "center",
		marginVertical: 10,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
});
