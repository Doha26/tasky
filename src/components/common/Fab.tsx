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
    const {container} = styles;
    const fabContainerStyle = [container];

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            style={fabContainerStyle}>
            <View style={styles.fabContainer}>
              <MaterialIcons name={icon} size={32} color={Colors.white}/>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginHorizontal: 8,
        marginVertical: 2,
        borderRadius: 6,
    },
    fabContainer:{
        width:65,
        height:65,
        backgroundColor:Colors.violet,
        position:'absolute',
        right:20,
        bottom:70,
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
