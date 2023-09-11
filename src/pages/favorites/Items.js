import React from "react";

function onTotalPrice(props) {
    let totalPrice = 0
    props.lastOrder.map(item => {
        totalPrice += item.price
        return totalPrice
    })
    return totalPrice
}



function ItemsLastOrder(props) {
    return (
        <div>
            <h2>Repetir ultimo pedido?</h2>
            <ul>
                {props.lastOrder.map((item, index) => {
                    return (
                        <li key={index}>{item.name}</li>
                    )
                })}
            </ul>
            <h5>{'R$ ' + onTotalPrice(props) + ',00'}</h5>

        </div >
    )
}

function ItemsTopFive(props) {
    return (
        <div>
            <h2>Seu top 5</h2>
            <ul>
                {props.favorites.map((item, index) => {
                    if (index < 5) {
                        return (
                            <li key={index}>{item.name}</li>
                        )
                    }
                })}
            </ul>
        </div>
    )
}

function Items(props) {
    return (
        <div className="favCards">
            <ItemsLastOrder lastOrder={props.favs.lastOrder}></ItemsLastOrder>
            <ItemsTopFive favorites={props.favs.favorites}></ItemsTopFive>
        </div>
    )
}

export default Items;