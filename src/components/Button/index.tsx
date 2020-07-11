import React, { FunctionComponent, ReactNode } from "react";
import { Styles } from "./styles";

export const Button: FunctionComponent<{ children: ReactNode }> = ({ children }) => (
    <Styles type="button">{children}</Styles>
);
