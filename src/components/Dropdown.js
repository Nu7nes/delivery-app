import React, { useState } from "react";
import DropdownLib from 'react-dropdown';
import { DropdownStyled } from "./Dropdown.styled.js";


function Dropdown({ options, placeholder, defaultValue, onOptionChangeHandler }) {
    // const [selected, setSelected] = useState('');


    // function onOptionChangeHandler(event) {
    //     setSelected(event.value);
    // }

    return (
        <DropdownStyled className="selectArea">
            <DropdownLib
                className='selectInput'
                options={options}
                onChange={onOptionChangeHandler}
                placeholder={placeholder}
                value={defaultValue}
            />
        </DropdownStyled>
    )
}

export default Dropdown;