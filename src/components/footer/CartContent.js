import React from "react";
import { styled } from "styled-components";

const Component = styled.div`
    >div{
        /* opacity: 0; */
        width: 100%;
        height: 70vh;
        background-color: var(--secondColor);
        transition: 800ms;
        border-radius: 30px;
        z-index: 0;
    }
`

function CartContent(props) {



    return (
        <Component>
            {props.isActive ? <div></div> : ''}
        </Component>
    )
}

export default CartContent;