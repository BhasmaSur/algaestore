"use client"
import { useEffect, useState } from 'react';
import { getLanguageCookie } from '../../utils/loginUtils';
import { useTranslation } from '../../i18n';

const productTypesDetails = [{}];

const Page = () => {
  const [languageObject, setLanguageObject] = useState({});

  useEffect(() => {
    getLanguageData();
  }, []);

  const getLanguageData = async () => {
    const lng = getLanguageCookie();
    const { t } = await useTranslation(lng);
    setLanguageObject({
      sargassum: t('sargassum'),
      sargassumPara: t('sargassumPara'),
      kappaphycusAlvarezii: t('kappaphycusAlvarezii'),
      kappaphycusAlvareziiPara: t('kappaphycusAlvareziiPara'),
      ulvaLactuca: t('ulvaLactuca'),
      ulvaLactucaPara: t('ulvaLactucaPara'),
      geledium: t('geledium'),
      gelediumPara: t('gelediumPara'),
      gracillaria: t('gracillaria'),
      gracillariaPara: t('gracillariaPara'),
      productTypes: t('productTypes'),
    });
  };
  return (
    <div className="text-center py-4">
      <section class="text-dark body-font overflow-hidden bg-white bg-[url('/nature-2616239_1920.jpg')]">
        <p className="text-dark text-lg mt-20 mb-4 lg:text-5xl lg:mb-20">
          {languageObject.productTypes}
        </p>
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 h-96 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full object-cover object-center rounded"
              src={'https://res.cloudinary.com/dxuiv9rpq/image/upload/v1697396490/ydihcdrrvq0n8we1eils.png'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {languageObject.sargassum}
              </h1>
              <p class="leading-relaxed">{languageObject.sargassumPara}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="text-dark body-font overflow-hidden bg-white bg-[url('/underwater-2966572_1920.jpg')]">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 w-full h-96 object-center rounded order-first lg:order-last"
              src={'https://res.cloudinary.com/dxuiv9rpq/image/upload/v1697396490/ea8lx42nrcl6b8uyi85f.png'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {languageObject.kappaphycusAlvarezii}
              </h1>
              <p class="leading-relaxed">
                {languageObject.kappaphycusAlvareziiPara}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="text-dark body-font overflow-hidden bg-white bg-[url('/nature-2616239_1920.jpg')]">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 h-96 w-full object-cover object-center rounded order-first lg:order-first"
              src={'https://res.cloudinary.com/dxuiv9rpq/image/upload/v1697396490/lqfs21mfksakvphhnur2.png'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {languageObject.ulvaLactuca}
              </h1>
              <p class="leading-relaxed">{languageObject.ulvaLactucaPara}</p>
            </div>
          </div>
        </div>
      </section>
      <section class="text-dark body-font overflow-hidden bg-white bg-[url('/underwater-2966572_1920.jpg')]">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 h-96 w-full object-cover object-center rounded order-first lg:order-last"
              src={'https://res.cloudinary.com/dxuiv9rpq/image/upload/v1697396490/ylqrjl3bvwt2iwckbv5z.png'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {languageObject.geledium}
              </h1>
              <p class="leading-relaxed">{languageObject.gelediumPara}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="text-dark body-font overflow-hidden bg-white bg-[url('/nature-2616239_1920.jpg')]">
        <div class="container px-5 py-24 mx-auto">
          <div class="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              class="lg:w-1/2 h-96 w-full object-cover object-center rounded lg:order-first"
              src={'https://res.cloudinary.com/dxuiv9rpq/image/upload/v1697396490/t271yfvonnmckheoxoti.png'}
            />
            <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 class="text-gray-900 text-3xl title-font font-medium mb-1">
                {languageObject.gracillaria}
              </h1>
              <p class="leading-relaxed">{languageObject.gracillariaPara}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Page;
