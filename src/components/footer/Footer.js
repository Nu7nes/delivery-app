import React, { useEffect, useState } from "react";
import { styled } from "styled-components"
// import './Footer.css';
import IconsLinks from "./IconLinks";
import CartContent from "./CartContent";
import CartButton from "./CartButton";

const Component = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    /* height: 100vh; */
    position: fixed;
    bottom: 0;
    background-color: var(--secondColor);
    border-radius: 20px 20px 0 0;
    border-top: 6px solid var(--bgColor);
    z-index: 1;

    >span {
        width: 100%;
        height: 100vh;
        background: rgb(241, 244, 226);
        background: linear-gradient(180deg, rgba(241, 244, 226, 0) 0%, rgba(255, 254, 255, 1) 27%);
        opacity: 0;
        position: absolute;
        top: -10%;
        transition: opacity 800ms;
    }
`

function Footer() {

    const [toggler, setToggler] = useState(false)
    // useEffect(()=>{console.log(toggler)},[toggler])

    function toggleCart() {
        setToggler(!toggler);
    }

    return (
        <Component>
            {/* <span className={toggler ? 'activeFooter' : ''}></span> */}
            <CartButton onToggleCart={toggleCart} isToggled={toggler} />
            <CartContent isActive={toggler} />
            <IconsLinks />
        </Component>
    )
}

export default Footer;