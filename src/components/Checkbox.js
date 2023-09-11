import React, { useState } from "react";
import { styled } from "styled-components";

const Component = styled.li`
    display: flex;
    justify-content: space-between;
    margin-top: 0.5rem;
    border: 1px solid black;
    overflow: hidden;
`

function Checkbox({ data, index, onHandleChecked }) {

    const [isChecked, setIsChecked] = useState(true)

    function toogleCheckbox() {
        setIsChecked(!isChecked)
        onHandleChecked(isChecked, index)
    }

    return (
        <Component>
            <p>{data}</p>
            <label>
                <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={toogleCheckbox} />
                <span></span>
            </label>
        </Component>
    )
}

export default Checkbox