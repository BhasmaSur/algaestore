'use client';

import React from 'react';
import { Provider } from 'react-redux';
import CheckoutItem from './CheckoutItem';
import store from '../../utils/store';

const page = () => {
  return (
    <div className="bg-primary-black min-h-screen">
      <Provider store={store}>
        <CheckoutItem />
      </Provider>
    </div>
  );
};

export default page;
