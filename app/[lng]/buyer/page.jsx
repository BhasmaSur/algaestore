"use client";

import React from 'react';
import './styles.css';

const page = () => {
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
                            <label htmlFor="companyName" className="block mb-2 font-medium">Company Name:</label>
                            <input type="text" id="companyName" placeholder = "ISRO" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"/>
                        </div>
                        <div className="mb-4">
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
                                    <input type="email" id="email" placeholder='example@email.com' className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                                <div className="md:ml-4">
                                    <label htmlFor="phone" className="block font-medium mb-2">Phone number:</label>
                                    <input type="text" id="phone" placeholder='+91 (XXX) XXX-XXXX' className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="number" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="industry" className="block mb-2 font-medium">Industry:</label>
                            <select id="industry" className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text">
                                <option value="agriculture">Agriculture</option>
                                <option value="foodAndBeverage">Food and Beverage</option>
                                <option value="cosmetics">Cosmetics</option>
                                <option value="materialsAndTextiles">Materials and Textiles</option>
                                <option value="packaging">Packaging</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="additionalInfo" className="block mb-2 font-medium">Additional Info:</label>
                            <textarea id="additionalInfo" placeholder="Tell us more about what you're doing!" className="w-full bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"></textarea>
                        </div>
                        <button type="submit" className="w-full px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">Send</button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default page;