"use client";

import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';
import { Provider } from 'react-redux';
import store from '../../utils/store';
import { useSearchParams } from 'next/navigation'
import { getLanguageCookie } from '../../utils/loginUtils';
import { useTranslation } from '../../i18n';

const page = () => {
    const searchParams = useSearchParams()
    const [languageObject, setLanguageObject] = useState({});

    useEffect(() => {
      getLanguageData();
    }, []);
  
    const getLanguageData = async () => {
      const lng = getLanguageCookie();
      const { t } = await useTranslation(lng);
      setLanguageObject({
        clearCart: t('clearCart'),
        proceed: t('proceed'),
        cart: t('cart'),
        noItemInCart : t('noItemInCart')
      });
    };
    const cartItems = JSON.parse(localStorage.getItem('cart-items'))

    return (
        <div className="bg-primary-black min-h-screen">
            <div className='flex justify-center'>
                <h1 className='font-bold text-white m-8'>{languageObject.cart}</h1>
            </div>
            <Provider store={store}>
                <CartItem cartItems={cartItems ? cartItems : []} languageObject={languageObject}/>
            </Provider>
        </div>
    );
}

export default page;