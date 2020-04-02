import React from "react";

import Polls from "../components/Polls";
import ErrorMess from "../components/ErrorMess"


const Home = props => (
    <div>
        <ErrorMess/>
        <Polls {...props}/>
    </div>
);

export default Home;
