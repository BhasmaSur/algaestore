'use client';

import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getLanguageCookie, setCookieDetails } from '../../utils/loginUtils';
import httpService from '../../services/httpService';
import { API, CONTROLLERS, METHODS } from '../../constants/apiDetails';
import { USER_BUYER_ROLE } from '../../constants/userConstants';
import { useTranslation } from '../../i18n';

const LoginScreen = () => {
  const router = useRouter();
  const currentscreen = useSelector((store) => store.cart.loginscreen);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [languageObject, setLanguageObject] = useState({});

  useEffect(() => {
    getLanguageData();
  }, []);

  const getLanguageData = async () => {
    const lng = getLanguageCookie();
    const { t } = await useTranslation(lng);
    setLanguageObject({
      welcomeAlgaeStore: t('welcomeAlgaeStore'),
      username: t('username'),
      password: t('password'),
      logIn: t('logIn'),
      logout: t('logout'),
      loginPara: t('loginPara'),
      dontHaveAccount: t('dontHaveAccount'),
      register: t('register'),
      pleaseLogin: t('pleaseLogin'),
      moreThanStore: t('moreThanStore'),
    });
  };

  const signIn = () => {
    const userDetails = {
      username,
      password,
    };
    httpService(CONTROLLERS.login, METHODS.post, userDetails, API).then(
      (res) => {
        if (res) {
          setCookieDetails({
            username: username,
            jwtToken: res.data.jwtToken,
            type: res.data.type,
          });
          router.push('/');
        }
      }
    );
  };

  const redirectToSignUp = () => {
    router.push('/signup');
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
                          {languageObject.welcomeAlgaeStore}
                        </h4>
                      </div>

                      <form>
                        <p class="mb-4">{languageObject.pleaseLogin}</p>
                        {/* <!--Username input--> */}
                        <div class="relative mb-4" data-te-input-wrapper-init>
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="username"
                          >
                            {languageObject.username}
                          </label>
                          <input
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            type="text"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            // id="exampleFormControlInput1"
                            placeholder={languageObject.username}
                          />
                        </div>

                        {/* <!--Password input--> */}
                        <div class="relative mb-4" data-te-input-wrapper-init>
                          <label
                            class="block text-gray-700 text-sm font-bold mb-2"
                            for="password"
                          >
                            {languageObject.password}
                          </label>
                          <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            class="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            placeholder={languageObject.password}
                          />
                        </div>

                        {/* <!--Submit button--> */}
                        <div class="mb-12 pb-1 pt-1 text-center">
                          <button
                            class="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            style={{
                              background:
                                'linear-gradient(to right, #6D6CC7, #8B4BC7, #9542C7, #b44593)',
                            }}
                            onClick={signIn}
                          >
                            {languageObject.logIn}
                          </button>

                          {/* <!--Forgot password link--> */}
                          {/* <a href="#!">Forgot password?</a> */}
                        </div>

                        {/* <!--Register button--> */}
                        <div class="flex items-center justify-between pb-6">
                          <p class="mb-0 mr-2">
                            {languageObject.dontHaveAccount}
                          </p>
                          <button
                            type="button"
                            class="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                            data-te-ripple-init
                            data-te-ripple-color="light"
                            onClick={redirectToSignUp}
                          >
                            {languageObject.register}
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
                        {languageObject.moreThanStore}
                      </h4>
                      <p class="text-sm">{languageObject.loginPara}</p>
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

export default LoginScreen;
