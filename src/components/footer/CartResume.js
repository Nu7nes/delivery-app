import React from "react";
import { styled } from "styled-components"
import { FormatPrices } from "../Formatation";
import Button from "../Button.styled"
import { useDispatch, useSelector } from "react-redux";
import data from "../../data/menu.json"
import Order from "./Order";
import { add } from "../../redux/slices/orderSlice";
import { endOrder } from "../../redux/slices/cartSlice";

const Component = styled.div`
    width: 100vw;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    /* background-color: ; */
    border-top: 2px solid #d1d1d1;
    box-sizing: border-box;
    background-color: #d1d1d1;
    >div{
        display: flex;
        justify-content: space-between;
    }
`

function CartResume({ onToggleCart }) {

    const dataCart = useSelector(state => state.cartContent.items)
    const dataList = data.menu
    const dispatch = useDispatch()

    function getTotalCart() {
        let totalPrice = 0
        dataCart.filter(item => {
            let parsed = JSON.parse(item)
            dataList.map(li => {
                if (parsed.id === li.id) {
                    totalPrice += li.price
                }
            })
        })
        return totalPrice
    }

    function closeOrder() {
        const order = new Order(dataCart)
        dispatch(add(order))
        dispatch(endOrder())
        onToggleCart()
    }

    return (
        <Component>
            <div>
                <p>Total: </p>
                <p>{FormatPrices(getTotalCart())}</p>
            </div>
            <Button onClick={closeOrder}>Fechar pedido!</Button>
        </Component>
    )
}

export default CartResume;