import {View, StyleSheet} from "react-native";
import React from "react";
import Colors from "~/theming/colors";
import Spinner from 'react-native-loading-spinner-overlay';

const Loader = ({loading, message}) => {
    return (
        <View style={styles.container}>
            <Spinner
                visible={loading}
                textContent={message}
                textStyle={{color: Colors.white, fontWeight: "400", fontSize: 16}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.red[600]
    },
});

export default Loader;
