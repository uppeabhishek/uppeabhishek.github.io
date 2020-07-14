import React, { FunctionComponent, useRef } from "react";
import SkillBar from "./skillBar";

const Skills: FunctionComponent = () => {
    const json = useRef([
        {
            name: "React",
            percentage: 90
        },
        {
            name: "React Redux",
            percentage: 85
        },
        {
            name: "Javascript",
            percentage: 90
        },
        {
            name: "Typescript",
            percentage: 70
        },
        {
            name: "HTML5",
            percentage: 85
        },
        {
            name: "CSS",
            percentage: 80
        },
        {
            name: "Bootstrap",
            percentage: 75
        },
        {
            name: "Python",
            percentage: 90
        },
        {
            name: "Django",
            percentage: 70
        },
        {
            name: "Linux",
            percentage: 85
        }
    ]);

    return (
        <div className="skills">
            {json.current.map((ele) => (
                <SkillBar key={ele.name} name={ele.name} percentage={ele.percentage} />
            ))}
        </div>
    );
};

export default Skills;
