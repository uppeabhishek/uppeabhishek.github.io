import React, { FunctionComponent } from "react";

interface SkillBarType {
    name: string;
    percentage: number;
}

const SkillBar: FunctionComponent<SkillBarType> = ({ name, percentage }) => (
    <div className="skill d-flex">
        <div className="name center-items">{name}</div>
        <div className="bar">
            <div className="color center-items" style={{ width: `${percentage}%` }}>
                {`${percentage}%`}
            </div>
        </div>
    </div>
);

export default SkillBar;
