import React from 'react';

const TransactionCard = ({ itemList }) => {
  return (
    <>
      {itemList &&
        itemList.map((item) => {
          return (
            <div class="max-w-sm rounded overflow-hidden shadow-lg">
              <div class="px-6 py-4">
                <div class="font-bold text-xl mb-2">{item.productName}</div>
                <p class="text-base">Price : {item.price}</p>
              </div>
              {/* <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div> */}
            </div>
          );
        })}
    </>
  );
};

export default TransactionCard;
