import React, { FunctionComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import { Styles } from "./styles";

const Header: FunctionComponent = () => (
    <Styles>
        <div className="title">
            <Link to="/">
                <div className="main-name">Abhishek</div>
                <div className="sur-name">Uppe</div>
            </Link>
        </div>
        <nav className="d-flex nav-links">
            <NavLink activeClassName="active" to="/home/">
                Home
            </NavLink>
            <NavLink activeClassName="active" to="/about/">
                About
            </NavLink>
            <NavLink activeClassName="active" to="/projects/">
                Projects
            </NavLink>
            <NavLink activeClassName="active" to="/resume/">
                Resume
            </NavLink>
            <NavLink activeClassName="active" to="/contact/">
                Contact
            </NavLink>
        </nav>
    </Styles>
);

export default Header;
