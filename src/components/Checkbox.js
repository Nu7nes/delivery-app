import React, { useState } from "react";
import { styled } from "styled-components";
import { BiCheck } from "react-icons/bi";

const Component = styled.li`
    list-style: none;
    margin-top: 0.5rem;
    padding-left: 1rem;
    border-radius: 5px;
    border: 1px solid black;
    overflow: hidden;
    >label{
        position: relative;
    }
    
    >label>input{
        position: absolute;
        width: 0;
        top: 0;
        right: 0;
    }
    >label>span{
        width: 15vw;
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        color: transparent;
    }
    >label>input:checked ~ span{
        font-size: 1.5rem;
        color: white;
        display: grid;
        place-content: center;
        background-color: green;
    }
    /* >label>input:checked ~ span::after{
        content: "Ok";
        color: white;
        display: grid;
        place-content: center;
    } */
`

function Checkbox({ data, index, onHandleChecked }) {

    const [isChecked, setIsChecked] = useState(true)

    function toogleCheckbox() {
        setIsChecked(!isChecked)
        onHandleChecked(isChecked, index)
    }

    return (
        <Component>
            <label>
                <p>{data}</p>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toogleCheckbox} />
                <span><BiCheck/></span>
            </label>
        </Component>
    )
}

export default Checkbox