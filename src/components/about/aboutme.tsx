import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const AboutMe: FunctionComponent = () => (
    <div className="aboutme grid-item">
        <div className="title">WHO AM I ? </div>
        <div>Hello, I'm Abhishek Uppe,</div>
        <br />
        <div>
            I'm an enthusiastic <span className="stack-skill">Full-Stack Web Developer</span>,
            <span className="stack-skill"> Problem Solver </span>
            and I'm huge fan of
            <span className="stack-skill"> Python, </span>
            <span className="stack-skill"> Java </span>
            and
            <span className="stack-skill"> Javascript </span>
            and build applications around them.
        </div>
        <br />
        <div>
            My aim is to solve real world problems using the applications of Computer Science.
        </div>
        <br />
        <div>
            Check few of my Projects <Link to="/projects/">here</Link>.
        </div>
        <br />
        <div>
            Please <Link to="/contact/">Contact Me</Link> if you want to work together.
        </div>
    </div>
);

export default AboutMe;
