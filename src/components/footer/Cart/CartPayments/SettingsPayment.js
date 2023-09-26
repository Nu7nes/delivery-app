import React, { useState } from "react";
import { styled } from "styled-components"
import Dropdown from "../../../Dropdown";
import ResidueArea from "./ResidueArea";

const Component = styled.div`
    padding: 0 1rem;
`

function SettingsPayment() {

    const options = ['Dinheiro', 'Cartão', 'PIX']
    const [selected, setSelected] = useState(options[0]);


    function onOptionChangeHandler(event) {
        setSelected(event.value);
    }

    return (
        <Component>
            <span>Forma de pagamento</span>
            <Dropdown
                options={options}
                defaultValue={options[0]}
                onOptionChangeHandler={onOptionChangeHandler}
            />
            {selected === options[0] ?
                <ResidueArea />
                : ''}

        </Component>
    )
}

export default SettingsPayment;