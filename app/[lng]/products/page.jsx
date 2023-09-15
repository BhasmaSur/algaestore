'use client';

import { async } from '@firebase/util';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import httpService from '../../services/httpService';
<<<<<<< HEAD
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails'
=======
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd

const Products = () => {
  const searchParams = useSearchParams();
  const pi = searchParams.get('productid');

  const [productDetails, setProductdetails] = useState([]);

  const Product = {
    name: 'Seaweed Snack',
    brand: 'Ocean Delights',
    description:
      'A delicious and nutritious seaweed snack with a hint of sea salt. A delicious and nutritious seaweed snack with a hint of sea salt. A delicious and nutritious seaweed snack with a hint of sea salt. A delicious and nutritious seaweed snack with a hint of sea salt.',
    price: 4.99,
    weight: '50g',
    ingredients: ['Organic Seaweed', 'Sunflower Oil', 'Sea Salt'],
    image_url:
      'https://www.salamat.gr/image/cache/catalog/GEORGINA%20ESHOP/04-03-22/EE11002-1080x1080.png',
    product_id: '121',
    ingredients: [
      { name: 'Organic Seaweed', quantity: '50g' },
      { name: 'Sunflower Oil', quantity: '15ml' },
      { name: 'Sea Salt', quantity: '5g' },
      { name: 'Spices', quantity: '2g' },
      { name: 'Natural Flavors', quantity: 'N/A' }, // Placeholder for products without quantity
    ],

    supplier: 'Madan Kashyap',
    location: 'Dariaoganj',
  };

  // const getProductDetails = () => {
  //     const productId = "121"
  //     httpService(CONTROLLERS.products, METHODS.get, productId, API).then((res) => {
  //         if(res){
  //             console.log("product details", res)
  //         }
  //         else{
  //             console.log("No response")
  //         }
  //     })
  // }

  const getProductDetails = async () => {
    const response = await fetch(
      `https://www.algaestore.in/api/products?productId=${pi}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json', // Include your custom headers here
          // Other headers if needed
        },
      }
    )
      .then((res) => res.json())
      .then((res) => {
        setProductdetails(res);
        console.log('api data', res);
      });
  };

<<<<<<< HEAD
    // const getProductDetails = () => {
    //     const productId = "121"
    //     httpService(CONTROLLERS.products, METHODS.get, productId, API).then((res) => {
    //         if(res){
    //             console.log("product details", res)
    //         }
    //         else{
    //             console.log("No response")
    //         }
    //     })
    // }

    const getProductDetails = async () => {
        const response = await fetch(`http://localhost:3000/api/products?productId=${pi}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json', // Include your custom headers here
                // Other headers if needed
            },
        }).then(res => res.json()).then((res) => {
            setProductdetails(res);
            console.log("api data", res)
        });
    }


    useEffect(() => {
        getProductDetails();
    }, [])



    return (
        <div>
            {/* <h1>Product ID : {pi}</h1> */}
            <section class="text-gray-700 body-font overflow-hidden bg-white">
                <div class="container px-5 py-24 mx-auto">
                    <div class="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={productDetails[0]?.image_url} />
                        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 class="text-sm title-font text-gray-500 tracking-widest">{productDetails[0]?.brand}</h2>
                            <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">{productDetails[0]?.name}</h1>
                            <div class="flex mb-4">
                                <span class="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 text-red-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span class="text-gray-600 ml-3">4 Reviews</span>
                                </span>
                                {/* <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
=======
  useEffect(() => {
    getProductDetails();
  }, []);

  return (
    <div>
      {/* <h1>Product ID : {pi}</h1> */}
      <section class="text-gray-700 body-font overflow-hidden bg-white">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
              src={productDetails[0]?.image_url}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 class="text-sm title-font text-gray-500 tracking-widest">
                {productDetails[0]?.brand}
              </h2>
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {productDetails[0]?.name}
              </h1>
              <div class="flex mb-4">
                <span class="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-4 h-4 text-red-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span class="text-gray-600 ml-3">4 Reviews</span>
                </span>
                {/* <span class="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd
                                        <a class="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </a>
                                        <a class="ml-2 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </a>
                                    </span> */}
<<<<<<< HEAD
                            </div>
                            <p class="leading-relaxed">{productDetails[0]?.description}</p>
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                {/* <div class="flex">
=======
              </div>
              <p class="leading-relaxed">{productDetails[0]?.description}</p>
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                {/* <div class="flex">
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd
                                        <span class="mr-3">Color</span>
                                        <button class="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button class="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                                        <button class="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                                    </div> */}
                {/* <div class="flex ml-6 items-center">
                                        <span class="mr-3">Size</span>
                                        <div class="relative">
                                            <select class="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                                                <option>SM</option>
                                                <option>M</option>
                                                <option>L</option>
                                                <option>XL</option>
                                            </select>
                                            <span class="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4" viewBox="0 0 24 24">
                                                    <path d="M6 9l6 6 6-6"></path>
                                                </svg>
                                            </span>
                                        </div>
                                    </div> */}
<<<<<<< HEAD
                            </div>
                            {productDetails[0]?.ingredients && (<div class="mt-6">
                                <h2 class="text-lg font-medium text-gray-900 mb-2">Ingredients</h2>
                                <table class="table-auto w-full">
                                    <tbody>
                                        {Object?.entries(productDetails[0]?.ingredients[0]).map(([ingredient, quantity], index) => (
                                            <tr key={index}>
                                                <td class="pr-4 py-2">{ingredient}</td>
                                                <td class="pr-4 py-2">{quantity}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>)
                            }
                            <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
                            <div class="mt-6">
                                <h2 class="text-lg font-medium text-black mb-2">Supplier</h2>
                                <p className="text-blue-500 hover:underline">
                                    <Link href='/profile'>
                                        <span className="text-blue-500 hover:underline">{productDetails[0]?.supplier}</span>
                                    </Link>
                                </p>
                                <p class="text-gray-500 ml-6">{productDetails[0]?.location}</p>
                            </div>
                            <div class="flex mt-10">
                                <span class="title-font font-medium text-2xl text-gray-900">${productDetails[0]?.price}</span>
                                <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">Buy Now</button>
                                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                    <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
=======
              </div>
              {productDetails[0]?.ingredients && (
                <div class="mt-6">
                  <h2 class="text-lg font-medium text-gray-900 mb-2">
                    Ingredients
                  </h2>
                  <table class="table-auto w-full">
                    <tbody>
                      {Object?.entries(productDetails[0]?.ingredients[0]).map(
                        ([ingredient, quantity], index) => (
                          <tr key={index}>
                            <td class="pr-4 py-2">{ingredient}</td>
                            <td class="pr-4 py-2">{quantity}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
>>>>>>> aa538517e5fcc6460ea866fd8df92b825adbd2dd
                </div>
              )}
              <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5"></div>
              <div class="mt-6">
                <h2 class="text-lg font-medium text-black mb-2">Supplier</h2>
                <p className="text-blue-500 hover:underline">
                  <Link href="/profile">
                    <span className="text-blue-500 hover:underline">
                      {productDetails[0]?.supplier}
                    </span>
                  </Link>
                </p>
                <p class="text-gray-500 ml-6">{productDetails[0]?.location}</p>
              </div>
              <div class="flex mt-10">
                <span class="title-font font-medium text-2xl text-gray-900">
                  ${productDetails[0]?.price}
                </span>
                <button class="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">
                  Buy Now
                </button>
                <button class="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                  <svg
                    fill="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    class="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
