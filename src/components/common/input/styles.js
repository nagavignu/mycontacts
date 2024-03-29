import { StyleSheet } from "react-native";
import colors from "../../../assets/theme/colors";

export default StyleSheet.create({
    wrapper: {
        height: 42,
        borderColor: colors.grey,
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 5,
        marginTop: 5
    },
    textInput: {
        flex: 1,
        width: '100%'
    },
    inputContainer: {
        paddingVertical: 12
    },
    error: {
        fontSize: 12,
        color: colors.danger,
        paddingTop: 5
    }
});