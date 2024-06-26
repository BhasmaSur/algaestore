'use client';

import React from 'react';
import CartCard from './CartCard';
import { useRouter } from 'next/navigation';

const CartItem = ({cartItems, languageObject}) => {
 
  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  const router = useRouter();

  return cartItems?.length === 0 ? (
    <div className="flex justify-center">
      <h1 className="font-bold text-[#ff6b81] m-5">{languageObject.noItemInCart}</h1>
    </div>
  ) : (
    <div className="flex flex-col items-center gap-4 justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
        {cartItems.map((item, index) => {
          return <CartCard {...item} itemIndex={index}/>;
        })}
      </div>
      <div className="flex justify-center items-center">
        <button
          class="bg-red-500 hover:bg-hover-600 text-white font-bold py-3 px-6 rounded m-4"
          onClick={handleClear}
        >
          {languageObject.clearCart}
        </button>
        <button
          onClick={() => router.push('/checkout')}
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded m-4"
        >
          {languageObject.proceed}
        </button>
      </div>
    </div>
  );
};

export default CartItem;
