"use client";

import React, { useContext, useState } from 'react';
import 'tailwindcss/tailwind.css';
import Link from 'next/link';
import StoreData from './StoreData';
import { ItemProvider } from '../../utils/ItemContext';
import { ItemContext } from '../../utils/ItemContext';
import ItemStore from '../../utils/ItemContext';
import StoreHeader from './StoreHeader';
import store from '../../utils/store';
import {Provider} from 'react-redux';

const page = () => {
  const [storeItem, setItem] = useState([]);


  return (
    <div className="bg-primary-black overflow-hidden top-0 left-0 w-full h-full">
      <Provider store = {store}>
        <StoreHeader storeItem = {storeItem}/>
        <StoreData storeItem = {storeItem} setItem={setItem}/>
      </Provider>
    </div>


  );
};


export default page;