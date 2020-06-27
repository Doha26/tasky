import React from 'react';
import {StyleSheet} from "react-native";
import {TextStyle, View, ViewStyle} from "react-native";
import Text from "~/components/common/Text";
import PropTypes from 'prop-types';
import Colors from "~/theming/colors";
import RNPickerSelect from 'react-native-picker-select';
import {randomString} from "~/utils/method";

const propTypes = {
    label: PropTypes.string.isRequired,
    value:PropTypes.string,
    data: PropTypes.array,
    onValueChange: PropTypes.func
};

const defaultProps = {
    label: "",
};

const LabelSelect = ({
                         label,
                            value,
                         data,
                         onValueChange,
                     }: {
    label?: string;
    value?: string;
    data: Array<any>;
    onValueChange: (value: any) => void;
}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <RNPickerSelect
                value={value}
                itemKey={randomString("a")}
                items={data}
                style={pickerSelectStyles}
                onValueChange={onValueChange}
            />
        </View>
    )
};

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: Colors.gray[200],
        borderRadius: 4,
        marginTop: 5,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
    inputAndroid: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        height: 50,
        backgroundColor: Colors.gray[200],
        borderRadius: 4,
        marginTop: 5,
        paddingRight: 30, // to ensure the text is never behind the icon
    },
});

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        zIndex: 1000
    } as ViewStyle,
    label: {
        marginLeft: 3,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.gray[500],
    } as TextStyle,
    innerStyle: {
        backgroundColor: Colors.gray[200],
        borderColor: Colors.transparent,
    },
    dropDownStyle: {
        zIndex: 1000
    },
    input: {
        height: 50,
        backgroundColor: Colors.gray[200],
        paddingHorizontal: 8,
        borderRadius: 4,
        marginTop: 5,
    } as TextStyle,
});

LabelSelect.prototype = propTypes;
LabelSelect.defaultProps = defaultProps;

export default LabelSelect;
