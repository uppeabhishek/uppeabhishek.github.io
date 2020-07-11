import React, { FunctionComponent, useRef, SyntheticEvent } from "react";
import github from "../../static/github.svg";
import githubOriginal from "../../static/github_original.svg";
import linkedin from "../../static/linkedin.svg";
import linkedinOriginal from "../../static/linkedin_original.svg";
import twitter from "../../static/twitter.svg";
import twitterOriginal from "../../static/twitter_original.svg";
import facebook from "../../static/facebook.svg";
import facebookOriginal from "../../static/facebook_original.svg";
import { Styles } from "./styles";

const SocialLinks: FunctionComponent = () => {
    const width = useRef(30);
    const height = useRef(30);

    const changeMouseOverImage = (e: SyntheticEvent<HTMLImageElement>) => {
        const { name } = e.currentTarget.dataset;

        if (name === "github") {
            e.currentTarget.src = githubOriginal;
        } else if (name === "facebook") {
            e.currentTarget.src = facebookOriginal;
        } else if (name === "twitter") {
            e.currentTarget.src = twitterOriginal;
        } else {
            e.currentTarget.src = linkedinOriginal;
        }
    };

    const changeMouseOutImage = (e: SyntheticEvent<HTMLImageElement>) => {
        const { name } = e.currentTarget.dataset;

        if (name === "github") {
            e.currentTarget.src = github;
        } else if (name === "facebook") {
            e.currentTarget.src = facebook;
        } else if (name === "twitter") {
            e.currentTarget.src = twitter;
        } else {
            e.currentTarget.src = linkedin;
        }
    };

    return (
        <Styles>
            <a href="https://github.com/uppeabhishek/" rel="noreferrer" target="_blank">
                <img
                    alt="Github"
                    data-name="github"
                    height={height.current}
                    src={github}
                    width={width.current}
                    onMouseOut={changeMouseOutImage}
                    onMouseOver={changeMouseOverImage}
                />
            </a>
            <a href="https://www.linkedin.com/in/uppeabhishek/" rel="noreferrer" target="_blank">
                <img
                    alt="Linked In"
                    data-name="linkedin"
                    height={height.current}
                    src={linkedin}
                    width={width.current}
                    onMouseOut={changeMouseOutImage}
                    onMouseOver={changeMouseOverImage}
                />
            </a>
            <a href="https://twitter.com/uppeabhishek97/" rel="noreferrer" target="_blank">
                <img
                    alt="Twitter"
                    data-name="twitter"
                    height={height.current}
                    src={twitter}
                    width={width.current}
                    onMouseOut={changeMouseOutImage}
                    onMouseOver={changeMouseOverImage}
                />
            </a>
            <a
                href="https://www.facebook.com/profile.php?id=100004402809442/"
                rel="noreferrer"
                target="_blank"
            >
                <img
                    alt="Facebook"
                    data-name="facebook"
                    height={height.current}
                    src={facebook}
                    width={width.current}
                    onMouseOut={changeMouseOutImage}
                    onMouseOver={changeMouseOverImage}
                />
            </a>
        </Styles>
    );
};

export default SocialLinks;
