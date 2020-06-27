import {View, StyleSheet} from "react-native";
import React from "react";
import colors from "~/theming/colors";
import Spinner from 'react-native-loading-spinner-overlay';

const Loader = ({loading, message}) => {
    return (
        <View style={styles.container}>
            <Spinner
                visible={loading}
                textContent={message}
                textStyle={{color: colors.white, fontWeight: "400", fontSize: 17}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 120,
        height: 40,
        position: "absolute",
        zIndex: 1000,
        borderRadius: 20,
        backgroundColor: colors.black
    },
});

export default Loader;
