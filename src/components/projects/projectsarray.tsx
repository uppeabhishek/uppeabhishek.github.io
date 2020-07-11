import React, { FunctionComponent, SyntheticEvent } from "react";
import { ProjectStyles } from "./styles";
import dummyImage from "../../static/dummyImage.svg";
import { useHistory } from "react-router-dom";

interface ProjectInterface {
    name: string;
    displayName: string;
    technology: string;
    type: string;
    image: string;
    github?: string;
}

const projects = {
    Javascript: [
        {
            image: dummyImage,
            name: "memory-game",
            displayName: "Memory Game",
            technology: "Javascript",
            type: "Javascript"
        }
    ],
    Python: [
        {
            image: dummyImage,
            name: "ds-algo",
            displayName: "Data Structures and Algorithms",
            technology: "Python",
            type: "Python"
        }
    ],
    ReactJS: [
        {
            image: dummyImage,
            name: "sorting-visualizer",
            displayName: "Sorting Visualizer",
            technology: "React JS / Python",
            type: "ReactJS"
        }
    ]
};

const ProjectsArray: FunctionComponent<{ name: string }> = ({ name }) => {
    let res: Array<ProjectInterface> = [];

    if (name === "All") {
        Object.values(projects).forEach((project) => {
            res = res.concat(project);
        });
    }

    // Change this way of comparing
    else if (name === "ReactJS" || name === "Javascript" || name === "Python") {
        res = res.concat(projects[name]);
    }

    const history = useHistory();

    const goToProject = (e: SyntheticEvent<HTMLDivElement>) => {
        history.push(`/projects/${e.currentTarget.dataset.name}/`);
    }

    return (
        <ProjectStyles className="projects">
            {res.map((project) => (
                <div key={project.name} className="project center-items" data-name={project.name} onClick={goToProject}>
                    <div className="img" style={{ backgroundImage: `url(${project.image})` }} />
                    <div className="description">{project.displayName}</div>
                </div>
            ))}
        </ProjectStyles>
    );
};

export default ProjectsArray;
