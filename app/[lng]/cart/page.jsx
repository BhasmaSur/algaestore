"use client";

import React, { useState, useContext } from 'react';
import { ItemContext, ItemProvider } from '../../utils/ItemContext';
import CartItem from './CartItem';
import { useRouter } from 'next/navigation';
import ItemStore from '../../utils/ItemContext';
import { useSelector } from 'react-redux';
import { Provider } from 'react-redux';
import store from '../../utils/store';

const page = () => {

    const router = useRouter();
    // const {items} = router?.query;

    // const parsedItems = items ? JSON.parse(items) : [];
    // console.log("Item in the cart", parsedItems)

    return (
        <div className="bg-primary-black min-h-screen">
            <div className='flex justify-center'>
                <h1 className='font-bold text-white m-8'>CART</h1>
            </div>
            <Provider store={store}>
                <CartItem />
            </Provider>
        </div>
    );
}

export default page;