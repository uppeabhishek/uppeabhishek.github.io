import React, { FunctionComponent, useRef, useState, useEffect } from "react";
import { Styles } from "./styles";
import ProjectsArray from "./projectsarray";

const Projects: FunctionComponent = () => {
    const technologies = useRef(["All", "ReactJS", "Javascript", "Python"]);
    const [selected, toggleSelected] = useState(technologies.current[0]);

    const handleClick = (e: KeyboardEvent, technology: string) => {
        if (e.key === "Enter") {
            toggleSelected(technology);
        }
    };

    return (
        <Styles>
            <div className="filters d-flex">
                {technologies.current.map((technology: string) => {
                    const className = technology === selected ? "active" : "";
                    return (
                        <div
                            key={technology}
                            className={`center-items each-filter ${className}`}
                            role="img"
                            onClick={() => {
                                toggleSelected(technology);
                            }}
                            // @ts-ignore
                            onKeyDown={(e) => handleClick(e, technology)}
                        >
                            {technology}
                        </div>
                    );
                })}
            </div>
            <ProjectsArray name={selected} />
        </Styles>
    );
};

export default Projects;
