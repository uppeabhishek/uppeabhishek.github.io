import React, { FunctionComponent } from "react";
import Skills from "./skills";
import { Styles } from "./styles";
import AboutMe from "./aboutme";
import Goals from "./goals";

const About: FunctionComponent = () => (
    <Styles>
        <div className="page-title">ABOUT</div>
        <div className="about grid-container">
            <Goals />
            <AboutMe />
            <Skills />
        </div>
    </Styles>
);

export default About;
