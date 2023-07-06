// import Link from 'next/link'
// import { Trans } from 'react-i18next/TransWithoutContext'
// import { languages } from '../i18n/settings'
// import { useTranslation } from '../i18n'

// const Footer = async ({ lng }) => {
//   const { t } = await useTranslation(lng, 'footer')
//   return (
//     <footer style={{ marginTop: 50 }}>
//       <Trans i18nKey="languageSwitcher" t={t}>
//         Switch from <strong>{{lng}}</strong> to:{' '}
//       </Trans>
//       {languages.filter((l) => lng !== l).map((l, index) => {
//         return (
//           <span key={l}>
//             {index > 0 && (' or ')}
// <Link href={`/${l}`}>
//   {l}
// </Link>
//           </span>
//         )
//       })}
//     </footer>
//   )
// }

// export default Footer;
'use client';

import { motion } from 'framer-motion';
import { socials } from '../constants';
import Link from 'next/link'
import styles from '../../styles';
import { footerVariants } from '../utils/motion';
import { languages } from '../constants/languages';

const Footer = ({ footerObject }) => {
  const getLanguage = (l) => {
    const choosenLanguage = Object.keys(languages).filter((lang)=> languages[lang].includes(l))
    return choosenLanguage;
  };
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="footer-gradient" />
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            {footerObject.title}
          </h4>
          <div>
            <h4 className="font-bold md:text-[34px] text-[24px] text-white">
              {footerObject.selectLanguage}
            </h4>
            <div className="flex flex-col items-center">
              {footerObject.languageList.map((l) => {
                return (
                  <Link href={`/${getLanguage(l)}`}>
                    <h5
                      className="text-white cursor-pointer"
                    >
                      {l}
                    </h5>
                  </Link>
                );
              })}
            </div>
          </div>
          {/* <button
          type="button"
          className="flex items-center h-fit py-4 px-6 bg-[#25618B] rounded-[32px] gap-[12px]"
        >
          <img
            src="/uparrow.svg"
            alt="uparrow"
            className="w-[24px] h-[24px] object-contain"
          />
          <span className="font-normal text-[16px] text-white">PROFILES</span>
        </button> */}
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-white opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            {/* <h4 className="font-extrabold text-[24px] text-white">ALGAETECH</h4> */}
            <p className="font-normal text-[14px] text-white opacity-50">
              Copyright © 2023 Enso . All Rights Reserved .
            </p>

            <div className="flex gap-4">
              {socials.map((social) => (
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="w-[24px] h-[24px] object-contain cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
