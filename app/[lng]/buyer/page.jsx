"use client";

import React from 'react';
import './styles.css';
import { useRouter, usePathname } from 'next/navigation';


const page = () => {

    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = () => {
        const truncatedPath = pathname.replace('/supplier', '');
        console.log("trucatedPath", truncatedPath)
        router.push(pathname.replace('/buyer', '') + '/signup?user=buyer')
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-violet-200">
                <div className="p-6 md:p-20">
                    <h1 className='text-3xl font-semibold text-gray-800 mb-4 md:mb-10 pl-6'>For Buyers</h1>
                    <div className="p-6 md:mb-12">
                        {/* Details (random text) */}
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum quam volutpat, euismod lectus sed, tristique lectus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum quam volutpat, euismod lectus sed, tristique lectus.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus fermentum quam volutpat, euismod lectus sed, tristique lectus.
                    </div>
                    <div className='text-center'>
                        {/* Image */}
                        <img src="https://culturedsupply.com/assets/images/bioreactor-no-text.png"
                            alt="img"
                            className="mx-auto mb-0" />
                    </div>
                </div>
            </div>
            <div className="md:w-1/2 bg-white">
                <div className='p-6 md:p-20'>
                    <h2 className="text-2xl font-semibold mb-6">Submit a buying request</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="country" className="block mb-2 font-medium">Country of Origin:</label>
                            <input type="text" id="country" placeholder="INDIA" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block mb-2 font-medium">City of Origin:</label>
                            <input type="text" id="city" placeholder="GOA" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="fullname" className="block mb-2 font-medium">Full Name:</label>
                            <input type="text" id="fullname" placeholder="Jason Chris" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="phone" className="block mb-2 font-medium">Phone Number:</label>
                            <input type="text" id="phone" placeholder="+1 (XXX) XXX-XXXX" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                       
                        {/* <div className="mb-4">
                            <div className='flex flex-col md:flex-row'>
                                <div className="mb-2 md:mb-0 md:mr-4">
                                    <label htmlFor="firstName" className="block font-medium mb-2">First name:</label>
                                    <input type="text" id="firstName" placeholder = "John" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                                </div>
                                <div className="md:ml-4">
                                    <label htmlFor="lastName"  className="block font-medium mb-2">Last name:</label>
                                    <input type="text" id="lastName" placeholder = "Doe" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                                </div>
                            </div>

                        </div>
                        <div className="mb-4">

                            <div className='flex flex-col md:flex-row'>
                                <div className="mb-2 md:mb-0 md:mr-4">
                                    <label htmlFor="email"  className="block font-medium mb-2">Email:</label>
                                    <input type="email" id="email" placeholder='example@email.com' className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                                </div>
                                <div className="md:ml-4">
                                    <label htmlFor="phone" className="block font-medium mb-2">Phone number:</label>
                                    <input type="text" id="phone" placeholder='+91 (XXX) XXX-XXXX' className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                                </div>
                            </div>
                        </div> */}
                        {/* <div className="mb-4">
                            <label htmlFor="seaweedtype" className="block mb-2 font-medium">Type of Seaweed you are interested in buying:</label>
                            <select id="seaweedtype" className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
                                <option value="seaweedpowder">Seaweed Powder</option>
                                <option value="flakes">Flakes</option>
                                <option value="hydrocolloidextracts">Hydrocolloid Extracts - Alginate, Agar, Carrageenan etc</option>
                                <option value="bioactivecompounds">Bioactive compounds / hormones</option>
                                <option value="driedseaweed">Dried seaweed</option>
                                <option value="wetseaweed">Wet seaweed</option>
                                <option value="other">Other</option>
                            </select>
                        </div> */}
                        {/* <div className="mb-4">
                            <label htmlFor="species" className="block mb-2 font-medium">Final applications of seaweed products will be used for:</label>
                            <select id="species" className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
                                <option value="Kappaphycusalvarezii">Kappaphycus alvarezii</option>
                                <option value="Gracilariaedulis">Gracilaria edulis</option>
                                <option value="Gracilariafoliifera">Gracilaria foliifera</option>
                                <option value="Euchemacottonii">Euchema cottonii</option>
                                <option value="Sargassum">Sargassum</option>
                                <option value="Gracilariasalicornia">Gracilaria. salicornia</option>
                                <option value="Gracilaria">Gracilaria verrucosa</option>
                                <option value="Acanthophora">Acanthophora</option>
                                <option value="Hypnea">Hypnea</option>
                                <option value="Gelidiumamansii">Gelidium amansii</option>
                                <option value="Turbinaria">Turbinaria</option>
                                <option value="Ulva">Ulva</option>
                                <option value="other">Other</option>
                            </select>
                        </div> */}
                        {/* <div className="mb-4">
                            <label htmlFor="species" className="block mb-2 font-medium">Final applications of seaweed products will be used for:</label>
                            <select id="species" className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
                                <option value="Agriculture">Agriculture</option>
                                <option value="Food">Food</option>
                                <option value="Cosmetics">Cosmetics</option>
                                <option value="Pharmaceutical">Pharmaceutical</option>
                                <option value="Textile">Textile</option>
                                <option value="Biofuels">Biofuels</option>
                                <option value="Nutraceuticals">Nutraceuticals</option>
                                <option value="Packaging">Packaging</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="monthlyrequirement" className="block mb-2 font-medium">Monthly requirement of each type of product :</label>
                            <input type="text" id="companyName" placeholder = "Dried Sargassum - 2 tons per month, Food grade Alginate - 4 tons per month" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div> */}
                        {/* <div className="mb-4">
                            <label htmlFor="currentvendor" className="block mb-2 font-medium">Current vendors - name and location of sourcing : </label>
                            <input type="text" id="companyName" placeholder = "Madan, Kasganj" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="currentrequirement" className="block mb-2 font-medium">Requirement of each product you are currently buying</label>
                            <input type="text" id="companyName" placeholder = "You answer" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="buyingcountry" className="block mb-2 font-medium">Interested in buying from which city/country?</label>
                            <input type="text" id="companyName" placeholder = "India" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="additionalInfo" className="block mb-2 font-medium">Additional Feedback, if any:</label>
                            <textarea id="additionalInfo" placeholder="Tell us more about what you're doing!" className="w-full bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"></textarea>
                        </div> */}
                        <button onClick={handleSubmit} type="button" className="w-full px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">Send</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default page;