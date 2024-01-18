'use client';

import React, { useState, useEffect } from "react";
import Card from "./BuyerCard";
import Buyer from './Buyer';
import Seller from './Seller';
import Addproduct from './AddProduct';
import AddProfile from "./AddProfile";
import Transactions from "./Transactions";

const Content = ({ option }) => {

  const [heading, setHeading] = useState('Dashboard');

  useEffect(() => {
    setHeading(option);
  }, [])

  return (
    <>
      <main className="flex-1 p-6 bg-content-bg min-h-screen ">
        {/* <div className="m-3">
          <h2 className="text-2xl font-semibold text-white">{heading}</h2>
          <p className="text-gray-300">Welcome to the {option} Dashboard!</p>
        </div> */}

        {option == "Buyer" && <Buyer />}
        {option == "Seller" && <Seller />}
        {option == "Addproduct" && <Addproduct />}
        {option == "AddProfile" && <AddProfile />}
        {option == "Transactions" && <Transactions />}
      </main>
    </>
  );


}

export default Content;