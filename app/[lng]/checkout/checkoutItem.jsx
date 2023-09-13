"use client";

import React from 'react';
import CartCard from '../cart/CartCard';
import { useSelector } from 'react-redux';

const checkoutItem = () => {

    const cartItems = useSelector((store) => store.cart.items)
    console.log("cartitem", cartItems)

    return (
        <div className="bg-primary-black overflow-hidden top-0 left-0 w-full h-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
                {cartItems.map((item, index) => {
                    return (<CartCard {...item} />);
                })}
            </div>
        </div>
    )
}

export default checkoutItem;