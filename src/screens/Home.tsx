import * as React from "react";
import Container from "~/components/common/Container";
import AuxHOC from "~/container/AuxHOC";
import List from "~/components/common/list/List";

const Home = () => {
    return (
        <AuxHOC>
            <Container>
               <List/>
            </Container>
        </AuxHOC>

    )
};

export default Home;
