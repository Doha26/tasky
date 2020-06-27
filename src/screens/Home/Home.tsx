import * as React from "react";
import Container from "~/components/common/Container";
import AuxHOC from "~/container/AuxHOC";
import List from "~/components/common/list/List";
import Header from "~/components/common/header";
import Fab from "~/components/common/Fab";
import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Modalize} from "react-native-modalize";
import {View, Image} from "react-native";
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
import {addContent} from "~/actions/content-actions";

const Home = () => {

    // Get the dispatcher
    const dispatch = useDispatch();

    // Initialization
    const modalizeRef = useRef<Modalize>(null);
    const [editMode, setEditMode] = useState(false);

    const [contentName, setcontentName] = useState('');
    const [selectedType, setSelectedType] = useState('');
    const [selectedDelay, setSelectedDelay] = useState('');

    // Get the reducer from Redux store
    const {loading, contents} = useSelector(({ContentReducer}: { ContentReducer: Array<ContentType> }) => ContentReducer);


    useEffect(() => {
        //modalizeRef.current?.open();
    }, []);

    const openModalAddNewTask = () => {
        modalizeRef.current?.open();
    };

    const closeModalAddNewTask = () => {
        modalizeRef.current?.close();
    };

    const handleValueText = (value: string) => {
        setcontentName(value);
    };

    const handleSelectedType = (selected: string) => {
        setSelectedType(selected);
    };

    const handleSelectedDelay = (selected: string) => {
        setSelectedDelay(selected);
    };


    const onSaveContent = () => {
        const content: ContentType = {
            name: contentName,
            type: selectedType,
            delay: selectedDelay
        };
        dispatch(addContent(content));
        closeModalAddNewTask();

    };

    const onEditContent = () => {
        setEditMode(true);
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
            <Header title={"Tasky"} subtitle={"Manage your contents"} emptyList={contents.length == 0}/>
            <Container>
                {contents.length == 0 ? noContent : <List data={contents}/>}
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
                <LabelInput onTextChange={handleValueText} label={"Name"} placeholder={"Content Name *"}/>
                <LabelSelect  data={contentType} onValueChange={handleSelectedType} label={"Content type"}/>
                <LabelSelect  data={contentDelay} onValueChange={handleSelectedDelay}
                             label={"Content delay"}/>
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
