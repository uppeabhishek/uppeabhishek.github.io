import React, { FunctionComponent } from "react";
import { LinearProjectStyles } from "./styles";
import {Button} from "../Button";

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
    REACT: [
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
            type: "REACT"
        },
        {
            image: dummyImage,
            name: "sorting-visualizer",
            displayName: "Sorting Visualizer",
            technologies: ["React JS"],
            description: `<div>
                    <div>In this project I have implemented various sorting algorithms which can be visualized.</div>
                    <br />
                    <div style="font-weight: bold">
                        Features
                    </div>
                    <ul>
                        <li>
                            Users can manually select a algorithm from the given list of algorithms.
                        </li>
                        <li>
                            We can intialize the array either in increasing, decreasing, random (or) almost sorted manner.
                        </li>
                        <li>
                            Visualize the algorithm
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
            name: "visual_cryptography_steganography",
            displayName: "Visual Cryptography Steganography",
            technologies: ["Python"],
            description:
                `
                <div>Cryptography is the process of encryption and decryption of text data.</div>
                <br />
                <div>Steganography is the process of hiding text data inside images, audio, video.</div>
                <br />
                <div>So we can mix both Cryptography and Steganography and achieve good level of security while transmitting images or videos.</div>
                <br />
                <div>I have used AES algorithm for text encryption and decryption.</div>
                <br />
                <div>There are several algorithms for achieving steganography.</div>
                <br />
                <div>In this project I have implemented LST(Least Significant Bit) algorithm on Steganography.</div>
                <br />
                <div style="font-weight: bold">
                    Features
                </div>
                <ul>
                    <li>
                        <span style="font-weight: bold">
                            Encoding:
                        </span>
                        Users need to enter an image path, secret key and text to be encoded and the output will be image with encrypted text hidden inside image.
                    </li>
                    <br />
                    <li>
                        <span style="font-weight: bold">
                            Decoding:
                        </span>
                        Users need to enter an image path and secret key to decode text and the output will be decrypted Text decoded from image.
                    </li>
                </ul>
                `,
            github: "https://github.com/uppeabhishek/visual-cryptography-steganography",
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
                        <a
                            href={project.github}
                            rel="noopener noreferrer"
                            target="_blank">
                            {project.displayName}
                        </a>
                    </div>
                    <div className="description">
                        <div dangerouslySetInnerHTML={{ __html: project.description }} />
                    </div>
                    <div className="links">
                        {project.demoURL ? 
                            <a
                                href={project.demoURL}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Button className="demo">Demo URL</Button>
                            </a> : 
                        ''}
                        {project.github ? 
                            <a
                                href={project.github}
                                rel="noopener noreferrer"
                                target="_blank"
                            >
                                <Button className="demo">Github URL</Button>
                            </a> : 
                        ''}
                    </div>
                </div>
            ))}
        </LinearProjectStyles>
    );
};

export default LinearProjectsArray;
