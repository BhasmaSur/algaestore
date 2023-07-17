"use client";

import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../utils/cartSlice';

const CartItem = () => {
    // const { items, addItem } = useItemContext();

    const cartItems = useSelector((store) => store.cart.items)
    const dispatch = useDispatch();
    console.log("redux cart item", cartItems)

    const handleClear = () => {
        dispatch(clearCart())
    }

    return cartItems?.length === 0 ? (
        <div className='flex justify-center'>
            <h1 className='font-bold text-[#ff6b81] m-5'>No Item in the cart</h1>
        </div>
    ) : (
        <div className='flex flex-col items-center gap-4'>
            <div className="flex flex-wrap justify-center gap-4 px-5">
                {cartItems.map((item, index) => {
                    return (<CartCard {...item} />);
                })}
            </div>
            <div>
            <button class="bg-red-500 hover:bg-hover-600 text-white font-bold py-3 px-6 rounded m-4"
            onClick={handleClear}
            >
                Clear Cart
            </button>
            <button class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded m-4"
            
            >
                Proceed
            </button>
            </div>
        </div>
    );
}

export default CartItem;