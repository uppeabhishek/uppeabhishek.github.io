import styled from "styled-components/macro";

// @ts-ignore
import homePage from "../../static/homePage.jpg";

export const Styles = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url("${homePage}");
    background-repeat: no-repeat;

    @keyframes caret {
        0%, 100% {
          opacity: 0;
        }
        50% {
          opacity: 1;
        }
    }
      
    .language::after {
        content: "  |";
        position: absolute;
        animation: caret infinite;
        animation-duration: 1s;
        animation-timing-function: steps(1, end);
    }

    .about-me {
        overflow-x: auto;

        .languages {
            
            @media (max-width: 1000px) {
                font-size: 3vw;
            }

            @media (max-width: 600px) {
                font-size: 4vw;
            }

            font-size: 1.5vw;
            font-weight: 700;

            .im {
                color: white;
                margin-right: 10px;
            }

            .language {
                color: ${(props) => props.theme.primaryColor};
                min-height: 40px;
            }
        }

        .name {
            @media (max-width: 1000px) {
                font-size: 6vw;
            }

            @media (max-width: 600px) {
                font-size: 8vw;
            }
            
            color: ${(props) => props.theme.primaryColor};
            font-weight: 900;
            font-size: 4vw;
        }

        img.profile-image {
            display: block;
            margin: auto;
            height: 20rem;
            width: 20rem;
            border-radius: 50%;
            justify-content: center;
            border: 5px solid grey;
        }
    }
`;
