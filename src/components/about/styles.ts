import styled, { keyframes } from "styled-components/macro";

export const Styles = styled.div`
    // display: grid;
    // grid-template-areas: "auto auto";
    // grid-column-gap: 0;
    // grid-row-gap: 0;

    margin: 40px;

    // display: flex;
    // flex-direction: column;

    .grid-container {
        display: grid;
        
        .grid-item {
            
        }

        .title {
            color: ${(props) => props.theme.primaryColor};
            text-align: center;
            font-weight: bold;
            font-size: 20px;
            margin: 20px 0;
        }

        .aboutme {
            .stack-skill {
                font-style: italic;
                color: ${(props) => props.theme.primaryColor};
            }
        }

    }
    

    // .about-skills {
    //     margin-top: 20px;
    //     display: flex;

    //     @media (max-width: 900px) {
    //         flex-direction: column;
    //         .aboutme {
    //             width: 100% !important;
    //             margin-bottom: 30px;
    //             margin-right: 0 !important;
    //         }
    //     }
        

    //     .skills {
    //         flex: 1;
    //     }
    // }
`;


interface SkillStyleInterface {
    width: number;
}

const widthAnimation = (width: number) => keyframes`
    0% {
        width: 0%;
    }
    100% {
        width: ${width}%;
    }
`

export const SkillStyle = styled.div<SkillStyleInterface>`
    display: flex;
    height: 35px;
    font-weight: 900;
    color: white;
    margin: 0 0 1em 0;

    .name {
        color:  ${(props) => props.theme.primaryBackgroundColor};
        overflow: hidden;
        text-overflow: ellipses;
        background-color: ${(props) => props.theme.primaryColor};
        width: 20%;
    }

    .bar {
        display: flex;
        background-color: #80808038;
        width: 80%;

        .color {
            background-color: ${(props) => props.theme.primaryColor};
            animation: ${props => widthAnimation(props.width)} 1s ease-in-out;
            width: ${props => props.width}%;
            filter: brightness(75%);
            height: 100%;
        }

        .percentage {
            margin: auto;
        }
    }
}`;