import React, { FunctionComponent, Suspense } from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components/macro";
import { BrowserRouter } from "react-router-dom";
import { theme } from "./theme";
import Header from "./components/header";
import SocialLinks from "./components/socialLinks";
import { headerHeight } from "./components/header/styles";
import { Router } from "./components/routes/router";
import { Loader } from "./components/loader";
import PageName from "./components/pagename";

const GlobalStyle = createGlobalStyle`
    // @keyframes pulse {
    //     0% {
    //     background-color: #61dafb;
    //     }
    //     100% {
    //     background-color: white;
    //     }
    // }
    
    body {
        color: #616161;
        margin: 0;
        width: 100vw;
        height: 100vh;
        font-family: 'Roboto', sans-serif;
        animation: pulse 3s ease-in-out;

        .page-title {
            font-size: 3em;
            text-align: center;
            margin-bottom: 50px;
            color: ${(props) => props.theme.primaryColor};
        }
    }

    #root {
      height: 100%;
    }

    .d-flex {
        display: flex;
    }

    .w-100 {
        width: 100%;
    }

    .h-100 {
        height: 100%;
    }

    .justify-center {
        justify-content: center;
    }

    .align-center {
        align-items: center;
    }

    .center-items {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .flex-col {
        display: flex;
        flex-direction: column;
    }

    .cursor-pointer {
        cursor: pointer;
    }

    .overflow-auto {
        overflow: auto;
    }

    a {
        text-decoration: none;
        color: ${(props) => props.theme.primaryColor};
    }
`;

const Styles = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;

    main {
        color: #dadde1;
        background-color: ${(props) => props.theme.primaryBackgroundColor};
        position: relative;
        flex: 1;
        margin-top: ${headerHeight}px;
    }

    .slick-prev,
    .slick-next {
        z-index: 1000;
        background-color: ${(props) => props.theme.primaryColor};
        width: 30px;
        height: 30px;
        border-radius: 10px;
    }

    .slick-prev {
        left: 0;
    }

    .slick-next {
        right: 0;
    }
`;

const App: FunctionComponent = () => (
    <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Styles>
            <Suspense fallback={Loader}>
                <BrowserRouter>
                    <Header />
                    <main>
                        <Router />
                    </main>
                </BrowserRouter>
            </Suspense>
            <div>
                <SocialLinks />
            </div>
        </Styles>
    </ThemeProvider>
);

export default App;
