"use client";

import React from 'react';
import ProductCard from './ProductCard'

const ProfilePage = ({ products }) => {

    const farmerInfo = {
        name: 'Madan',
        email: 'madankashyap@gmail.com',
        mobile: '9720198143',
        location: 'Dariaoganj',
        products: [
            {
                "name": "Seaweed Snack",
                "brand": "Ocean Delights",
                "description": "A delicious and nutritious seaweed snack with a hint of sea salt.",
                "price": 4.99,
                "weight": "50g",
                "ingredients": ["Organic Seaweed", "Sunflower Oil", "Sea Salt"],
                "image_url": "https://www.salamat.gr/image/cache/catalog/GEORGINA%20ESHOP/04-03-22/EE11002-1080x1080.png"
            },
            {
                "name": "Oceanic Nori Sheets",
                "brand": "SeaweedCo",
                "description": "Premium seaweed nori sheets for making sushi rolls and wraps.",
                "price": 9.99,
                "weight": "25 sheets",
                "ingredients": ["Seaweed Nori"],
                "image_url": "https://cdn.shopify.com/s/files/1/0579/3149/7654/products/OCE8_large_a8180de7-daeb-4869-b1fb-6269f3a537e5.jpg?v=1674656643"
            },
            {
                "name": "Seaweed Crisps",
                "brand": "SeaCrunch",
                "description": "Crunchy seaweed crisps seasoned with a blend of spices.",
                "price": 3.49,
                "weight": "30g",
                "ingredients": ["Seaweed", "Canola Oil", "Spices"],
                "image_url": "https://cdn.shopify.com/s/files/1/0522/0125/9183/products/634158955907_T1.jpg?v=1665569729"
            },
            {
                "name": "Sea Veggie Mix",
                "brand": "SeaNutri",
                "description": "A mix of different seaweed varieties for a healthy and nutrient-rich addition to meals.",
                "price": 6.99,
                "weight": "100g",
                "ingredients": ["Seaweed Mix (Dulse, Nori, Wakame)", "Sea Lettuce"],
                "image_url": "https://www.doorsteporganics.com.au/image/optimised/large/Sea-Vegetables-Toated-Fine-Cut-Nori-Nutritionist-Choice-25g.jpg"
            }
        ]
    }

    const loggedIn = true;



    return (
        // <div className="bg-gray-100 min-h-screen py-8 px-4">
        //     <div className="mx-auto max-w-lg bg-white rounded-lg shadow-md p-6">
        //         <h1 className="text-2xl font-semibold mb-4">Farmer Profile</h1>
        //         <div className="mb-4">
        //             <img src="cover-profile-pic.jpg" alt="Cover Profile" className="w-full h-40 object-cover rounded-md shadow-md" />
        //         </div>
        //         <div className="mb-4">
        //             <h2 className="text-lg font-semibold mb-2">Information</h2>
        //             <p><span className="font-medium">Name:</span> {farmerInfo.name}</p>
        //             <p><span className="font-medium">Email:</span> {farmerInfo.email}</p>
        //             <p><span className="font-medium">Mobile:</span> {farmerInfo.mobile}</p>
        //             <p><span className="font-medium">Location:</span> {farmerInfo.location}</p>
        //         </div>
        //         <div className="mb-4">
        //             {loggedIn ? (
        //                 <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">Edit Profile</button>
        //             ) : (
        //                 <p className="text-indigo-600">
        //                     <a href="/login">Login Now</a>
        //                 </p>
        //             )}
        //         </div>
        //         <div>
        //             <h2 className="text-lg font-semibold mb-2">Products</h2>
        //             <div className="flex flex-wrap justify-center gap-4 px-5">
        //                 {products.map((item, index) => {
        //                     return (<ProductCard {...item} />);
        //                 })}
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div>
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css" />
            <link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css" />

            <section class="pt-16 bg-blueGray-50">
                <div class="w-full lg:w-4/12 px-4 mx-auto">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                        <div class="px-6">
                            <div class="flex flex-wrap justify-center">
                                <div class="w-full px-4 flex justify-center">
                                    <div class="relative">
                                        <img alt="farmer image" src="https://img.freepik.com/premium-photo/happy-indian-farmer-green-cotton-field_54391-2204.jpg?w=2000" class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px" style={{ width: "150px", height: "150px" }} />
                                    </div>
                                </div>
                                <div class="w-full px-4 text-center mt-20">
                                    <div class="flex justify-center py-4 lg:pt-4 pt-8">
                                        {/* <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                22
                                            </span>
                                            <span class="text-sm text-blueGray-400">Friends</span>
                                        </div>
                                        <div class="mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                10
                                            </span>
                                            <span class="text-sm text-blueGray-400">Photos</span>
                                        </div>
                                        <div class="lg:mr-4 p-3 text-center">
                                            <span class="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                                                89
                                            </span>
                                            <span class="text-sm text-blueGray-400">Comments</span>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="text-center mt-12">
                                <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                                    {farmerInfo.name}
                                </h3>
                                <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                    <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                    {farmerInfo.location}
                                </div>
                                <div class="mb-2 text-blueGray-600 mt-10">
                                    <i class="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                                    Email - {farmerInfo.email}
                                </div>
                                <div className="mb-2 text-blueGray-600">
                                    <i className="fas fa-mobile mr-2 text-lg text-blueGray-400"></i>
                                    {loggedIn ? (
                                        farmerInfo.mobile
                                    ) : (
                                        <span>{farmerInfo.mobile.replace(/\d/g, '*')}</span>
                                    )}
                                </div>
                            </div>
                            <div className="text-center m-4">
                                {loggedIn ? (
                                    <button className="bg-indigo-600 text-white py-2 px-4 rounded-md">Edit Profile</button>
                                ) : (
                                    <p className="text-indigo-600">
                                        <a href="/login">Login as farmer</a>
                                    </p>
                                )}
                            </div>

                            <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                                <h3 class="text-xl font-semibold leading-normal mb-6 text-blueGray-700 mb-2 ">
                                    Published Product
                                </h3>
                                <div class="flex flex-wrap justify-center">

                                    <div class="w-full lg:w-9/12 px-4">
                                        <div className="flex flex-nowrap overflow-x-scroll">
                                            {farmerInfo?.products?.map((item, index) => {
                                                return (
                                                    <div class="flex-none w-64 mr-4">
                                                        <ProductCard {...item} />
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <footer class="relative  pt-8 pb-6 mt-8">
                </footer>
            </section>
        </div>
    );
}


export default ProfilePage;
