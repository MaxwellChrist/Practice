import React from "react";

const Order = (props) => {
    const {currentOrder} = props
    return (
        <>
            <h1>My Order</h1>
            <p>Name: {currentOrder.name}</p>
            <p>Email: {currentOrder.email}</p>
            <p>Amount of Stars: {currentOrder.count}</p>
            <p>Delivery Expedited: {currentOrder.deliveryCharge ? "Yes" : "No"}</p>
        </>
    )
}

export default Order