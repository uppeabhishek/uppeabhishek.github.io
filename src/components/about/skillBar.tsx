import React, { FunctionComponent } from "react";
import { SkillBarStyles } from "./styles";

interface SkillBarType {
    name: string;
    percentage: number;
}

const SkillBar: FunctionComponent<SkillBarType> = ({ name, percentage }) => (
    <SkillBarStyles className="d-flex">
        <div className="name center-items">{name}</div>
        <div className="bar">
            <div className="color center-items" style={{ width: `${percentage}%` }}>
                {`${percentage}%`}
            </div>
        </div>
    </SkillBarStyles>
);

export default SkillBar;
