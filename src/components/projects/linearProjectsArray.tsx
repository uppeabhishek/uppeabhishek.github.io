import React, { FunctionComponent } from "react";
import { LinearProjectStyles } from "./styles";
import { Button } from "../Button";

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
    github: string;
    description: string;
}

export const projects = {
    "GRADUATE PROJECTS": [
        {
            image: dummyImage,
            name: "code-clone-detection",
            displayName: "Code Clone Detection",
            technologies: ["Python"],
            description: `<div>
                        <div>The project aims at finding code repeats or repeated strings within the codebase.</div>
                        <br />
                        <div style="font-weight: bold">
                            Features
                        </div>
                        <ul>
                            <li>
                                Choose a repository to detect repeated strings.
                            </li>
                            <li>
                                Select Barenbaum Algorithm or Beller Algorithm for finding repeats strings.
                            </li>
                            <li>
                                Repeated Strings Files are displayed in JSON Format.
                            </li>
                        </ul>
                    </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            github: "https://github.com/uppeabhishek/pathfinding-visualizer/",
            type: "GRADUATE PROJECTS"
        },
        {
            image: dummyImage,
            name: "document-manager",
            displayName: "Document Manager",
            technologies: ["NodeJS", "React", "AWS"],
            description: `<div>
                        <div>A document manager service similar to dropbox.</div>
                        <br />
                        <div style="font-weight: bold">
                            Features
                        </div>
                        <ul>
                            <li>
                                Upload Documents
                            </li>
                            <li>
                                Download Documents
                            </li>
                            <li>
                                Extract Text from Documents
                            </li>
                            <li>
                                Translate Text from Documents
                            </li>
                        </ul>
                    </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            github: "https://github.com/uppeabhishek/pathfinding-visualizer/",
            type: "GRADUATE PROJECTS"
        },
        {
            image: dummyImage,
            name: "stock-trading",
            displayName: "Stock Trading",
            technologies: ["Java", "SpringBoot", "MySQL"],
            description: `<div>
                        <div>I have worked on implementing stock trading services using various design patterns.</div>
                        <br />
                        <div style="font-weight: bold">
                            Features
                        </div>
                        <ul>
                            <li>
                                Buying Stock
                            </li>
                            <li>
                                Selling Stock
                            </li>
                            <li>
                                User Portfolio
                            </li>
                            <li>
                                Trending Stocks
                            </li>
                        </ul>
                    </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            github: "https://github.com/uppeabhishek/pathfinding-visualizer/",
            type: "GRADUATE PROJECTS"
        },
        {
            image: dummyImage,
            name: "simple-database",
            displayName: "Simple Database",
            technologies: ["Java"],
            description: `<div>
                        <div>In this project I have implemented a simple database with basic CRUD operations and transactions.</div>
                        <br />
                        <div style="font-weight: bold">
                            Features
                        </div>
                        <ul>
                            <li>
                                Create Database
                            </li>
                            <li>
                                View Database
                            </li>
                            <li>
                                Drop Database
                            </li>
                            <li>
                                Use Database
                            </li>
                            <li>
                                Create Table
                            </li>
                            <li>
                                Insert Table
                            </li>
                            <li>
                                Update Table
                            </li>
                            <li>
                                Delete Table
                            </li>
                            <li>
                                Start Transaction
                            </li>
                            <li>
                                Stop Transaction
                            </li>
                        </ul>
                    </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            github: "https://github.com/uppeabhishek/pathfinding-visualizer/",
            type: "GRADUATE PROJECTS"
        }
    ],
    "PERSONAL PROJECTS": [
        {
            image: dummyImage,
            name: "pathfinding-visualizer",
            displayName: "Pathfinding Visualizer",
            technologies: ["React JS"],
            description: `<div>
                    <div>In this project I have implemented most used shortest path algorithms (weighted and unweighted) in Graph Theory which can be visualized.</div>
                    <br />
                    <div style="font-weight: bold">
                        Features
                    </div>
                    <ul>
                        <li>
                            Manually select a algorithm from the given list of most used algorithms.
                        </li>
                        <li>
                            Draw random mazes and random weights.
                        </li>
                        <li>
                            Source and destination can be dragged wherever needed and visualize the algorithm.
                        </li>
                    </ul>
                </div>`,
            allImages: [dummyImage, dummyImage, dummyImage],
            demoURL: "https://uppeabhishek.github.io/pathfinding-visualizer/",
            github: "https://github.com/uppeabhishek/pathfinding-visualizer/",
            type: "PERSONAL PROJECTS"
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
            type: "PERSONAL PROJECTS"
        },
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
            type: "PERSONAL PROJECTS"
        },
        {
            image: dummyImage,
            name: "ds-algo",
            displayName: "Data Structures and Algorithms",
            technologies: ["Python"],
            description:
                "In this projects I have implemented various data structures and algorithms in java and python.",
            allImages: [dummyImage, dummyImage],
            github: "https://github.com/uppeabhishek/problem-solving",
            type: "PERSONAL PROJECTS"
        },
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
            type: "PERSONAL PROJECTS"
        }
    ]
};

const LinearProjectsArray: FunctionComponent<{ name: string }> = ({ name }) => {
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

    return (
        <LinearProjectStyles>
            {res.map((project) => (
                <div
                    key={project.name}
                    className="project"
                    data-name={project.name}
                    data-type={project.type}
                >
                    <div className="title">
                        <a href={project.github} rel="noopener noreferrer" target="_blank">
                            {project.displayName}
                        </a>
                    </div>
                    <div className="description">
                        <div dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                    <div className="links">
                        {project.demoURL ? (
                            <a href={project.demoURL} rel="noopener noreferrer" target="_blank">
                                <Button className="demo">Demo URL</Button>
                            </a>
                        ) : (
                            ""
                        )}
                        {project.github ? (
                            <a href={project.github} rel="noopener noreferrer" target="_blank">
                                <Button className="demo">Github URL</Button>
                            </a>
                        ) : (
                            ""
                        )}
                    </div>
                </div>
            ))}
        </LinearProjectStyles>
    );
};

export default LinearProjectsArray;
