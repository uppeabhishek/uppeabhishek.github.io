import { Route, Switch } from 'react-router-dom';
import React, { lazy } from 'react';
import AuthorisedRoute from './AuthorisedRoute';

const Home = lazy(() => import('../home'));
const Projects = lazy(() => import('../projects'));
const Resume = lazy(() => import('../resume'));
const ProjectDescription = lazy(() => import('../projects/projectDescription'));


export function Router() {
    const NotFound = lazy(() => import('./NotFound'));
    return (
        <Switch>
            <AuthorisedRoute key="home" path="/home/" component={Home} />
            <AuthorisedRoute key="projects" path="/projects/" component={Projects} />
            <AuthorisedRoute key="project" path="/projects/:name/" component={ProjectDescription} />
            <AuthorisedRoute key="resume" path="/resume/" component={Resume} />
            <AuthorisedRoute key="home" path="/" component={Home} />
            <Route component={NotFound} />
        </Switch>
    )
}

export default Router;
