import { CommonActions } from "@react-navigation/native";

export function cleanRedirect(navigation, routeName) {
    navigation.dispatch(
        CommonActions.reset({
            index: 0,
            routes: [{ name: routeName }],
        })
    );
}