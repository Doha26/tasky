import * as React from "react";
import Container from "~/components/common/Container";
import AuxHOC from "~/container/AuxHOC";
import List from "~/components/common/list/List";
import Header from "~/components/common/header";

const Home = () => {
    return (
        <AuxHOC>
            <Header title={"Tasky"} subtitle={"Manage your daily tasks"}/>
            <Container>

               <List/>
            </Container>
        </AuxHOC>

    )
};

export default Home;
