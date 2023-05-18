import {FlatList} from 'react-native';
import ListaProductosComprarItem from './ListaProductosComprarItem';
export default function ListaProductosComprar({ navigation, productos }) {
    return <FlatList
        data={productos}
        renderItem={({ item }) => <ListaProductosComprarItem navigation={navigation} producto={item} key={item.id} />}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={{ paddingHorizontal: 5 }}
    />
}