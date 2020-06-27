import React from 'react';
import PropTypes from 'prop-types';
import {Alert, TouchableHighlight, TouchableOpacity, View} from 'react-native';
import {Table, TableWrapper, Row, Cell} from 'react-native-table-component';
import {MaterialIcons} from '@expo/vector-icons'
import {styles} from './styles';
import Colors from "~/theming/colors";
import {isOdd} from "~/utils/method";

const propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({}),
    )
};

const defaultProps = {
    data: []
};

const List = ({data}: {
    data?: any;
}) => {

    const ROW_HEAD_TITLES = ['Name', 'Type', 'Delay', 'Actions'];
    const tableData = [
        ['Coding', 'Eat', 'Sleep', 'Moving'],
        ['a', 'b', 'c', 'd'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
        ['1', '2', '3', '4'],
    ];

    const _alertIndex = (index) => {
        Alert.alert(`This is row ${index + 1}`);
    };

    const ViewActions = (data, index) => (
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
        <View style={{ marginBottom: 20, marginTop:1}}>
            <View style={styles.container}>
                <Table style={styles.table}>
                    <Row data={ROW_HEAD_TITLES} style={styles.head} textStyle={styles.titleText}/>
                    {
                        tableData.map((rowData, index) => (
                            <TouchableHighlight key ={index} activeOpacity={0.2} underlayColor={isOdd(index) ? Colors.white : Colors.filterViolet} onPress={()=>_alertIndex(index)}>
                                <TableWrapper key={index}
                                              style={Object.assign({}, styles.row, {backgroundColor: isOdd(index) ? Colors.white : Colors.filterViolet})}>
                                    {
                                        rowData.map((cellData, cellIndex) => (
                                            <Cell key={cellIndex}
                                                  data={cellIndex === 3 ? ViewActions(cellData, index) : cellData}
                                                  textStyle={styles.text}/>
                                        ))
                                    }
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
