import React from "react";
import { styled } from "styled-components"

const Component = styled.label`
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    margin: 1rem;
    >span {
        font-size: 0.9rem;
    }
    >input {
        width: 30%;
        background-color: transparent;
        border: 1px solid grey;
        border-radius: 5px;
    }
`

function ResidueArea() {
    return (
        <Component>
            <span>Tropo para:</span>
            <input type="number"></input>
        </Component>
    )
}

export default ResidueArea;