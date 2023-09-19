import React from "react";
import { styled } from "styled-components"

const Component = styled.div`
    p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`

export default function CartEmptyMessage() {
    return (
        <Component>
            <p>Faça seu pedido!</p>
        </Component>
    )
}