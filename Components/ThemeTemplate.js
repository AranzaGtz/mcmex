import { StyleSheet, View, ImageBackground } from "react-native";
import fondo from "../assets/fondo-inicio.png";

export default function ThemeTemplate(props) {
	return (
		<View style={styles.container}>
			<ImageBackground
				source={fondo}
				resizeMode="cover"
				style={styles.image}
			>
				{props.children}
			</ImageBackground>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	image: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
});
