import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import CartItem from "./CartItem";
import CartResume from "./CartResume";

const Component = styled.div`
        width: 100%;
        >div{
            /* opacity: 0; */
            height: 60vh;
            margin-top: 40px;
            padding-bottom: 40px;
            background-color: var(--secondColor);
            transition: 800ms;
            border-radius: 30px;
            overflow-y: scroll;
            /* box-sizing: border-box; */
            z-index: 0;
        }
`

function CartContent({ isActive, onToggleCart }) {

    const cartState = useSelector(state => state.cartContent.items)
    // if(cartState[0]) console.log('existe');
    // else console.log('nao existe');

    return (
        <Component>
            {isActive ?
                <div>
                    {cartState.map((item, index) => (<CartItem key={index} index={index} cartData={JSON.parse(item)} />))}
                    <CartResume onToggleCart={onToggleCart} />
                </div>
                : ''}
        </Component>
    )
}

export default CartContent;