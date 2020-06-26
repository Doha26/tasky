import * as React from "react";
import Text from '~/components/common/Text'
import Container from "~/components/common/Container";
import AuxHOC from "~/container/AuxHOC";
import {View} from "react-native";

const Home = () => {
    return (
        <AuxHOC>
            <Container>
               <View style={{flex:1, flexDirection:'column',backgroundColor:'#ffffff'}}>
                   <Text style={{}} bold={true}>
                       Home
                   </Text>
               </View>
            </Container>
        </AuxHOC>

    )
};

export default Home;
