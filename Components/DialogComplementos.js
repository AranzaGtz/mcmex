import { Dialog, Icon, ListItem } from "@rneui/themed";
import { useDataContext } from "../Context/DataContext";
import { useMemo } from "react";

export default function DialogComplementos({ onSelected, taked, closeDialog }) {
	const { complementos } = useDataContext();

	const complementosMostrar = useMemo(
		() =>
			complementos.filter(
				(complemento) => !taked.includes(complemento.id)
			),
		[complementos, taked]
	);

	return (
		<>
			<Dialog.Title title="Complementos elegibles" />
			{complementosMostrar.map((complemento, i) => (
				<ListItem
					key={i}
					containerStyle={{
						marginHorizontal: -10,
						borderRadius: 8,
					}}
					onPress={() => {
						onSelected(complemento);
						closeDialog();
					}}
				>
					<Icon name="plus" type="font-awesome" color="green" />
					{/* <Avatar rounded source={{ uri: l.avatar_url }} /> */}
					<ListItem.Content>
						<ListItem.Title style={{ fontWeight: "700" }}>
							{complemento.nombre}
						</ListItem.Title>
					</ListItem.Content>
				</ListItem>
			))}
		</>
	);
}
