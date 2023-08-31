"use client";

import React from 'react';
import './styles.css';
import { useRouter, usePathname } from 'next/navigation';


const page = () => {
    const router = useRouter();
    const pathname = usePathname();

    const handleSubmit = () =>{
        const truncatedPath = pathname.replace('/supplier', '');
        console.log("trucatedPath", truncatedPath)
        router.push(pathname.replace('/supplier', '') + '/signup?user=supplier')
    }

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-violet-200">
                <div className="p-6 md:p-20">
                    <h1 className='text-3xl font-semibold text-gray-800 mb-4 md:mb-10 pl-6'>For Suppliers</h1>
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
                    <h2 className="text-2xl font-semibold mb-6">Supplier Information Form</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="organisationName" className="block mb-2 font-medium">Organisation Name:</label>
                            <input type="text" id="organisationName" placeholder="ISRO" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="website" className="block mb-2 font-medium">Organisation Website:</label>
                            <input type="text" id="website" placeholder="isroindia.com" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                        </div>
                        <div className="mb-4">
                            <div className='flex flex-col md:flex-row'>
                                <div className="mb-2 md:mb-0 md:mr-4">
                                    <label htmlFor="firstname" className="block font-medium mb-2">First Name:</label>
                                    <input type="text" id="firstname" placeholder="John" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                                <div className="md:ml-4">
                                    <label htmlFor="lastname" className="block font-medium mb-2">Last Name:</label>
                                    <input type="text" id="lastname" placeholder="Doe" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="mb-4">
                            <div className='flex flex-col md:flex-row'>
                                <div className="mb-2 md:mb-0 md:mr-4">
                                    <label htmlFor="country" className="block font-medium mb-2">Country:</label>
                                    <input type="text" id="country" placeholder="USA" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                                <div className="md:ml-4">
                                    <label htmlFor="city" className="block font-medium mb-2">City:</label>
                                    <input type="text" id="city" placeholder="California " className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                                <div className="md:ml-4">
                                    <label htmlFor="phone" className="block font-medium mb-2">Phone Number:</label>
                                    <input type="text" id="phone" placeholder="+1 (XXX) XXX-XXXX" className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text" />
                                </div>
                            </div>

                        </div>
                        {/* <div className="mb-4">

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
                        </div> */}
                        {/* <div className="mb-4">
                            <label htmlFor="role" className="block mb-2 font-medium">Role :</label>
                            <select id="role" className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text">
                                <option value="farmer">Seaweed farmer/cultivator</option>
                                <option value="trader">Seaweed trader</option>
                                <option value="productbuyer">Seaweed OR seaweed product buyer</option>
                                <option value="manufacturer">Manufacturer of seaweed by-products</option>
                                <option value="otherrole">Other</option>
                            </select>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="types" className="block mb-2 font-medium">Types of products sold :</label>
                            <select id="role" className="bg-gray-100 appearance-none border-2 border-gray-100 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" type="text">
                                <option value="chips">Dried seaweed flakes / chips</option>
                                <option value="liquidsap">Liquid sap</option>
                                <option value="extracted">Extracted hydrocolloids - Agar, Alginate, Carrageenan</option>
                                <option value="dried">Dried seaweed</option>
                                <option value="wet">Wet seaweed</option>
                                <option value="seedling">Seedling</option>
                                <option value="cellulose">Cellulose / pulp after hydrocolloid extraction</option>
                                <option value="otherproduct">Others</option>
                            </select>
                        </div> */}
                        <div className="mb-4">
                            <label htmlFor="address" className="block mb-2 font-medium">Address</label>
                            <textarea id="address" placeholder="Tell us more about what you're doing!" className="w-full bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-full-name" type="text"></textarea>
                        </div>
                        <div >
                            <button onClick={handleSubmit} type="button" className="w-full px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default page;