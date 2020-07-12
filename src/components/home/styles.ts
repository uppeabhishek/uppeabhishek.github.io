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

    .about-me {
        overflow-x: auto;

        .languages {
            @media (max-width: 1000px) {
                font-size: 4vw;
            }

            font-size: 2vw;
            font-weight: 700;

            .im {
                color: white;
                margin-right: 10px;
            }

            .language {
                color: ${(props) => props.theme.primaryColor};
            }
        }

        .name {
            @media (max-width: 1000px) {
                font-size: 8vw;
            }
            
            color: ${(props) => props.theme.primaryColor};
            font-weight: 900;
            font-size: 5vw;
        }

        img.profile-image {
            display: block;
            margin: auto;
            border-radius: 50%;
            justify-content: center;
            border: 5px solid grey;
        }
    }
`;
