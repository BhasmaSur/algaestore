'use client';

import React, { useState, useEffect } from 'react';
import './styles.css';
import { useRouter, usePathname } from 'next/navigation';
import { sendEmail } from '../../services/emailService';
import { LottieAnimation } from '../../components';
import { getLanguageCookie } from '../../utils/loginUtils';
import { useTranslation } from '../../i18n';
const page = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [userProfileData, setUserProfileData] = useState({});
  const [languageObject, setLanguageObject] = useState({});

  useEffect(() => {
    getLanguageData();
  }, []);

  const getLanguageData = async () => {
    const lng = getLanguageCookie();
    const { t } = await useTranslation(lng);
    setLanguageObject({
      forBuyers: t('forBuyers'),
      forBuyersPara: t('forBuyersPara'),
      submitBuyingRequest: t('submitBuyingRequest'),
      countryOfOrigin: t('countryOfOrigin'),
      cityOfOrigin: t('cityOfOrigin'),
      fullName: t('fullName'),
      phoneNumber: t('phoneNumber'),
      email: t('email'),
      send: t('send'),
      india: t('india'),
      goa: t('goa'),
      jasonChris: t('jasonChris'),
      someoneEmail: t('someoneEmail'),
      organisationName: t('organisationName'),
      industry: t('industry'),
      additionalInfo: t('additionalInfo'),
      title: t('title'),
      takePainOut: t('takePainOut'),
      algaeStoreForBuyerInfo : t('algaeStoreForBuyerInfo'),
      step1 : t('step1'),
      step2 : t('step2'),
      step3 : t('step3'),
      submitBuyingRequest : t('submitBuyingRequest'),
      buyingStep2 : t('buyingStep2'),
      buyingStep3 : t('buyingStep3'),
      noUpfrontCost : t('noUpfrontCost')
    });
  };
  const setFieldValue = (fieldValue, fieldName) => {
    let changedValue = userProfileData;
    changedValue[fieldName] = fieldValue;
    setUserProfileData((prevUserProfileData) => ({
      ...userProfileData,
      ...changedValue,
    }));
  };
  const router = useRouter();

  const handleSubmit = () => {
    setIsLoading(true);
    const message = `Name : ${userProfileData.name}\n Organisation : ${userProfileData.organisationName}\n Industry : ${userProfileData.industry}\n Phone Number : ${userProfileData.phone}\n Email : ${userProfileData.email}`;
    const payload = {
      from_name: 'Alage Store',
      to_name: 'Admin',
      heading: 'A new buying request : ',
      message: message,
      to_email: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
    };
    sendEmail(payload).then((emailRes) => {
      if (emailRes) {
        setIsLoading(false);
        alert(
          'Your buying request is sent to our admin, will contact you soon.'
        );
        router.push('/');
      }
    });
  };

  return (
    <>
      {isLoading && <LottieAnimation />}
      {!isLoading && (
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-violet-200">
            <div className="p-6 md:p-20">
              <h1 className="text-3xl font-semibold text-gray-800 mb-4 md:mb-10 pl-6">
                {languageObject.forBuyers}
              </h1>
              <div className="p-6 md:mb-12">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-800 mb-4 md:mb-10">
                    {languageObject.takePainOut}
                  </h2>
                </div>
                <div>
                  <h1 className="text-xl text-gray-800 mb-4 md:mb-10">
                    {languageObject.algaeStoreForBuyerInfo}
                  </h1>
                </div>
                <div>
                  <h1 className="text-xl text-gray-800 mb-2 md:mb-4">
                    <span className="text-2xl font-semibold text-gray-800 mb-2 md:mb-4">{languageObject.step1} : </span>{languageObject.submitBuyingRequest} 
                  </h1>
                  <h1 className="text-xl text-gray-800 mb-2 md:mb-4">
                    <span className="text-2xl font-semibold text-gray-800 mb-2 md:mb-4">{languageObject.step2} : </span>{languageObject.buyingStep2} 
                  </h1>
                  <h1 className="text-xl text-gray-800 mb-2 md:mb-4">
                    <span className="text-2xl font-semibold text-gray-800 mb-2 md:mb-4">{languageObject.step3} : </span>{languageObject.buyingStep3} 
                  </h1>
                </div>
                <div>
                  <h1 className="text-sm text-gray-800 mb-4 md:mb-10">
                    {languageObject.noUpfrontCost}
                  </h1>
                </div>
              </div>
              <div className="text-center">
                {/* Image */}
                <img src={'/bg356.png'} alt="img" width={100} height={100} className="mx-auto mb-0" />
              </div>
            </div>
          </div>
          <div className="md:w-1/2 bg-white">
            <div className="p-6 md:p-20">
              <h2 className="text-2xl font-semibold mb-6">
                {languageObject.submitBuyingRequest}
              </h2>
              <form>
                <div className="mb-4">
                  <label htmlFor="organisationName" className="block mb-2 font-medium">
                    {languageObject.organisationName}
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'organisationName')}
                    value={userProfileData.organisationName}
                    type="text"
                    id="country"
                    placeholder={languageObject.title}
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="industry" className="block mb-2 font-medium">
                    {languageObject.industry}
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'industry')}
                    value={userProfileData.industry}
                    type="text"
                    id="city"
                    placeholder={languageObject.title}
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="fullname" className="block mb-2 font-medium">
                    {languageObject.fullName}
                  </label>
                  <input
                    onChange={(e) => setFieldValue(e.target.value, 'name')}
                    value={userProfileData.name}
                    type="text"
                    id="fullname"
                    placeholder={languageObject.jasonChris}
                    className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="phone" className="block mb-2 font-medium">
                    {languageObject.phoneNumber}
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
                    {languageObject.email}
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
                <div className="mb-4">
                  <label htmlFor="interest" className="block mb-2 font-medium">
                    {languageObject.additionalInfo}
                  </label>
                  <textarea
                    onChange={(e) => setFieldValue(e.target.value, 'interest')}
                    value={userProfileData.interest}
                    id="interest"
                    placeholder={languageObject.additionalInfo}
                    className="w-full bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button
                    onClick={handleSubmit}
                    type="button"
                    className="w-full px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600"
                  >
                    {languageObject.send}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default page;
