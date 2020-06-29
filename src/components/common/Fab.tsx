import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import {MaterialIcons} from "@expo/vector-icons"
import PropTypes from 'prop-types';
import Colors from '~/theming/colors';

const propTypes = {
    backgroundColor: PropTypes.string,
    icon: PropTypes.string,
    onPress: PropTypes.func
};

const defaultProps = {
    icon: null
};

const Fab = ({
                 icon,
                 onPress
             }: {
    backgroundColor?: string;
    icon: string;
    onPress: () => void;
}) => {

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={styles.fabContainer}>
            <View >
                <MaterialIcons name={icon} size={32} color={Colors.white}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    fabContainer: {
        width: 65,
        height: 65,
        backgroundColor: Colors.violet,
        position: 'absolute',
        right: 20,
        zIndex:100,
        bottom: 40,
        borderRadius: 32.5,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: Colors.black40,
        shadowOpacity: 0.8,
        shadowRadius: 2,
        shadowOffset: {
            height: 1,
            width: 0,
        },
        elevation: 2,
    }
});

Fab.propTypes = propTypes;
Fab.defaultProps = defaultProps;

export default Fab;
