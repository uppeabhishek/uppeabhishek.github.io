import React, { FunctionComponent } from "react";
import { useParams, useHistory } from "react-router-dom";
import Slider from "react-slick";
import { Button } from "../Button";
import { ProjectDescriptionStyles } from "./styles";
import { projects } from "./projectsarray";

const ProjectDescription: FunctionComponent = () => {
    const { name, type } = useParams();
    const history = useHistory();

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    const goBack = () => {
        history.goBack();
    };

    // @ts-ignore
    const currentProject = projects[type].filter((ele) => ele.name === name);

    return (
        <ProjectDescriptionStyles>
            <Button className="goback" onClick={goBack}>
                Go Back
            </Button>
            <div className="main">
                <div className="title center-items">{currentProject[0].displayName}</div>
                <div className="technologies">
                    {currentProject[0].technologies.map((ele: any) => (
                        <div key={ele} className="technology">
                            {ele}
                        </div>
                    ))}
                    <div className="description">
                        <div>{currentProject[0].description}</div>
                    </div>
                    <div>
                        <Slider {...settings}>
                            {currentProject[0].allImages.map((image: string, index: number) => {
                                return <img key={index} alt="project" height={400} src={image} />;
                            })}
                        </Slider>
                    </div>
                    {currentProject[0].demoURL ? (
                        <a
                            href={currentProject[0].demoURL}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button className="demo">Demo URL</Button>
                        </a>
                    ) : (
                        ""
                    )}
                    {currentProject[0].github ? (
                        <a
                            href={currentProject[0].github}
                            rel="noopener noreferrer"
                            target="_blank"
                        >
                            <Button className="github">View on github</Button>
                        </a>
                    ) : (
                        ""
                    )}
                </div>
            </div>
        </ProjectDescriptionStyles>
    );
};

export default ProjectDescription;
