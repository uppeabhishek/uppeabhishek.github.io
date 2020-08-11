import styled from "styled-components/macro";

export const Styles = styled.button`
    border: 1px solid ${(props) => props.theme.primaryColor};
    color: ${(props) => props.theme.primaryColor};
    cursor: pointer;
    height: 40px;
    padding: 10px;
    font-size: 14px;
    font-weight: bold;

    :hover {
        color: white;
        background-color: ${(props) => props.theme.primaryColor};
    }
`;
