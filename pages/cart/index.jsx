import React, { useState, useContext } from 'react';
import { ItemContext, ItemProvider } from '../../utils/ItemContext';
import CartItem from './CartItem';

const Cart = () => {


    return (
        <div>
            <h1>Cart</h1>
            <ItemProvider>
                <CartItem />
            </ItemProvider>
        </div>
    );
}

export default Cart;