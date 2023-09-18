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
          CONTROLLERS.getSellerProfile,
          METHODS.post,
          {
            userId: userDetails.emailId,
          },
          API
        ).then((res) => {
          if(res.data.username){
            setUserProfileData(res.data);
          }else{
            let userData = res.data;
            userData.username = userDetails.emailId;
            setUserProfileData(userData);
          }
        });
      } else {
        router.push('/buyer-profile');
      }
    }
  }, []);
  const handleSubmit = () => {
    httpService(CONTROLLERS.saveSellerProfile, METHODS.post, userProfileData, API).then((res)=>{
        if(res){
            console.log(res.data)
            router.push('/seller-profile')
        }
    })
  };

  return (
    <>
      {userProfileData && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-violet-200">
            <div className="p-6 md:p-20">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-10 pl-6">
                For Suppliers
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
                      <label htmlFor="name" className="block font-medium mb-2">
                        Name :
                      </label>
                      <input
                        onChange={(e) => setFieldValue(e.target.value, 'name')}
                        value={userProfileData.name}
                        type="text"
                        id="name"
                        placeholder="John"
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                    <div className="md:ml-4">
                      <label htmlFor="email" className="block font-medium mb-2">
                        Email :
                      </label>
                      <input
                        onChange={(e) =>
                          setFieldValue(e.target.value, 'username')
                        }
                        value={userProfileData.username}
                        disabled={true}
                        type="text"
                        id="email"
                        placeholder="Doe"
                        className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <div className="flex flex-col md:flex-row">
                    <div className="mb-2 md:mb-0 md:mr-4">
                      <label
                        htmlFor="country"
                        className="block font-medium mb-2"
                      >
                        Country:
                      </label>
                      <input
                        onChange={(e) =>
                          setFieldValue(e.target.value, 'country')
                        }
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
                    <div className="md:ml-4">
                      <label htmlFor="phone" className="block font-medium mb-2">
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
                  </div>
                </div>
                <div className="mb-4">
                  <label htmlFor="address" className="block mb-2 font-medium">
                    Address
                  </label>
                  <textarea
                    onChange={(e) => setFieldValue(e.target.value, 'address')}
                    value={userProfileData.address}
                    id="address"
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
      )}
    </>
  );
};

export default page;
