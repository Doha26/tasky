import * as React from "react";
import Container from "~/components/common/Container";
import AuxHOC from "~/container/AuxHOC";
import List from "~/components/common/list/List";
import Header from "~/components/common/header";
import Fab from "~/components/common/Fab";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Modalize} from "react-native-modalize";
import {View, Image, Alert} from "react-native";
import Text from "~/components/common/Text";
import styles from "~/screens/Home/styles";
import LabelInput from "~/components/common/Input";
import LabelSelect from "~/components/common/Select";
import Button from "~/components/common/Button";
import Colors from "~/theming/colors";
import Slider from '@react-native-community/slider';
import Loader from "~/components/common/Loader";
import {contentDelay, contentType} from "~/utils/data";
import {ContentType} from "~/utils/model/Content";
import {addContent, processing, removeAllContent, removeContent, updateContent} from "~/actions/content-actions";

const Home = () => {

    const ACTIONS = {
        ADD: 'ADD',
        UPDATE: 'UPDATE',
        DELETE_ROW: 'DELETE_ROW',
        DELETE_ALL: 'DELETE_ALL',
    };

    // Get the dispatcher
    const dispatch = useDispatch();

    // Initialization
    const modalizeRef = useRef<Modalize>(null);
    const [editMode, setEditMode] = useState<boolean>(false);

    const [contentName, setContentName] = useState<string>('');
    const [selectedType, setSelectedType] = useState<string>('');
    const [selectedDelay, setSelectedDelay] = useState<string>('');
    const [selectedContentId, setSelectedContentId] = useState<number | null>(null);

    // Get the reducer from Redux store
    const {loading, contents} = useSelector(({ContentReducer}: { ContentReducer: Array<ContentType> }) => ContentReducer);


    useEffect(() => {
        //modalizeRef.current?.open();
    }, []);

    const openModalAddNewTask = () => {
        setEditMode(false);
        modalizeRef.current?.open();
        setContentName('');
        setSelectedDelay('');
        setSelectedType('');
        setSelectedContentId(null)
    };

    const closeModalAddNewTask = () => {
        modalizeRef.current?.close();
    };

    const handleValueText = (value: string) => {
        setContentName(value);
    };

    const handleSelectedType = (selected: string) => {
        setSelectedType(selected);
    };

    const handleSelectedDelay = (selected: string) => {
        setSelectedDelay(selected);
    };

    const onFilterRow = (content: ContentType) => {

    };

    const onRowSelected = (content: ContentType) => {
        openModalAddNewTask();
        setEditMode(true);
        setContentName(content.name);
        setSelectedDelay(content.delay);
        setSelectedType(content.type);
        setSelectedContentId(content.id ? content.id : null);
    };


    const performAction = (flag: string) => {
        if (contentName == '' && selectedType == '' && selectedDelay == '') {
            alert("You should provide all values")
        } else {
            if (contentName == '') {
                alert("You should provide the Content Name");
            } else {
                if (selectedType == '') {
                    alert("You should provide the Content Type");
                } else {
                    if (selectedDelay == '') {
                        alert("You should provide Content Delay");
                    } else {
                        const mContent: ContentType = {
                            name: contentName,
                            type: selectedType,
                            delay: selectedDelay
                        };
                        dispatch(processing());
                        if (flag == ACTIONS.ADD) {
                            dispatch(addContent(mContent));
                        } else {
                            mContent.id = selectedContentId != null ? selectedContentId : 0;
                            dispatch(updateContent(mContent));
                        }
                        closeModalAddNewTask();
                    }
                }
            }
        }
    };

    const handleDelete = (content: ContentType | null) => {
        let message = "";
        if (content == null) { // Case to delete all content
            message = "Confirm delete All content ?"
        } else { // case to delete specific row
            message = "Confirm delete this row ?"
        }
        Alert.alert(
            "Confirm",
            message,
            [
                {
                    text: "Cancel",
                    onPress: () => null,
                    style: "cancel"
                },
                {
                    text: "Confirm", onPress: () => {
                        content !== null ? dispatch(removeContent(content.id ? content.id : undefined)) :
                            dispatch(removeAllContent())
                    }
                }
            ],
            {cancelable: false}
        );
    };


    const noContent = (
        <View style={{flex: 1, marginTop: 150, justifyContent: 'center', alignItems: 'center'}}>
            <Image
                style={styles.defaultImg}
                source={require('~/assets/img_home.jpg')}
            />
        </View>
    );
    return (
        <AuxHOC>
            <Loader loading={loading} message={""}/>
            <Header title={"Tasky"} subtitle={"Manage your contents"} emptyList={contents.length == 0}
                    onDeleteAll={handleDelete}/>
            <Container>
                {contents.length == 0 ? noContent :
                    <List data={contents} onFilterRow={onFilterRow} onRowSelected={onRowSelected}
                          onDeleteRow={handleDelete}/>}
            </Container>
            <Modalize
                ref={modalizeRef}
                modalHeight={540}
                HeaderComponent={
                    <View
                        style={styles.headerModal}>
                        <Text
                            style={styles.textTitleModal}>
                            {editMode ? "Update content" : "Add new content"}
                        </Text>
                    </View>
                }>
                <LabelInput onTextChange={handleValueText} label={"Name"} placeholder={"Content Name *"}
                            value={contentName}/>
                <LabelSelect data={contentType} onValueChange={handleSelectedType} label={"Content type"}
                             value={selectedType}/>
                <LabelSelect data={contentDelay} onValueChange={handleSelectedDelay}
                             label={"Content delay"} value={selectedDelay}/>
                <Slider
                    style={{flex: 1, height: 40, marginHorizontal: 16}}
                    minimumValue={0}
                    maximumValue={1}
                    minimumTrackTintColor={Colors.violet}
                    maximumTrackTintColor={Colors.filterViolet}
                />
                <Button text={editMode ? "Update" : "Save"} color={Colors.violet}
                        onPress={() => editMode ? performAction(ACTIONS.UPDATE) : performAction(ACTIONS.ADD)}
                        tintColor={Colors.white}/>
            </Modalize>

            <Fab icon={"add"} onPress={openModalAddNewTask}/>
        </AuxHOC>
    )
};

export default Home;
