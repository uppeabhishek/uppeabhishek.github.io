import React, { FunctionComponent, SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
import { ProjectStyles } from "./styles";

// @ts-ignore
import dummyImage from "../../static/dummyImage.svg";

interface ProjectInterface {
    name: string;
    displayName: string;
    technologies: Array<string>;
    type: string;
    image?: string;
    allImages?: Array<string>;
    demoURL?: string;
    github?: string;
}

export const projects = {
    REACT: [
        {
            image: dummyImage,
            name: "pathfinding-visualizer",
            displayName: "Pathfinding Visualizer",
            technologies: ["React JS"],
            description: `<div>
                    <div style="font-weight: bold">
                        Features
                    </div>
                    <ul>
                        <li>
                            Users can manually select a algorithm from the given list of algorithms.
                        </li>
                        <li>
                            We can even add custom data and visualize the respective alogorithm.
                        </li>
                        <li>
                            We can intialize the array either in increasing, decreasing, random (or) almost sorted manner.
                        </li>
                    </ul>
                </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            demoURL: "https://uppeabhishek.github.io/pathfinding-visualizer/",
            github: "https://github.com/uppeabhishek/pathfinding-visualizer/",
            type: "REACT"
        },
        {
            image: dummyImage,
            name: "sorting-visualizer",
            displayName: "Sorting Visualizer",
            technologies: ["React JS"],
            description: `<div>
                    <div style="font-weight: bold">
                        Features
                    </div>
                    <ul>
                        <li>
                            Users can manually select a algorithm from the given list of algorithms.
                        </li>
                        <li>
                            We can even add custom data and visualize the respective alogorithm.
                        </li>
                        <li>
                            We can intialize the array either in increasing, decreasing, random (or) almost sorted manner.
                        </li>
                    </ul>
                </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            demoURL: "https://uppeabhishek.github.io/sorting-visualizer/",
            github: "https://github.com/uppeabhishek/sorting-visualizer/",
            type: "REACT"
        }
    ],
    JAVASCRIPT: [
        {
            image: dummyImage,
            name: "memory-game",
            displayName: "Memory Game",
            technologies: ["Javascript"],
            allImages: [dummyImage, dummyImage],
            description:
                "This is a simple memory game written in vanilla javascript. Here the user should match all the cards in the group of 2 to win the game.",
            demoURL: "https://uppeabhishek.github.io/memory-game/",
            github: "https://github.com/uppeabhishek/memory-game/",
            type: "JAVASCRIPT"
        }
    ],
    PYTHON: [
        {
            name: "steganography",
            displayName: "Steganography",
            technologies: ["Python"],
            description: `<div>In this project I have implemented LST(Least Significant Bit) algorithm on Steganography.</div>
                <br />
                <div style="font-weight: bold">
                    Features
                </div>
                <ul>
                    <li>
                        <span style="font-weight: bold">
                            Encoding:
                        </span>
                        Users can to enter an image path and text to be encoded and the output will be embedded text within image.
                    </li>
                    <li>
                        <span style="font-weight: bold">
                            Decoding:
                        </span>
                        Users can to enter an image path to be decoded and the output will be decoded text.
                    </li>
                </ul>
                `,
            github: "https://github.com/uppeabhishek/steganography",
            type: "PYTHON"
        },
        {
            image: dummyImage,
            name: "ds-algo",
            displayName: "Data Structures and Algorithms",
            technologies: ["Python"],
            description:
                "In this projects I have implemented various data structures and algorithms in python.",
            allImages: [dummyImage, dummyImage],
            github: "https://github.com/uppeabhishek/Data-Structures-and-Algorithms",
            type: "PYTHON"
        }
    ]
};

const ProjectsArray: FunctionComponent<{ name: string }> = ({ name }) => {
    let res: Array<ProjectInterface> = [];

    const lowerCaseName = name.toLowerCase();

    if (lowerCaseName === "all") {
        Object.values(projects).forEach((project) => {
            res = res.concat(project);
        });
    } else {
        // @ts-ignore
        res = res.concat(projects[name]);
    }

    const history = useHistory();

    const goToProject = (e: SyntheticEvent<HTMLDivElement>) => {
        history.push(`/projects/${e.currentTarget.dataset.type}/${e.currentTarget.dataset.name}`);
    };

    return (
        <ProjectStyles className="projects">
            {res.map((project) => (
                <div
                    key={project.name}
                    className="project center-items"
                    data-name={project.name}
                    data-type={project.type}
                    onClick={goToProject}
                >
                    <div className="img" style={{ backgroundImage: `url(${project.image})` }} />
                    <div className="description">{project.displayName}</div>
                </div>
            ))}
        </ProjectStyles>
    );
};

export default ProjectsArray;
