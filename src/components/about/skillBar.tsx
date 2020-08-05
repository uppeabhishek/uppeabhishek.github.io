import React, { FunctionComponent } from "react";
import { SkillStyle } from "./styles";

interface SkillBarType {
    name: string;
    percentage: number;
}

const SkillBar: FunctionComponent<SkillBarType> = ({ name, percentage }) => (
    <SkillStyle width={percentage}>
        <div className="name center-items" title={name}>
            {name}
        </div>
        <div className="bar">
            <div className="color" />
            <div className="percentage">{`${percentage}%`}</div>
        </div>
    </SkillStyle>
);

export default SkillBar;
