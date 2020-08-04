import React, { FunctionComponent } from "react";
import { NavLink, Link } from "react-router-dom";
import { Styles } from "./styles";

const Header: FunctionComponent = () => {
    const links = [
        {
            name: "HOME",
            to: "/home/"
        },
        {
            name: "ABOUT",
            to: "/about/"
        },
        {
            name: "PROJECTS",
            to: "/projects/"
        },
        {
            name: "RESUME",
            to: "/resume/"
        },
        {
            name: "CONTACT",
            to: "/contact/"
        }
    ]
    return (
        <Styles>
            <div className="title">
                <Link to="/">
                    <div className="main-name">Abhishek</div>
                    <div className="sur-name">Uppe</div>
                </Link>
            </div>
            <nav className="d-flex nav-links">
                {links.map((link)=>{
                    return (
                        <NavLink activeClassName="active" to={link.to} key={link.to}>
                            {link.name}
                        </NavLink>
                    )
                })}
            </nav>
        </Styles>
    );
};

export default Header;
