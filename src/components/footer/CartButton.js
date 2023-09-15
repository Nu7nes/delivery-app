import React from "react";
import { styled } from "styled-components"
import { BiX, BiCart } from "react-icons/bi";


const Component = styled.button`
    position: absolute;
    width: 65px;
    height: 65px;
    background-color: var(--contrastColor);
    border: 5px solid var(--bgColor);
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -27px;
    z-index: 10;

    >div {
        transition: 800ms ease-in-out;
        font-size: 2.1em;
        display: flex;
        align-items: center;
        border-radius: 20px;
        color: #ffffff !important;
    }

    >i {
        position: absolute;
        inset: 0;
    }

    >i:nth-child(1):before {
        content: '';
        position: absolute;
        top: 22px;
        left: -23px;
        width: 20px;
        height: 20px;
        background-color: transparent;
        border-top-right-radius: 20px;
        box-shadow: 3px -6px var(--bgColor);
    }

    >i:nth-child(1)::after {
        content: '';
        position: absolute;
        top: 22px;
        right: -23px;
        width: 20px;
        height: 20px;
        background-color: transparent;
        border-top-left-radius: 20px;
        box-shadow: -3px -6px var(--bgColor);
    }

    >i:nth-child(2)::before {
        content: '';
        position: absolute;
        top: 1px;
        left: -15px;
        width: 18px;
        height: 15px;
        background-color: transparent;
        border-top-right-radius: 20px;
        box-shadow: 1px -8px var(--bgColor);
        transform: scaleY(-100%);
    }

    >i:nth-child(2)::after {
        content: '';
        position: absolute;
        top: 1px;
        right: -15px;
        width: 18px;
        height: 15px;
        background-color: transparent;
        border-top-left-radius: 20px;
        box-shadow: -1px -8px var(--bgColor);
        transform: scaleY(-100%);
    }
`

function CartButton({ isToggled, onToggleCart }) {

    function IconCart() {
        if (isToggled) {
            return (<BiX />)
        } else {
            return (<BiCart />)
        }
    }

    return (
        <Component onClick={onToggleCart}>
            <i></i>
            <i></i>
            <div><IconCart /></div>
        </Component>
    )

}

export default CartButton;