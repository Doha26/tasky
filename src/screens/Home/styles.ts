import {StyleSheet} from "react-native";
import Colors from "~/theming/colors";

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    openButton: {
        backgroundColor: "#F194FF",
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    headerModal:{
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray[200],
        padding: 18
    },
    textTitleModal:{
        fontSize: 22,
        fontWeight: "500",
        textAlign: "center",
        color: Colors.gray[800]
    },
    defaultImg: {
        width: 350,
        height: 270,
    },
    noContent:{
        flex: 1,
        marginTop: 150,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default styles;
