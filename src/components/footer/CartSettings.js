import React from "react";
import {styled} from "styled-components"
import SettingsAddress from "./SettingsAddress"
import SettingsPayment from "./SettingsPayment"

const Component = styled.div`

`

function CartSettings() {
    return(
        <Component>
            <SettingsAddress />
            <SettingsPayment />
        </Component>
    )
}

export default CartSettings;