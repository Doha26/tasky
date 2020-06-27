import {StyleSheet} from 'react-native';
import Color from '~/theming/colors'
import Colors from "~/theming/colors";

const styles = StyleSheet.create({
    textContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    containerContentStyle: {
        paddingLeft: 16,
        paddingRight: 6,
    },
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
    },
    table: {
        shadowColor: Colors.black40,
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.7,
        shadowRadius: 2,
        elevation: 2
    },
    head: {
        flex: 1,
        backgroundColor: Colors.white,
        height: 60
    },
    title: {
        flex: 2,
        backgroundColor: '#f6f8fa'
    },
    titleText: {
        marginRight: 6,
        textAlign: 'center',
        fontWeight: 'bold',
        color: Color.filterBlack,
        fontSize: 18
    },
    text: {
        textAlign: 'center',
        fontWeight:"500",
        fontSize: 16
    },
    row: {
        flexDirection: 'row',
        backgroundColor: Colors.white,
        height: 60,
        borderTopColor: "#fafafa",
        borderBottomColor: "#fafafa",
        borderWidth:1,
        borderLeftColor:Colors.transparent,
        borderRightColor: Colors.transparent
    }
});

export {styles};
