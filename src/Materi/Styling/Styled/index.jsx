import React from "react";
import styled from 'styled-components';

const Button = styled.button`
    border: 2px solid blue;
    background-color: white;
    color: black;
    padding: 14px 30px; 
    font-size:  16px;
    cursor: pointer
    border-color: #2196F3;
    color: dodgerblue;
    border-radius: 4px;

    &:hover {
        background: #2196F3;
        color: white;
    }
`;

export default class Styled extends React.Component {

    render() {
        return(
            <div>
                <Button> Go Eduwork </Button>
            </div>
        )
    }
}