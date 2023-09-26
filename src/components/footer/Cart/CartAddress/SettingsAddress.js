import React, { useState } from "react";
import { styled } from "styled-components"
import Dropdown from "../../../Dropdown"
import Switch from "react-switch";

const Component = styled.form`
    padding: 1rem;
    border-top: 1px solid #d1d1d1;
    >label {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.5rem;
    }
`

function SettingsAddress() {

    const [checked, setChecked] = useState(false);

    function handleChange(newChecked) {
        setChecked(newChecked)
    }

    return (
        <Component>
            <label >
                <span>Retirada?</span>
                <Switch
                    onChange={handleChange}
                    checked={checked}
                    width={50}
                    height={20}
                />
            </label>
            {!checked ? <Dropdown
                options={['1', '2']}
                placeholder={'Endereço'}
            />
                : ''}
        </Component>
    )
}

export default SettingsAddress;