'use client';

import React, { useState } from 'react';
import './styles.css';
import { useRouter, usePathname } from 'next/navigation';
import { sendEmail } from '../../services/emailService';

const page = () => {
  const [userProfileData, setUserProfileData] = useState({});
  const setFieldValue = (fieldValue, fieldName) => {
    let changedValue = userProfileData;
    changedValue[fieldName] = fieldValue;
    setUserProfileData((prevUserProfileData) => ({
      ...userProfileData,
      ...changedValue,
    }));
  };
  const router = useRouter();
  const pathname = usePathname();

  const handleSubmit = () => {
    const message = `Organisation Website : ${userProfileData.website}\n Organisation Name : ${userProfileData.organisationName}\n Name : ${userProfileData.name}\n Country of Origin : ${userProfileData.country}\n City : ${userProfileData.city}\n Phone Number : ${userProfileData.phone}\n Email : ${userProfileData.email}`;
    const payload = {
      from_name: 'Alage Store',
      to_name: 'Admin',
      heading: 'A new selling request : ',
      item_message: message,
      to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    };
    sendEmail(payload).then((emailRes)=>{
      if(emailRes){
        alert("Your selling request is sent to our admin, will contact you soon.")
        router.push("/")
      }
    })
  };

  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/2 bg-violet-200">
        <div className="p-6 md:p-20">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-10 pl-6">
            For Suppliers
          </h1>
          <div className="p-6 md:mb-12">
            {/* Details (random text) */}
            Are you a seaweed producer, supplier, or manufacturer looking to
            expand your reach and connect with a global network of buyers? Look
            no further – our Sellers Page is your gateway to a world of
            opportunities in the thriving seaweed industry.
          </div>
          <div className="text-center">
            {/* Image */}
            <img src={'/bg356.png'} alt="img" className="mx-auto mb-0" />
          </div>
        </div>
      </div>
      <div className="md:w-1/2 bg-white">
        <div className="p-6 md:p-20">
          <h2 className="text-2xl font-semibold mb-6">
            Supplier Information Form
          </h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="organisationName"
                className="block mb-2 font-medium"
              >
                Organisation Name:
              </label>
              <input
                onChange={(e) =>
                  setFieldValue(e.target.value, 'organisationName')
                }
                value={userProfileData.organisationName}
                type="text"
                id="organisationName"
                placeholder="ISRO"
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="website" className="block mb-2 font-medium">
                Organisation Website:
              </label>
              <input
                onChange={(e) => setFieldValue(e.target.value, 'website')}
                value={userProfileData.website}
                type="text"
                id="website"
                placeholder="isroindia.com"
                className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              />
            </div>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row">
                <div className="mb-2 md:mb-0 md:mr-4">
                  <label htmlFor="firstname" className="block font-medium mb-2">
                    Full Name:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'name')}
                    value={userProfileData.name}
                    type="text"
                    id="firstname"
                    placeholder="John"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row">
                <div className="mb-2 md:mb-0 md:mr-4">
                  <label htmlFor="email" className="block font-medium mb-2">
                    Email:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'email')}
                    value={userProfileData.email}
                    type="text"
                    id="email"
                    placeholder="someone@gmail.com"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="md:ml-4">
                  <label htmlFor="city" className="block font-medium mb-2">
                    Phone:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'phone')}
                    value={userProfileData.phone}
                    type="text"
                    id="phone"
                    placeholder="+91 XXXXXXXXXX"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex flex-col md:flex-row">
                <div className="mb-2 md:mb-0 md:mr-4">
                  <label htmlFor="country" className="block font-medium mb-2">
                    Country:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'country')}
                    value={userProfileData.country}
                    type="text"
                    id="country"
                    placeholder="USA"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="md:ml-4">
                  <label htmlFor="city" className="block font-medium mb-2">
                    City:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'city')}
                    value={userProfileData.city}
                    type="text"
                    id="city"
                    placeholder="California "
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
              </div>
            </div>
            {/* <div className="mb-4">

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
              <label htmlFor="address" className="block mb-2 font-medium">
                What are you interested in selling:
              </label>
              <textarea
                onChange={(e) => setFieldValue(e.target.value, 'interest')}
                value={userProfileData.interest}
                id="interest"
                placeholder="Tell us more about what you're doing!"
                className="w-full bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              type="button"
              className="w-full px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
