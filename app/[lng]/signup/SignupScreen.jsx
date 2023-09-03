'use client';

import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { setCookieDetails, signUpValidations } from '../../utils/loginUtils';
import httpService from '../../services/httpService';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';
import { USER_BUYER_ROLE, USER_FARMER_ROLE, USER_SELLER_ROLE } from '../../constants/userConstants';
import { usePathname, useSearchParams } from 'next/navigation';

const SignupScreen = () => {
  const router = useRouter();
  const [userType, setUserType] = useState(USER_BUYER_ROLE)
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const searchParams = useSearchParams()
  const search = searchParams.get('user')

  const signUp = () => {
    const { valid, message } = signUpValidations(
      username,
      password,
      confirmPassword
    );
    if (valid) {
      let userDetails = {
        username,
        password,
        type: userType,
      };
      httpService(CONTROLLERS.signup, METHODS.post, userDetails, API).then(
        (res) => {
          if (res) {
            const jwtToken = res?.data?.jwtToken;
            setCookieDetails({
              username,
              jwtToken,
            });
            router.push('/login');
          }
        }
      );
    } else {
      alert(message);
    }
  };
  const redirectToLogin = () => {
    router.push('/login');
  };
  return (
    <div>
      <section class="gradient-form h-full bg-neutral-20">
        <div class="container h-full p-10">
          <div class="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
            <div class="w-full">
              <div class="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
                <div class="g-0 lg:flex lg:flex-wrap">
                  {/* <!-- Left column container--> */}
                  <div class="px-4 md:px-0 lg:w-6/12">
                    <div class="md:mx-6 md:p-12">
                      {/* <!--Logo--> */}
                      <div class="text-center">
                        <img
                          class="mx-auto w-48"
                          src="/seaweed.png"
                          alt="logo"
                        />
                        <h4 class="mb-12 mt-1 pb-1 text-xl font-semibold">
                          Welcome to Algae Store
                        </h4>
                      </div>

                      <form>
                        <div class="flex flex-wrap mb-2">
                          <label
                            class="block text-gray-700 text-lg font-bold mb-10"
                            for="password"
                          >
                            Create your 
                          </label>
                          {
                            search ? <div class="block text-gray-700 text-lg font-bold mb-2 pl-1.5 pr-1.5"> {search} </div> :
                              <div class="relative inline-flex">
                                <svg
                                  class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 412 232"
                                >
                                  <path
                                    d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                                    fill="#648299"
                                    fill-rule="nonzero"
                                  />
                                </svg>
                                <select onChange={(e) => setUserType(e.target.value)} class="ml-2 mr-2 border border-gray-300 rounded-full text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                                  <option value={USER_BUYER_ROLE}>Buyer</option>
                                  {/* <option value={USER_FARMER_ROLE}>Farmer</option> */}
                                  <option value={USER_SELLER_ROLE}>Seller</option>
                                </select>
                              </div>

                          }
                          <label
                            class="block text-gray-700 text-lg font-bold mb-2"
                            for="password"
                          >
                            account
                          </label>
                        </div>

                        <div class="relative mb-4" data-te-input-wrapper-init>
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                           
                          >
                            Email or Phone Number
                          </label>
                          <input
                            value={username}
                            onChange={(event) =>
                              setUsername(event.target.value)
                            }
                            type="email"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            // id="exampleFormControlInput1"
                            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="yourmail@email.com or +1 (XXX) XXX-XXXX"
                          />
                        </div>

                        {/* <!--Password input--> */}
                        <div class="relative mb-4" data-te-input-wrapper-init>
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                          >
                            Password
                          </label>
                          <input
                            value={password}
                            onChange={(event) =>
                              setPassword(event.target.value)
                            }
                            type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            // id="exampleFormControlInput11"
                            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="Password"
                          />
                        </div>
                        <div class="relative mb-4" data-te-input-wrapper-init>
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                          >
                            Confirm Password
                          </label>
                          <input
                            value={confirmPassword}
                            onChange={(event) =>
                              setConfirmPassword(event.target.value)
                            }
                            type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            // id="exampleFormControlInput11"
                            className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                            placeholder="Confirm Password"
                          />
                        </div>

                        {/* <!--Submit button--> */}
                        <div class="mb-12 pb-1 pt-1 text-center">
                          <button
                            onClick={signUp}
                            class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style={{
                              background:
                                'linear-gradient(to right, #6D6CC7, #8B4BC7, #9542C7, #b44593)',
                            }}
                          >
                            Create Account
                          </button>

                          {/* <!--Forgot password link--> */}
                          {/* <a href="#!">Forgot password?</a> */}
                        </div>

                        {/* <!--Register button--> */}
                        <div class="flex items-center justify-between pb-6">
                          <p class="mb-0 mr-2">Already have an account?</p>
                          <button
                            type="button"
                            class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={redirectToLogin}
                          >
                            Login
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>

                  {/* <!-- Right column container with background and description--> */}
                  <div
                    class="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                    style={{
                      background:
                        'linear-gradient(to right, #6D6CC7, #8B4BC7, #9542C7)',
                    }}
                  >
                    <div class="px-4 py-6 text-white md:mx-6 md:p-12">
                      <h4 class="mb-6 text-xl font-semibold">
                        We are more than just a store
                      </h4>
                      <p class="text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignupScreen;
