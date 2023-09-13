'use client';

import React, { useEffect, useState } from 'react';
import './styles.css';
import { useRouter } from 'next/navigation';
import { getUserDetailsFromCookie } from '../../services/auth';
import httpService from '../../services/httpService';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';

const page = () => {
  const router = useRouter();
  const [userProfileData, setUserProfileData] = useState(null);
  const setFieldValue = (fieldValue, fieldName) => {
    let changedValue = userProfileData;
    changedValue[fieldName] = fieldValue;
    setUserProfileData((prevUserProfileData) => ({
      ...userProfileData,
      ...changedValue,
    }));
  };
  useEffect(() => {
    if (!userProfileData) {
      const userDetails = getUserDetailsFromCookie();
      if (userDetails) {
        httpService(
          CONTROLLERS.getBuyerProfile,
          METHODS.post,
          {
            userId: userDetails.emailId,
          },
          API
        ).then((res) => {
          if (res) {
            setUserProfileData(res.data);
          }
        });
      } else {
        router.push('/buyer-profile');
      }
    }
  }, []);
  const handleSubmit = () => {
    httpService(
      CONTROLLERS.saveBuyerProfile,
      METHODS.post,
      userProfileData,
      API
    ).then((res) => {
      if (res) {
        router.push('/buyer-profile');
      }
    });
  };

  return (
    <>
      {userProfileData && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-violet-200">
            <div className="p-6 md:p-20">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-10 pl-6">
                For Buyers
              </h1>
              <div className="p-6 md:mb-12">
                {/* Details (random text) */}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                fermentum quam volutpat, euismod lectus sed, tristique lectus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                fermentum quam volutpat, euismod lectus sed, tristique lectus.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                fermentum quam volutpat, euismod lectus sed, tristique lectus.
              </div>
              <div className="text-center">
                {/* Image */}
                <img
                  src="https://culturedsupply.com/assets/images/bioreactor-no-text.png"
                  alt="img"
                  className="mx-auto mb-0"
                />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white">
            <div className="p-6 md:p-20">
              <h2 className="text-2xl font-semibold mb-6">
                Submit a buying request
              </h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="country" className="block mb-2 font-medium">
                    Country of Origin:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'country')}
                    value={userProfileData.country}
                    type="text"
                    id="country"
                    placeholder="INDIA"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="city" className="block mb-2 font-medium">
                    City of Origin:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'city')}
                    value={userProfileData.city}
                    type="text"
                    id="city"
                    placeholder="GOA"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block mb-2 font-medium">
                    Address:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'address')}
                    value={userProfileData.address}
                    type="text"
                    id="address"
                    placeholder="abc"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="fullname" className="block mb-2 font-medium">
                    Full Name:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'name')}
                    value={userProfileData.name}
                    type="text"
                    id="fullname"
                    placeholder="Jason Chris"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    Phone Number:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'phone')}
                    value={userProfileData.phone}
                    type="text"
                    id="phone"
                    placeholder="+1 (XXX) XXX-XXXX"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block mb-2 font-medium">
                    Email:
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'username')}
                    value={userProfileData.username}
                    disabled={true}
                    type="text"
                    id="email"
                    placeholder="abc@gmail.com"
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
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
      )}
    </>
  );
};

export default page;
