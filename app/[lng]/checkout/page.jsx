"use client";

import React from 'react';
import { Provider } from 'react-redux';
import checkoutItem from './checkoutItem';
import store from '../../utils/store';

const page = () => {



    return (
        <div className="bg-primary-black min-h-screen">
            <Provider store={store}>
                <checkoutItem />
            </Provider>
        </div>
    )
}

export default page;