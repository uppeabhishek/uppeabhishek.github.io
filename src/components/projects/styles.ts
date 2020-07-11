import styled from "styled-components/macro";

export const Styles = styled.div`
    flex: 1;
    max-width: 70%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding: 40px 15% 0 15%;

    .filters {
        justify-content: space-between;
        margin-bottom: 40px;

        .each-filter {
            width: 100%;
            height: 40px;
            border: 1px solid transparant;
            border-radius: 4px;
            padding: 5px 10px;
            font-size: 16px;
            cursor: pointer;
        }

        .each-filter.active {
            color: white;
            background-color: ${(props) => props.theme.primaryColor};
        }
    }
`;

export const ProjectStyles = styled.div`
    display: flex;
    flex-wrap: wrap;

    .project {
        transform: rotateY(0deg);
        transform-style: preserve-3d;
        transition-property: transform;
        transition-duration: 1s;
        cursor: pointer;
        height: 200px;
        border: 1px solid grey;
        flex: 1 0 33%;

        .img {
            width: 100%;
            height: 100%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
    }

    .project:hover {
        opacity: 0.7;
    }
`;
