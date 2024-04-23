import React from "react";
import PreviousOrderCard from "./PreviousOrderCard";

const PreviousOrders = ({ orderHistory }) => {
  return (
    <>
      {orderHistory.map((order, index) => {
        return <PreviousOrderCard key={index} order={order} />;
      })}
    </>
  );
};

export default PreviousOrders;
