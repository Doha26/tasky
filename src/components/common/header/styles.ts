import {StyleSheet} from "react-native";
import Colors from "~/theming/colors";

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "space-between",
        backgroundColor: Colors.violet,
        paddingBottom:20,
        paddingTop:70,
        paddingHorizontal: 16
    },
    titleStyle: {
        color: Colors.white,
        fontSize: 21,
        fontWeight: 'bold',
    },
    subtitleStyle: {
        color: Colors.white,
        fontSize: 17,
        fontWeight: '400'
    },
});
export default styles;
