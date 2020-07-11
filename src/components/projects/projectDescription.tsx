import React, { FunctionComponent } from "react";
import { useParams } from "react-router-dom";

const ProjectDescription: FunctionComponent = () => {
    const { name } = useParams();
    return (
        <div>
            {name}
        </div>
    )
}

export default ProjectDescription;