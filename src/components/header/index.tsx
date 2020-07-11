import React, { FunctionComponent } from "react";
import { Styles } from "./styles";
import { NavLink, Link } from 'react-router-dom';

const Header: FunctionComponent = () => (
    <Styles>
        <div className="title">
            <Link to="/">
                <div className="main-name">Abhishek</div>
                <div className="sur-name">Uppe</div>
            </Link>
        </div>
        <nav className="d-flex nav-links">
            <NavLink activeClassName="active" to="/Home/">
                Home
            </NavLink>
            <NavLink activeClassName="active" to="/About/">
                About
            </NavLink>
            <NavLink activeClassName="active" to="/Projects/">
                Projects
            </NavLink>
            <NavLink activeClassName="active" to="/Resume/">
                Resume
            </NavLink>
            <NavLink activeClassName="active" to="/Contact/">
                Contact
            </NavLink>
        </nav>
    </Styles>
);

export default Header;
