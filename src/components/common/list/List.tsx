import React from 'react';
import PropTypes from 'prop-types';
import {Alert, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {MaterialIcons} from '@expo/vector-icons'
import {styles} from './styles';
import Colors from "~/theming/colors";
import {isOdd} from "~/utils/method";
import {ContentType} from "~/utils/model/Content";

const propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({}),
    )
};

const defaultProps = {
    data: []
};

const List = ({data}: {
    data: Array<ContentType>;
}) => {

    const ROW_HEAD_TITLES = ['Name', 'Type', 'Delay', 'Actions'];

    const _alertIndex = (index) => {
        Alert.alert(`This is row ${index + 1}`);
    };

    const ViewActions = (data:ContentType, index) => (
        <View style={{
            flex: 1,
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
            justifyContent: "center",
        }}>
            <TouchableOpacity onPress={() => _alertIndex(index)} style={{flexDirection: "row"}}>
                <MaterialIcons name={"arrow-upward"} size={22} color={Colors.blue}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => _alertIndex(index)} style={{flexDirection: "row"}}>
                <MaterialIcons name={"arrow-downward"} size={22} color={Colors.black100}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <MaterialIcons name={"delete"} size={22} color={Colors.redOpaque}/>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={{marginBottom: 20, marginTop: 1}}>
            <View style={styles.container}>
                <Table style={styles.table}>
                    <Row data={ROW_HEAD_TITLES} style={styles.head} textStyle={styles.titleText}/>
                    {
                        data.map((content: ContentType, index) => (

                            <TouchableHighlight key={index} activeOpacity={0.2}
                                                underlayColor={isOdd(index) ? Colors.white : Colors.filterViolet}
                                                onPress={() => _alertIndex(index)}>
                                <TableWrapper key={index}
                                              style={Object.assign({}, styles.row, {backgroundColor: isOdd(index) ? Colors.white : Colors.filterViolet})}>
                                    <Cell key={content.id}
                                          data={content.name}
                                          textStyle={styles.text}/>

                                    <Cell key={content.id}
                                          data={content.type}
                                          textStyle={styles.text}/>

                                    <Cell key={content.id}
                                          data={content.delay}
                                          textStyle={styles.text}/>

                                    <Cell key={content.id}
                                          data={ViewActions(content, index)}
                                          textStyle={styles.text}/>

                                </TableWrapper>
                            </TouchableHighlight>
                        ))
                    }
                </Table>
            </View>
        </View>
    );
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;

export default List;
