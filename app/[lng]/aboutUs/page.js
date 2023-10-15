'use client';
import { useRouter } from 'next/navigation';
import { ABOUT_US_DETAILS } from '../../constants/aboutUsDetails';
import { useState, useEffect } from 'react';
import { getCookieObject, getLanguageCookie } from '../../utils/loginUtils';
import { useTranslation } from '../../i18n';

const Page = () => {
  const [aboutUsObject,setAboutUsObject] = useState({})

  useEffect(()=>{
    getLanguageData()
  },[])

  const getLanguageData = async ()=>{
    const lng = getLanguageCookie()
    const { t } = await useTranslation(lng);
    setAboutUsObject({
      aboutUs : t('aboutUs'),
      aboutUsPara : t('aboutUsPara'),
      unmatchedAccessibility : t('unmatchedAccessibility'),
      unmatchedAccessibilityPara : t('unmatchedAccessibilityPara'),
      seamlesslyStreamlinedTransactions : t('seamlesslyStreamlinedTransactions'),
      seamlesslyStreamlinedTransactionsPara : t('seamlesslyStreamlinedTransactionsPara'),
      customizedSearch : t('customizedSearch'),
      customizedSearchPara : t('customizedSearchPara'),
      support247 : t('support247'),
      support247Para : t('support247Para'),
      globalReach : t('globalReach'),
      globalReachPara : t('globalReachPara'),
      futureGrowth : t('futureGrowth'),
      futureGrowthPara : t('futureGrowthPara'),
      joinAlgaeStorePara : t('joinAlgaeStorePara'),
      registerHere : t('registerHere'),
    })
  }
  const router = useRouter();
  const redirectToRegister = () => {
    router.push('/signup');
  };
  return (
    <div className="text-center bg-gray-100 min-h-screen p-4 bg-[url('/bg357.jpg')]">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">{aboutUsObject.aboutUs}</h1>
        <p className="text-gray-600">
          {aboutUsObject.aboutUsPara}
        </p>
        <br />

        {ABOUT_US_DETAILS.map((aboutUs, index) => {
          return (
            <>
              <div className="text-left">
                <span className="font-extrabold text-dark">
                  {index + 1}. {aboutUsObject[aboutUs.heading]} :
                </span>{' '}
                {aboutUsObject[aboutUs.textMessage]}
              </div>
              <br />
            </>
          );
        })}
        <p className="text-gray-600">
          {aboutUsObject.joinAlgaeStorePara}
        </p>
        <button
          onClick={redirectToRegister}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10"
        >
          {aboutUsObject.registerHere}
        </button>
      </div>
    </div>
  );
};

export default Page;
