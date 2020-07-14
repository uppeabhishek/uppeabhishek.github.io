import styled from "styled-components/macro";

export const Styles = styled.div`

    height: 100%;
    
    display: grid;
    grid-template-areas: 'auto auto';
    grid-column-gap: 0px;
    grid-row-gap: 0px;

    .aboutme {
        font-size: 30px;
        font-weight: 900;
    }

    .skill {
        height: 35px;
        font-weight: 900;
        color: white;
        margin: 0 0 1em 0;

        .name {
            background-color: ${(props) => props.theme.primaryColor};
            width: 20%;
        }

        .bar {
            background-color: #80808038;
            width: 80%;

            .color {
                background-color: #36b7da;
                transition: all 0.7s ease-in-out;
                height: 100%;
            }
        }
    }
`;
