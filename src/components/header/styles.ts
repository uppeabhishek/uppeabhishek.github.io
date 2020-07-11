import styled from "styled-components/macro";

export const headerHeight = "70";

export const Styles = styled.header`
    background-color: ${(props) => props.theme.primaryBackgroundColor};
    display: flex;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 10;
    max-width: 100%;
    overflow: auto;
    height: ${headerHeight}px;
    overflow-x: auto;
    color: white;
    transition: all 1s ease-in-out;

    .title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.5rem;

        .main-name {
            margin-right: 10px;
        }
    }

    .nav-links {
        transition: left 0.5s ease-in-out;
    }

    a {
        margin: 0 20px;
        text-decoration: none;
        justify-content: center;
        display: flex;
        align-items: center;
        padding: 20px 0;
        color: white;
    }

    a.active {
        border-bottom-width: 4px;
        border-bottom-color: ;
        border-bottom-style: solid;
        color: ${(props) => props.theme.primaryColor};
    }

    a:hover {
        color: ${(props) => props.theme.primaryColor};
    }
`;
