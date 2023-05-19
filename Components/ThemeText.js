import { Text, StyleSheet } from "react-native";

export default function ThemeText(props) {
	return (
		<Text {...props} style={{...styles.text, ...props.style}}>
			{props.children}
		</Text>
	);
}

const styles = StyleSheet.create({
	text: {
		color: "white",
	},
});
