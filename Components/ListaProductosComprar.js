import { FlatList } from "react-native";
import ListaProductosComprarItem from "./ListaProductosComprarItem";
import ThemeText from "./ThemeText";
export default function ListaProductosComprar({ navigation, productos }) {
	return (
		<FlatList
			data={productos}
			renderItem={({ item }) => (
				<ListaProductosComprarItem
					navigation={navigation}
					producto={item}
					key={item.id}
				/>
			)}
			keyExtractor={(item) => item.id.toString()}
			contentContainerStyle={{ paddingHorizontal: 5 }}
			ListEmptyComponent={() => (
				<ThemeText
					style={{ marginTop: 50, textAlign: "center", fontSize: 20 }}
				>
					No hay productos disponibles.
				</ThemeText>
			)}
		/>
	);
}
