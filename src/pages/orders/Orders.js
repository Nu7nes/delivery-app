import React from "react";

function Orders (props) {
    return (
        <div className={props.active === 2
            ? 'pageActive' : ''}>
            <h1>ORDERS</h1>
        </div>
    )
}

export default Orders;