import React, { useContext } from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import StoreData from './StoreData';
import { ItemProvider } from '../../utils/ItemContext';
import { ItemContext } from '../../utils/ItemContext';
import StoreHeader from './StoreHeader';

const Store = () => {


  return (
    <div className="bg-primary-black overflow-hidden top-0 left-0 w-full h-full">
      {/* <div className='flex p-5 justify-between'>
          <Link href="/">
            <img
              src="/arrow-back.png"
              alt="Store"
              className="w-10 h-10"
            />
          </Link>
          <h1 className='font-bold text-white'>Welcome to the Store</h1>
          <div>
            <h1 className='font-bold text-white'>{items.length}</h1>
          <img
            src="/cart.png"
            alt="Cart"
            className="w-10 h-10"
          />
          </div>
        </div> */}
      <ItemProvider>
        <StoreHeader />
        <StoreData />
      </ItemProvider>
    </div>


  );
};

export default Store;