import { StyleSheet } from "react-native";
import colors from "../../assets/theme/colors";

export default StyleSheet.create({
    logoImage: {
        height: 150,
        width: 150,
        alignSelf: 'center',
        marginTop: 50
    },
    title: {
        fontSize: 22,
        textAlign: 'center',
        paddingTop: 20,
        fontWeight: '500'
    },
    subTitle: {
        fontSize: 18,
        textAlign: 'center',
        paddingVertical: 20,
        fontWeight: '500'
    },
    form: {
        paddingTop: 20
    },
    createSection: {
        flexDirection: 'row',
        paddingTop: 10,
    },
    infoText: {
        fontSize: 17,
    },
    linkBtn: {
        paddingLeft: 15,
        fontSize: 16,
        color: colors.primary
    }
});