/**
 * This component allows authenticated user to access the protected routes and
 * redirects the unauthenticated user to login page
 */

import React, { ExoticComponent } from "react";
import { Route } from "react-router-dom";

interface PageProps {
    component: ExoticComponent;
    path: string;
}

function AuthorisedRoute(props: PageProps) {
    const { component, path } = props;

    return <Route component={component} exact={true} path={path} />;
}

export default AuthorisedRoute;
