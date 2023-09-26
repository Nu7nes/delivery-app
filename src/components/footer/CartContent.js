import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components";
import CartItem from "./Cart/CartContent/CartItem";
import CartResume from "./Cart/CartResume";
import CartSettings from "./Cart/CartSettings";
import CartEmptyMessage from "./Cart/CartContent/CartEmptyMessage";

const Component = styled.div`
        width: 100%;
        >div{
            /* opacity: 0; */
            height: 60vh;
            margin-top: 40px;
            padding-bottom: 40px;
            background-color: var(--secondColor);
            transition: 800ms;
            /* border-radius: 30px; */
            overflow-y: scroll;
            /* box-sizing: border-box; */
            z-index: 0;
            >h4{
                padding: 0.5rem 2rem;
                border-bottom: 1px solid #d1d1d1;
            }
        }
`

function CartContent({ isActive, onToggleCart }) {

    const cartState = useSelector(state => state.cartContent.items)

    if (!cartState[0] && isActive) {
        return (
            <Component>
                <CartEmptyMessage />
            </Component>
        )
    }

    return (
        <Component>
            {isActive ?
                <div>
                    <h4>Confira seu pedido!</h4>
                    {cartState.map((item, index) => (<CartItem key={index} index={index} cartData={JSON.parse(item)} />))}
                    <CartSettings />
                    <CartResume onToggleCart={onToggleCart} />
                </div>
                : ''}
        </Component>
    )
}

export default CartContent;