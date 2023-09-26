import React from "react";
import { useSelector } from "react-redux";
import { styled } from "styled-components"
import { BiTrash } from "react-icons/bi";
import { FormatPrices } from "../../../Formatation"
import dataMenu from "../../../../data/menu.json"
import Button from "../../../Button.styled";
import { useDispatch } from "react-redux";
import { remove } from "../../../../redux/slices/cartSlice";

const Component = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem;
    p {
        font-weight: 500;
    }
    ul {
        list-style: none;
        font-size: 0.7rem;
        margin: 0.3rem 0 0 0.5rem;
    }
    div:last-of-type {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        gap: 0.5rem;
    }
    button {
        max-width: 55px !important;
        width: 100% !important;
    }
    svg {
        font-size: 1.2rem;
    }
`

function CartItem({ cartData, index }) {

    const currentItem = dataMenu.menu.filter(item => item.id === cartData.id)[0]
    const cartState = useSelector(state => state.cartContent.items)
    const dispatch = useDispatch()

    function removeItem(i) {
        dispatch(remove(i))
    }

    return (
        <Component>
            <div>
                <p>{currentItem.flavor}</p>
                <ul>
                    {cartData.ingredients.map((item, index) => (<li key={index}> {item} </li>))}
                </ul>
            </div>
            <div>
                <h5> {FormatPrices(currentItem.price)} </h5>
                <Button onClick={ ()=>{removeItem(index)} }>
                    <BiTrash />
                </Button>
            </div>
        </Component>
    )
}

export default CartItem;