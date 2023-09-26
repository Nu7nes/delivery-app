import React from "react";
import {styled} from "styled-components"
import SettingsAddress from "./CartAddress/SettingsAddress"
import SettingsPayment from "./CartPayments/SettingsPayment"

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