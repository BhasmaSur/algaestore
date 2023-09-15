'use client';

import React, { useContext, useState } from 'react';
import 'tailwindcss/tailwind.css';
import StoreData from './StoreData';
import store from '../../utils/store';
import { Provider } from 'react-redux';

const page = () => {
  const [storeItem, setItem] = useState([]);

  return (
    <div className="bg-primary-black overflow-hidden top-0 left-0 w-full h-full">
<<<<<<< HEAD
      <Provider store = {store}>
        <StoreData storeItem = {storeItem} setItem={setItem}/>
=======
      <Provider store={store}>
        <StoreData storeItem={storeItem} setItem={setItem} />
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd
      </Provider>
    </div>
  );
};

export default page;
