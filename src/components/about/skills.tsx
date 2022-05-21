import React, {FunctionComponent, useRef} from "react";
import SkillBar from "./skillBar";

const Skills: FunctionComponent = () => {
    const json = useRef([
        {
            name: "Python",
            percentage: 90
        },
        {
            name: "Javascript",
            percentage: 90
        },
        {
            name: "Java",
            percentage: 80
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
            name: "Flask",
            percentage: 70
        },
        {
            name: "NodeJS",
            percentage: 90
        },
        {
            name: "SpringBoot",
            percentage: 70
        },
        {
            name: "React",
            percentage: 90
        },
        // {
        //     name: "React Native",
        //     percentage: 75
        // },
        {
            name: "MySQL",
            percentage: 80
        },
        {
            name: "PostgreSQL",
            percentage: 85
        },
        {
            name: "DynamoDB",
            percentage: 85
        },
        {
            name: "AWS",
            percentage: 80
        },
        {
            name: "Docker",
            percentage: 70
        }
    ]);

    return (
        <div className="skills grid-item">
            <div className="title">SKILLS</div>
            <div>
                {json.current.map((ele) => (
                    <SkillBar key={ele.name} name={ele.name} percentage={ele.percentage}/>
                ))}
            </div>
        </div>
    );
};

export default Skills;
