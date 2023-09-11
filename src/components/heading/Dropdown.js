import React, { useEffect, useState } from "react";
import DropdownLib from 'react-dropdown';
import "./Dropdown.css"

import { BiCurrentLocation } from "react-icons/bi";
// import 'react-dropdown/style.css';


function Dropdown(props) {
    const [selected, setSelected] = useState('');
    const [options, setOptions] = useState([]);


    useEffect(() => {
        const address = props.client.address;
        setOptions(address);
    }, [])


    function onOptionChangeHandler(event) {
        setSelected(event.value);
    }

    const defaultOption = options[0];

    return (
        <div className="selectArea">
            <div>
                <BiCurrentLocation />
            </div>
            <DropdownLib
                className='selectInput'
                options={options}
                onChange={onOptionChangeHandler}
                value={defaultOption}
                placeholder="Select an option" />
        </div>
    )
}

export default Dropdown;