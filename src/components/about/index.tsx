import React, { FunctionComponent } from "react";
import Skills from "./skills";
import { Styles } from "./styles";
import AboutMe from "./aboutme";
import Goals from "./goals";

const About: FunctionComponent = () => (
    <Styles>
        <AboutMe />
        <Goals />
        <Skills />
    </Styles>
);

export default About;
