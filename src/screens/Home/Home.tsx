import * as React from "react";
import Container from "~/components/common/Container";
import AuxHOC from "~/container/AuxHOC";
import List from "~/components/common/list/List";
import Header from "~/components/common/header";
import Fab from "~/components/common/Fab";
import {useRef} from "react";
import {Modalize} from "react-native-modalize";
import {View} from "react-native";
import Text from "~/components/common/Text";
import styles from "~/screens/Home/styles";
import LabelInput from "~/components/common/Input";
import LabelSelect from "~/components/common/Select";
import Button from "~/components/common/Button";
import Colors from "~/theming/colors";

const Home = () => {

    const modalizeRef = useRef<Modalize>(null);

    const contentType = [
        {label: "Article", value: "Art"},
        {label: "Video", value: "Vid"},
        {label: "Cartoon", value: "Cart"},
        {label: "Exercise", value: "Ext"},
    ];

    const contentDelay = [
        {label: "1s", value: "1s"},
        {label: "5s", value: "5s"},
        {label: "20s", value: "20s"},
        {label: "1min", value: "1min"},
        {label: "3min", value: "3min"},
        {label: "5min", value: "5min"},
    ];


    const openModalAddNewTask = () => {
        modalizeRef.current?.open();
    };

    const handleTextChange = (text: string) => {
        console.log(text);
    };

    const handleValueChange = (value: any) => {
        console.log(value);
    };

   const  onSaveContent = () =>{

   };

    return (
        <AuxHOC>
            <Header title={"Tasky"} subtitle={"Manage your contents"}/>
            <Container>
                <List/>
            </Container>
            <Modalize
                ref={modalizeRef}
                modalHeight={590}
                HeaderComponent={
                    <View
                        style={styles.headerModal}>
                        <Text
                            style={styles.textTitleModal}>
                            Add new content
                        </Text>
                    </View>
                }>
                <LabelInput onTextChange={handleTextChange} label={"Name"} placeholder={"Task Name *"}/>
                <LabelSelect zIndex={10} data={contentType} onValueChange={handleValueChange} label={"Content type"}/>
                <LabelSelect zIndex={5} data={contentDelay} onValueChange={handleValueChange} label={"Content delay"}/>
                <Button text={"Save"} color={Colors.violet} onPress={onSaveContent} tintColor={Colors.white}/>
            </Modalize>
            <Fab icon={"add"} onPress={openModalAddNewTask}/>
        </AuxHOC>

    )
};

export default Home;
