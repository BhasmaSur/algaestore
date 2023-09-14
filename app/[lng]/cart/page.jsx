"use client";

import React, { useState, useContext } from 'react';
import CartItem from './CartItem';
import { useRouter } from 'next/navigation';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { useSearchParams } from 'next/navigation'
const page = () => {
    const searchParams = useSearchParams()
    const cartItems = JSON.parse(localStorage.getItem('cart-items'))

    console.log("Item in the cart", cartItems)

    return (
        <div className="bg-primary-black min-h-screen">
            <div className='flex justify-center'>
                <h1 className='font-bold text-white m-8'>CART</h1>
            </div>
            <Provider store={store}>
                <CartItem cartItems={cartItems ? cartItems : []}/>
            </Provider>
        </div>
    );
}

export default page;