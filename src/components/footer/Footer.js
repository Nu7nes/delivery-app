import React, { useState } from "react";
import './Footer.css';
import IconsLinks from "./IconLinks";
import { BiPlus, BiCart } from "react-icons/bi";


function Footer(props) {

    const [toggler, setToggler] = useState(false)

    function toggleCart() {
        let state = !toggler
        setToggler(state);
    }

    function IconCart() {
        if (toggler) {
            return (<BiPlus />)
        } else {
            return (<BiCart />)
        }
    }

    return (
        <footer className={toggler ? 'activeFooter' : ''}>
            <span className={toggler ? 'activeFooter' : ''}></span>

            <button onClick={toggleCart} className={toggler ? 'cartToggle activeMove' : 'cartToggle'}>
                <i></i>
                <i></i>
                <div className={toggler ? 'activeRotate' : ''}><IconCart></IconCart></div>
            </button>
            <div className={toggler ? 'cartItems show' : 'cartItems'} ></div>

            <div className="menu">
                <IconsLinks/>
            </div>
        </footer>
    )
}

export default Footer;