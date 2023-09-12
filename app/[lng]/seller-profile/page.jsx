'use client';

import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { getUserDetailsFromCookie } from '../../services/auth';
import { useRouter } from 'next/navigation';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';
import httpService from '../../services/httpService';
import { removeAllCookies } from '../../utils/loginUtils';

const ProfilePage = () => {
  const [userProfileData, setUserProfileData] = useState(null);
  const router = useRouter();
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
          if (res) {
            setUserProfileData(res.data);
          }
        });
      } else {
        router.push('/buyer-profile');
      }
    }
  }, []);

  const loggedIn = true;
  const logout = () =>{
    removeAllCookies()
    router.push('/');
  }
  return (
    <>
      {userProfileData && (
        <div>
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css"
          />
          <link
            rel="stylesheet"
            href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"
          />

          <section class="pt-16 bg-blueGray-50">
            <div class="w-full lg:w-4/12 px-4 mx-auto">
              <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
                <div class="px-6">
                  <div class="flex flex-wrap justify-center">
                    <div class="w-full px-4 flex justify-center">
                      <div class="relative">
                        <img
                          alt="farmer image"
                          src={userProfileData.image_url}
                          class="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                          style={{ width: '150px', height: '150px' }}
                        />
                      </div>
                    </div>
                    <div class="w-full px-4 text-center mt-20">
                      <div class="flex justify-center py-4 lg:pt-4 pt-8"></div>
                    </div>
                  </div>
                  <div class="text-center mt-12">
                    <h3 class="text-xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                      {userProfileData.name}
                    </h3>
                    <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                      <i class="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                      {userProfileData.city}
                    </div>
                    <div class="mb-2 text-blueGray-600 mt-10">
                      <i class="fas fa-envelope mr-2 text-lg text-blueGray-400"></i>
                      Email - {userProfileData.username}
                    </div>
                    <div className="mb-2 text-blueGray-600">
                      <i className="fas fa-mobile mr-2 text-lg text-blueGray-400"></i>
                      {loggedIn ? (
                        userProfileData.phone
                      ) : (
                        <span>{userProfileData.phone.replace(/\d/g, '*')}</span>
                      )}
                    </div>
                  </div>
                  <div className="text-center m-4">
                    {loggedIn ? (
                      <>
                        {' '}
                        <button className="bg-indigo-600 mr-2 text-white py-2 px-4 rounded-md">
                          Edit Profile
                        </button>
                        <button onClick={logout} className="bg-indigo-600 text-white py-2 px-4 rounded-md">
                          Logout
                        </button>
                      </>
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
                          {userProfileData?.publishedProducts?.map(
                            (item, index) => {
                              return (
                                <div class="flex-none w-64 mr-4">
                                  <ProductCard {...item} />
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <footer class="relative  pt-8 pb-6 mt-8"></footer>
          </section>
        </div>
      )}
    </>
  );
};

export default ProfilePage;