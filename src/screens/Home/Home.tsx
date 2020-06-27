import * as React from "react";
import Container from "~/components/common/Container";
import AuxHOC from "~/container/AuxHOC";
import List from "~/components/common/list/List";
import Header from "~/components/common/header";
import Fab from "~/components/common/Fab";
import {useEffect, useRef, useState} from "react";
import {Modalize} from "react-native-modalize";
import {View} from "react-native";
import Text from "~/components/common/Text";
import styles from "~/screens/Home/styles";
import LabelInput from "~/components/common/Input";
import LabelSelect from "~/components/common/Select";
import Button from "~/components/common/Button";
import Colors from "~/theming/colors";
import Slider from '@react-native-community/slider';
import Loader from "~/components/common/Loader";

const Home = () => {

    const modalizeRef = useRef<Modalize>(null);
    const [editMode, setEditMode] = useState(true);
    const [loading, setLoading] = useState(false);

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


    useEffect(() => {
        modalizeRef.current?.open();
    }, []);

    const openModalAddNewTask = () => {
        modalizeRef.current?.open();
    };

    const handleTextChange = (text: string) => {
        console.log(text);
    };

    const handleValueChange = (value: any) => {
        console.log(value);
    };

    const onSaveContent = () => {

    };

    const onEditContent = () => {
        setEditMode(true);
    };

    return (
        <AuxHOC>
            <Loader loading={loading} message={""}/>
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
                            {editMode ? "Update content" : "Add new content"}
                        </Text>
                    </View>
                }>
                <LabelInput onTextChange={handleTextChange} label={"Name"} placeholder={"Content Name *"}/>
                <LabelSelect zIndex={10} data={contentType} onValueChange={handleValueChange} label={"Content type"}/>
                <LabelSelect zIndex={5} data={contentDelay} onValueChange={handleValueChange} label={"Content delay"}/>
                <Slider
                    style={{flex: 1, height: 40, marginHorizontal: 16}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor={Colors.violet}
                    maximumTrackTintColor={Colors.filterViolet}
                />
                <Button text={editMode ? "Update" : "Save"} color={Colors.violet}
                        onPress={editMode ? onEditContent : onSaveContent}
                        tintColor={Colors.white}/>
            </Modalize>
            <Fab icon={"add"} onPress={openModalAddNewTask}/>
        </AuxHOC>
    )
};

export default Home;
