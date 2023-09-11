import React from "react";
import { styled } from "styled-components";

const Component = styled.div`
    /* position: relative; */
    display: flex;
    flex-direction: column;
    color: #ffffff;
    /* gap: 0.3em; */
    >label {
        font-size: 0.8em;
        padding: 0.2em 1em;
    }
    >input {
        padding: 0.8em 1em;
        border: none;
        border-bottom: 1px solid #ffffff;
        background-color: #ffffff00;
        color: #ffffff;
    }
    >input::placeholder{
        color: #ffffff70;
    }
`

function TextInput({ type, sample, placeholder, onHandleChange }) {
    return (
            <Component>
                <label>{sample}</label>
                <input id={type} type={type} onChange={onHandleChange} placeholder={placeholder}></input>
            </Component>
    )
}

export default TextInput