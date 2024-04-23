'use client';

import React, { useState, useEffect } from 'react';
import CheckourCard from './CheckoutCard';
import { useRouter, useSearchParams } from 'next/navigation';
import { getUserDetailsFromCookie } from '../../services/auth';
import { USER_BUYER_ROLE } from '../../constants/userConstants';
import { sendEmail } from '../../services/emailService';
import { getLanguageCookie } from '../../utils/loginUtils';
import { useTranslation } from '../../i18n';
import httpService from '../../services/httpService';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';
import { ERROR_MESSAGE } from '../../constants/errorMessage';
const CheckoutItem = () => {
  const searchParams = useSearchParams();
  const [optionalEmail, setOptionalEmail] = useState();
  const [contactNumber, setContactNumber] = useState();
  const cartItems = JSON.parse(localStorage.getItem('cart-items'));
  const router = useRouter();
  // const [isLoggin, setIsLoggedIn] = useState(false);
  const [languageObject, setLanguageObject] = useState({});

  useEffect(() => {
    getLanguageData();
  }, []);

  const getLanguageData = async () => {
    const lng = getLanguageCookie();
    const { t } = await useTranslation(lng);
    setLanguageObject({
      checkout: t('checkout'),
      selectedItems: t('selectedItems'),
      purchaseMemo: t('purchaseMemo'),
      number: t('number'),
      name: t('name'),
      price: t('price'),
      back: t('back'),
      placeOrder: t('placeOrder'),
      orderSubmittedSuccessfully: t('orderSubmittedSuccessfully'),
      total: t('total'),
      changeEmail: t('changeEmail'),
      buyerDetails: t('buyerDetails'),
      email: t('email'),
      mobileNumber: t('mobileNumber'),
    });
  };

  const calculateTotal = () => {
    let totalPrice = 0;
    if (cartItems) {
      cartItems.map((item, index) => {
        totalPrice = totalPrice + item.price;
      });
    }
    return Math.round(totalPrice);
  };

  // useEffect(() => {
  //   const userDetailsFromCookie = getUserDetailsFromCookie();
  //   if (
  //     userDetailsFromCookie &&
  //     userDetailsFromCookie.role === USER_BUYER_ROLE
  //   ) {
  //     setIsLoggedIn(true);
  //     setOptionalEmail(userDetailsFromCookie.emailId);
  //   } else {
  //     setIsLoggedIn(false);
  //   }
  // }, []);

  const handleBack = () => {
    router.push('/cart');
  };

  const placeOrder = () => {
    if(optionalEmail && contactNumber){
      const emailToMail = optionalEmail;
      let message = '';
      cartItems.map((item, index) => {
        message = message.concat(`${index + 1}. ${item.name} - ${item.price} \n`);
      });
      message = message.concat(`\n\n\nTotal Cost : ${calculateTotal()}`);
      const mailObject = {
        from_name: 'Alage Store',
        to_name: `Buyer (${contactNumber})`,
        heading: 'Your Order Details : ',
        item_message: message,
        to_email: emailToMail
      };
      sendEmail(mailObject).then((res) => {
        if (res) {
          if (res.text === 'OK') {
            mailObject.heading =
              `An order is placed by ${emailToMail}. \n` +
              mailObject.item_message;
            mailObject.to_email = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
            sendEmail(mailObject);
          }
          const transactionObjectList = {
            buyer: emailToMail,
            cost: calculateTotal(),
            paymentProof: null,
            paymentType: null,
            productDetails: [],
            status: 'OPEN',
            transactionId: null,
          };
          cartItems.map((item) => {
            transactionObjectList.productDetails.push({
              price: item.price,
              productName: item.name,
              productId: item.product_id,
              sellerId: item.supplier,
            });
          });
          httpService(
            CONTROLLERS.addTransaction,
            METHODS.post,
            transactionObjectList,
            API
          ).then((src) => {
            if (src) {
              if (src.status === 200) {
                alert(`${languageObject.orderSubmittedSuccessfully}`);
                router.push('store');
              } else {
                alert(ERROR_MESSAGE.SOMTHING_WRONG);
              }
            }
          });
        }
      });
    }else{
      alert("Please provide email and contact number")
    }
    
  };

  return (
    <>
      (
      <div className="text-center py-4 bg-gray-100 dark:bg-gray-900 mt-20">
        <p className="text-dark text-2xl lg:text-5xl lg:mb-0 pt-5 pb-10">
          {languageObject.checkout} :
        </p>
        <div className="flex items-center">
          <div className="container max-w-1 px-0 lg:px-5 mx-1">
            <div className="grid gap-7 grid-cols-1 lg:grid-cols-1">
              <div className="p-2 lg:p-5 bg-white rounded">
                <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="bg-indigo-300">
                    {cartItems && (
                      <div className="bg-primary-black overflow-hidden top-0 left-0 w-full h-full">
                        <div className="text-white mt-10 mb-10 text-2xl">
                          {languageObject.selectedItems}
                        </div>
                        <div className="grid grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4 px-5 py-5">
                          {cartItems.map((item, index) => {
                            return (
                              <CheckourCard
                                {...item}
                                classFields={
                                  'mx-auto w-full md:w-[15rem] h-[5rem] object-cover'
                                }
                                width={400}
                                height={100}
                              />
                            );
                          })}
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="flex-row items-left pt-1">
                    <div className="text-black mt-10 mb-10 text-2xl">
                      {languageObject.purchaseMemo}
                    </div>
                    <table class="border-collapse border border-slate-400 ...">
                      <thead>
                        <tr>
                          <th class="border-2 p-2 border-slate-300 ...">
                            {languageObject.number}
                          </th>
                          <th class="border-2 p-2 border-slate-300 ...">
                            {languageObject.name}
                          </th>
                          <th class="border-2 p-2 border-slate-300 ...">
                            {languageObject.price}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {cartItems &&
                          cartItems.map((item, index) => {
                            return (
                              <>
                                <tr>
                                  <td class="border p-2 border-slate-300 ...">
                                    {index + 1}
                                  </td>
                                  <td class="border border-slate-300 ...">
                                    {item.name}
                                  </td>
                                  <td class="border border-slate-300 ...">
                                    {item.price}
                                  </td>
                                </tr>
                              </>
                            );
                          })}
                        <tr>
                          <td class="border-4 border-slate-300 ...">{''}</td>
                          <td class="border-4 w-full border-slate-300 ...">
                            {languageObject.total}
                          </td>
                          <td class="border-4 border-slate-300 ...">
                            {calculateTotal()}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <div className="text-black mt-20 mb-10 text-2xl">
                      {languageObject.buyerDetails}
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="flex mb-2 font-medium">
                        {languageObject.email}
                      </label>
                      <input
                        onChange={(e) => setOptionalEmail(e.target.value)}
                        value={optionalEmail}
                        type="text"
                        id="email"
                        placeholder={'example@gmail.com'}
                        className="appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="mb-4 left">
                      <label htmlFor="city" className="flex mb-2 font-medium">
                        {languageObject.mobileNumber}
                      </label>
                      <input
                        onChange={(e) => setContactNumber(e.target.value)}
                        value={contactNumber}
                        type="text"
                        id="contactNumber"
                        placeholder={'Mobile Number'}
                        className="appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div>
                      <button
                        class="bg-red-500 hover:bg-hover-600 text-white font-bold py-3 px-6 rounded m-4"
                        onClick={handleBack}
                      >
                        {languageObject.back}
                      </button>
                      <button
                        onClick={placeOrder}
                        class="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded m-4"
                      >
                        {languageObject.placeOrder}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!cartItems && <div>cart item is empty</div>}
    </>
  );
};

export default CheckoutItem;
