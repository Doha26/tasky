import React from 'react';
import PropTypes, {string} from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
import Text from '~/components/common/Text';
import Colors from '~/theming/colors';
import {MaterialIcons} from "@expo/vector-icons";
import styles from "~/components/common/header/styles";


const propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
    emptyList: PropTypes.bool,
    onDeleteAll: PropTypes.func
};

const defaultProps = {
    title: string,
};

const Header = ({title, subtitle, emptyList, onDeleteAll}:
                    { title: string, subtitle?: string; emptyList: boolean; onDeleteAll: (flag: null) => void }) => {
    const handleDelete = () => {
        if (!emptyList) {
            onDeleteAll(null)
        }
    };
    return (
        <View style={styles.container}>
            <View style={{flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
                <TouchableOpacity>
                    <MaterialIcons
                        name="menu"
                        size={32}
                        color={Colors.white}
                    />
                </TouchableOpacity>
                {subtitle ?
                    <View style={{flexDirection: 'column', marginLeft: 25, marginTop: 15}}>
                        <Text style={styles.titleStyle}>{title}</Text>
                        <Text style={styles.subtitleStyle}>{subtitle}</Text>
                    </View>
                    : <Text style={Object.assign({}, styles.titleStyle, {marginLeft: 40})}>{title}</Text>
                }
            </View>
            <TouchableOpacity style={{marginTop: 16}} onPress={handleDelete}>
                {emptyList ? <MaterialIcons name={"more-vert"} size={32} color={Colors.white}/> :
                    <MaterialIcons name={"delete"} size={32} color={Colors.white}/>}
            </TouchableOpacity>
        </View>
    )
};
Header.propTypes = propTypes;
Header.defaultProps = defaultProps;

export default Header;
