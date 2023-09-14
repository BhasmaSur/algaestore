'use client';

import React, { useState, useEffect } from 'react';
import CheckourCard from './CheckoutCard';
import { useSelector } from 'react-redux';
import { useRouter, useSearchParams } from 'next/navigation';
import { getUserDetailsFromCookie } from '../../services/auth';
import { USER_BUYER_ROLE } from '../../constants/userConstants';

const CheckoutItem = () => {
  // const cartItems = useSelector((store) => store.cart.items);
  // console.log("cartitem", cartItems)
  const searchParams = useSearchParams()
  const cartItems = JSON.parse(localStorage.getItem('cart-items'))
  const router = useRouter();

  const [total, setTotal] = useState(0);
  const [isLoggin, setIsLoggedIn] = useState(false);

  const calculateTotal = () => {
    let totalPrice = 0;

    cartItems[0].map((item, index) => {
      totalPrice = totalPrice + item.price;
    });

    setTotal(totalPrice);
  };

  useEffect(() => {
    const userDetails = getUserDetailsFromCookie();
    if (userDetails && userDetails.role === USER_BUYER_ROLE) {
      setIsLoggedIn(true);
      calculateTotal();
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleBack = () => {
    router.push('/cart');
  };

  return (
    <div className="bg-primary-black overflow-hidden top-0 left-0 w-full h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
        {cartItems[0].map((item, index) => {
          return <CheckourCard {...item} />;
        })}
      </div>
      <div className="text-white">
        <h2>Total : ${total}</h2>
      </div>
      <div>
        <button
          class="bg-red-500 hover:bg-hover-600 text-white font-bold py-3 px-6 rounded m-4"
          onClick={handleBack}
        >
          Back
        </button>
        <button
          onClick={() => router.push('/checkout')}
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded m-4"
        >
          Place Order
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
