'use client';
import React, { useState, useEffect } from 'react';
import { sendEmail } from '../../services/emailService';
import { getLanguageCookie } from '../../utils/loginUtils';
import { useTranslation } from '../../i18n';

const ContactUsPage = () => {
  const [name, setName] = useState();
  const [contactEmail, setContactEmail] = useState();
  const [message, setMessage] = useState('');
  const [languageObject, setLanguageObject] = useState({});

  useEffect(() => {
    getLanguageData();
  }, []);

  const getLanguageData = async () => {
    const lng = getLanguageCookie();
    const { t } = await useTranslation(lng);
    setLanguageObject({
      contactUs: t('contactUs'),
      getInTouch: t('getInTouch'),
      getInTouchPara: t('getInTouchPara'),
      email: t('email'),
      phoneNumber: t('phoneNumber'),
      contactForm: t('contactForm'),
      yourName: t('yourName'),
      yourContactEmail: t('yourContactEmail'),
      yourMessage: t('yourMessage'),
      submit: t('submit'),
    });
  };

  const sendContactEmail = () => {
    const emailPayload = {
      from_name: 'Alage Store',
      to_name: 'Sakshi Gore',
      heading: `${name}, Email : ${contactEmail} wants to send you message on Algae Store,`,
      item_message: message,
      to_email: process.env.NEXT_PUBLIC_SUPERUSER_EMAIL,
    };
    sendEmail(emailPayload).then((emailRes) => {
      if (emailRes) {
        alert('Your Message is send to the admin, we will contact you soon');
      }
    });
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[url('/underwater-2966572_1920.jpg')]">
      <div className="w-3/4 relative h-11 md:h-auto mb-10">
        {/* <img
          src="https://img.freepik.com/premium-photo/green-art-plants-abstract-composition_443830-3554.jpg?w=1060"
          alt="Contact Us"
          className="w-full h-full object-cover rounded-t-lg md:rounded-l-lg"
        /> */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <h1 className="text-2xl font-bold">{languageObject.contactUs}</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full md:w-2/3">
        <div className="p-8 rounded-lg  mb-4 md:mb-0">
          <h2 className="text-xl font-bold mb-2">
            {languageObject.getInTouch}
          </h2>
          <p className="text-dark mb-4">{languageObject.getInTouchPara}</p>
          <div className="text-dark">
            <p>{languageObject.email} : info@algaestore.in</p>
            <p>{languageObject.phoneNumber} : +91 7741944777</p>
          </div>
          <h2 className="text-xl font-bold mb-4 mt-10">
            {languageObject.contactForm}
          </h2>
          <form className="space-y-4">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder={languageObject.yourName}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <input
              value={contactEmail}
              onChange={(e) => setContactEmail(e.target.value)}
              type="email"
              placeholder={languageObject.yourContactEmail}
              className="w-full border border-gray-300 p-2 rounded-md"
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={languageObject.yourMessage}
              className="w-full border border-gray-300 p-2 rounded-md resize-none"
              rows="4"
            />
            <button
              onClick={sendContactEmail}
              type="submit"
              className="w-full bg-violet-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            >
              {languageObject.submit}
            </button>
          </form>
        </div>
        <div className="p-8 rounded-lg w-full md:ml-4">
          <img
            alt="ecommerce"
            class="lg:w-full w-full object-cover object-center rounded order-first lg:order-last"
            src={'https://res.cloudinary.com/dxuiv9rpq/image/upload/v1697397940/rdo8bxmzhh4lgg2z9gaj.png'}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;
