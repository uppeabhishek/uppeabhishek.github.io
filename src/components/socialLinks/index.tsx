import React, { FunctionComponent, useRef } from "react";

// // @ts-ignore
// Import github from "../../static/github.svg";

// @ts-ignore
import githubOriginal from "../../static/github_original.svg";

// // @ts-ignore
// Import linkedin from "../../static/linkedin.svg";

// @ts-ignore
import linkedinOriginal from "../../static/linkedin_original.svg";

// // @ts-ignore
// Import twitter from "../../static/twitter.svg";

// @ts-ignore
import twitterOriginal from "../../static/twitter_original.svg";

// // @ts-ignore
// Import facebook from "../../static/facebook.svg";

// @ts-ignore
import facebookOriginal from "../../static/facebook_original.svg";
import { Styles } from "./styles";

const SocialLinks: FunctionComponent = () => {
    const width = useRef(30);
    const height = useRef(30);

    /*
     * Const changeMouseOverImage = (e: SyntheticEvent<HTMLImageElement>) => {
     *     const { name } = e.currentTarget.dataset;
     */

    /*
     *     If (name === "github") {
     *         e.currentTarget.src = githubOriginal;
     *     } else if (name === "facebook") {
     *         e.currentTarget.src = facebookOriginal;
     *     } else if (name === "twitter") {
     *         e.currentTarget.src = twitterOriginal;
     *     } else {
     *         e.currentTarget.src = linkedinOriginal;
     *     }
     * };
     */

    /*
     * Const changeMouseOutImage = (e: SyntheticEvent<HTMLImageElement>) => {
     *     const { name } = e.currentTarget.dataset;
     */

    /*
     *     If (name === "github") {
     *         e.currentTarget.src = github;
     *     } else if (name === "facebook") {
     *         e.currentTarget.src = facebook;
     *     } else if (name === "twitter") {
     *         e.currentTarget.src = twitter;
     *     } else {
     *         e.currentTarget.src = linkedin;
     *     }
     * };
     */

    const socialNetworks = [
        {
            alt: "Github",
            dataName: "github",
            href: "https://github.com/uppeabhishek/",
            src: githubOriginal
        },
        {
            alt: "Linked In",
            dataName: "linkedin",
            href: "https://www.linkedin.com/in/uppeabhishek/",
            src: linkedinOriginal
        },
        {
            alt: "Twitter",
            dataName: "twitter",
            href: "https://twitter.com/uppeabhishek97/",
            src: twitterOriginal
        },
        {
            alt: "Facebook",
            dataName: "facebook",
            href: "https://www.facebook.com/profile.php?id=100004402809442/",
            src: facebookOriginal
        }
    ];

    return (
        <Styles>
            {socialNetworks.map((network) => (
                <a
                    key={network.dataName}
                    href={network.href}
                    rel="noopener noreferrer"
                    target="_blank"
                >
                    <img
                        alt={network.alt}
                        data-name={network.dataName}
                        height={height.current}
                        src={network.src}
                        width={width.current}
                    />
                </a>
            ))}
        </Styles>
    );
};

export default SocialLinks;
