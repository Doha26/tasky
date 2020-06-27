import React from 'react';
import {StyleSheet} from "react-native";
import {TextStyle, View, ViewStyle} from "react-native";
import Text from "~/components/common/Text";
import PropTypes from 'prop-types';
import Colors from "~/theming/colors";
import DropDownPicker from 'react-native-dropdown-picker';

const propTypes = {
    label: PropTypes.string.isRequired,
    zIndex:PropTypes.number,
    data: PropTypes.array,
    onValueChange: PropTypes.func
};

const defaultProps = {
    label: "",
};

const LabelSelect = ({
                         label,
                         zIndex,
                         data,
                         onValueChange,
                     }: {
    label?: string;
    zIndex?: number;
    data: Array<any>;
    onValueChange: (value: any) => void;
}) => {
    const handleSelected = (selected:any) => {
        onValueChange(selected)
    };

    return (
        <View style={Object.assign({},styles.container,{zIndex:zIndex})}>
            <Text style={styles.label}>
                {label}
            </Text>
            <DropDownPicker
                placeholder={"select"}
                items={data}
                defaultIndex={0}
                style={styles.innerStyle}
                containerStyle={styles.input}
                dropDownStyle={styles.dropDownStyle}
                labelStyle={{fontSize: 16, color: Colors.black100, fontWeight:'500'}}
                onChangeItem={handleSelected}
            />
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        zIndex:1000
    } as ViewStyle,
    label: {
        marginLeft: 3,
        fontSize: 14,
        fontWeight: 'bold',
        color: Colors.gray[500],
    } as TextStyle,
    innerStyle:{
        backgroundColor:Colors.gray[200],
        borderColor:Colors.transparent,

    },
    dropDownStyle:{
        zIndex:1000
    },
    input: {
        height: 50,
        backgroundColor: Colors.gray[200],
        paddingHorizontal:8,
        borderRadius: 4,
        marginTop: 5,
    } as TextStyle,
});

LabelSelect.prototype = propTypes;
LabelSelect.defaultProps = defaultProps;

export default LabelSelect;
