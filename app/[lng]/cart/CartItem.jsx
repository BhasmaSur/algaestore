'use client';

import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import CartCard from './CartCard';
import { useDispatch } from 'react-redux';
import { clearCart } from '../../utils/cartSlice';
import { useRouter } from 'next/navigation';
<<<<<<< HEAD


=======
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd

const CartItem = ({cartItems}) => {
  const handleClear = () => {
    localStorage.clear();
    window.location.reload();
  };

  const router = useRouter();

<<<<<<< HEAD
    const router = useRouter();

    return cartItems?.length === 0 ? (
        <div className='flex justify-center'>
            <h1 className='font-bold text-[#ff6b81] m-5'>No Item in the cart</h1>
        </div>
    ) : (
        <div className='flex flex-col items-center gap-4 justify-center'>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-5">
                {cartItems.map((item, index) => {
                    return (<CartCard {...item} />);
                })}
            </div>
            <div className='flex justify-center items-center'>
                <button class="bg-red-500 hover:bg-hover-600 text-white font-bold py-3 px-6 rounded m-4"
                    onClick={handleClear}
                >
                    Clear Cart
                </button>
                <button onClick={() => router.push('/checkout')} class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded m-4"

                >
                    Proceed
                </button>
            </div>
        </div>
    );
}
=======
  return cartItems?.length === 0 ? (
    <div className="flex justify-center">
      <h1 className="font-bold text-[#ff6b81] m-5">No Item in the cart</h1>
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
          Clear Cart
        </button>
        <button
          onClick={() => router.push('/checkout')}
          class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded m-4"
        >
          Proceed
        </button>
      </div>
    </div>
  );
};
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd

export default CartItem;
