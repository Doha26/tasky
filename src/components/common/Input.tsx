import React from 'react';
import {StyleSheet} from "react-native";
import {TextInput, TextStyle, View, ViewStyle} from "react-native";
import Text from "~/components/common/Text";
import PropTypes from 'prop-types';
import Colors from "~/theming/colors";

const propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onTextChange: PropTypes.func,
    value:PropTypes.string,
    autoFocus: PropTypes.func,
};

const defaultProps = {
    label: "",
};

const LabelInput = ({
                        label,
                        placeholder,
                        onTextChange,
    value,
                        autoFocus,
                    }: {
    label?: string;
    value?: string;
    placeholder?: string;
    onTextChange: (event) => void;
    autoFocus?: boolean;
}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>
                {label}
            </Text>
            <TextInput
                style={styles.input}
                placeholder={placeholder}
                value={value}
                autoFocus={autoFocus}
                underlineColorAndroid='transparent'
                onChangeText={(text) => onTextChange(text)}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15
    } as ViewStyle,
    label: {
        marginLeft: 3,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.gray[500],
    } as TextStyle,
    input: {
        height: 50,
        fontSize: 16,
        backgroundColor: Colors.gray[200],
        paddingLeft:16,
        paddingRight:16,
        borderRadius:4,
        marginTop:5
    } as TextStyle,
});

LabelInput.prototype = propTypes;
LabelInput.defaultProps = defaultProps;

export default LabelInput;
