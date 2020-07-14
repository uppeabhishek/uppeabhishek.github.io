import { Route, Switch } from "react-router-dom";
import React, { lazy } from "react";
import AuthorisedRoute from "./AuthorisedRoute";

const Home = lazy(() => import("../home"));
const Projects = lazy(() => import("../projects"));
const Resume = lazy(() => import("../resume"));
const About = lazy(() => import("../about"));
const ProjectDescription = lazy(() => import("../projects/projectDescription"));
const Contact = lazy(() => import("../contact"));

export function Router() {
    const NotFound = lazy(() => import("./NotFound"));

    return (
        <Switch>
            <AuthorisedRoute key="home" component={Home} path="/home/" />
            <AuthorisedRoute
                key="project"
                component={ProjectDescription}
                path="/projects/:type/:name/"
            />
            <AuthorisedRoute key="projects" component={Projects} path="/projects/" />
            <AuthorisedRoute key="resume" component={Resume} path="/resume/" />
            <AuthorisedRoute key="about" component={About} path="/about/" />
            <AuthorisedRoute key="contact" component={Contact} path="/contact/" />
            <AuthorisedRoute key="home" component={Home} path="/" />
            <Route component={NotFound} />
        </Switch>
    );
}

export default Router;
