import React, { FunctionComponent, Suspense } from "react";
import { ThemeProvider } from "styled-components/macro";
import { GlobalStyle, Styles } from "./AppStyles";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import Header from "./components/header";
import SocialLinks from "./components/socialLinks";
import { Router } from "./components/routes/router";
import { Loader } from "./components/loader";
import MobileHeader from "./components/header/MobileHeader";

const App: FunctionComponent = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Styles>
                <Suspense fallback={Loader}>
                    <BrowserRouter basename={process.env.PUBLIC_URL}>
                        <Header />
                        <MobileHeader />
                        <main>
                            <Router />
                        </main>
                    </BrowserRouter>
                </Suspense>
                <footer>
                    <SocialLinks />
                </footer>
            </Styles>
        </ThemeProvider>
    );
};

export default App;
