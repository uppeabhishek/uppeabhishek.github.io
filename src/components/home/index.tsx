import React, { FunctionComponent } from "react";
import { Styles } from "./styles";
import profile from "../../static/profile.jpeg";

const Home: FunctionComponent = () => {
    const languages = [
        "SOFTWARE DEVELOPER",
        "WEB DEVELOPER",
        "REACT NATIVE DEVELOPER",
        "ANDROID DEVELOPER",
        "AND MORE.."
    ];

    return (
        <Styles>
            <div className="about-me">
                <img
                    alt="Abhishek Uppe"
                    className="profile-image"
                    height={200}
                    src={profile}
                    width={200}
                />
                <div className="name">Abhishek Uppe</div>
                <div className="languages center-items flex-col">
                    {languages.map((ele, index) => (
                        <div key={ele} className="language">
                            {languages[index]}
                        </div>
                    ))}
                </div>
            </div>
        </Styles>
    );
};

export default Home;
