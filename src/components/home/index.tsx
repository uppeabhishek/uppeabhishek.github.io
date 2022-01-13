import React, { FunctionComponent, useEffect, useRef } from "react";
import { Styles } from "./styles";

// @ts-ignore
import profile from "../../static/profile.jpeg";

const Home: FunctionComponent = () => {
    const languages = [
        "SOFTWARE DEVELOPER",
        "WEB DEVELOPER",
        "REACT NATIVE DEVELOPER",
        "AND MORE.."
    ];

    const languageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = 150;
        let index = 0;
        let i = 0;
        let goForward = true;

        function typeLetters() {
            if (goForward) {
                if (i < languages[index].length && languageRef.current) {
                    languageRef.current.innerHTML += languages[index].charAt(i++);
                } else {
                    setTimeout(() => {
                        goForward = false;
                    }, timeout * 10);
                }
            } else if (i > -1 && languageRef.current) {
                languageRef.current.innerHTML = languageRef.current.innerHTML.slice(0, -1);
                i--;
            } else {
                i = 0;
                if (index < languages.length - 1) {
                    index += 1;
                } else {
                    index = 0;
                }
                goForward = true;
            }
        }

        if (languageRef.current && languages.length) {
            setInterval(typeLetters, timeout);
        }
    }, []);

    return (
        <Styles>
            <div className="about-me">
                <img
                    alt="Abhishek Uppe"
                    className="profile-image"
                    height={300}
                    src={profile}
                    width={300}
                />
                <div className="name">Abhishek Uppe</div>
                <div className="languages center-items flex-col">
                    <div ref={languageRef} className="language" />
                </div>
            </div>
        </Styles>
    );
};

export default Home;
