import React, { FunctionComponent, useRef } from "react";
import SkillBar from "./skillBar";

const Skills: FunctionComponent = () => {
    const json = useRef([
        {
            name: "Java",
            percentage: 80
        },
        {
            name: "Python",
            percentage: 90
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
            name: "Django",
            percentage: 80
        },
        {
            name: "SpringBoot",
            percentage: 80
        },
        {
            name: "React",
            percentage: 90
        },
        {
            name: "React Native",
            percentage: 75
        },
        {
            name: "MySQL",
            percentage: 80
        }
    ]);

    return (
        <div className="skills grid-item">
            <div className="title">SKILLS</div>
            <div>
                {json.current.map((ele) => (
                    <SkillBar key={ele.name} name={ele.name} percentage={ele.percentage} />
                ))}
            </div>
        </div>
    );
};

export default Skills;
