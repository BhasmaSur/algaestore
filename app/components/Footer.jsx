"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import Link from "next/link";
import styles from "../../styles";
import { footerVariants } from "../utils/motion";
import { languages } from "../constants/languages";
import PoweredBy from "./Poweredby";

const Footer = ({ footerObject }) => {
  const getLanguage = (l) => {
    const choosenLanguage = Object.keys(languages).filter((lang) =>
      languages[lang].includes(l)
    );
    return choosenLanguage;
  };
  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative bg-[url('/jellyfish-6222849_1920.jpg')]`}
    >
      <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
        <div className="flex items-center justify-between flex-wrap gap-5">
          <h4 className="font-bold md:text-[64px] text-[44px] text-white">
            {footerObject.title}
          </h4>
          <div>
            <h4 className="font-bold md:text-[34px] text-[24px] text-white">
              {footerObject.selectLanguage}
            </h4>
            <div className="flex flex-col items-center text-white">
              {footerObject.languageList.map((l) => {
                return (
                  <Link href={`/${getLanguage(l)}`}>
                    <h5 className="text-white cursor-pointer">{l}</h5>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="mb-[50px] h-[2px] bg-black  opacity-10" />

          <div className="flex items-center justify-between flex-wrap gap-4">
            <PoweredBy />
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/company/algae-store/?viewAsMember=true">
              <img
                key={"Linkdin"}
                src={"/lindin.png"}
                alt={"Linkdin"}
                className="w-[24px] h-[24px] object-contain cursor-pointer"
              />
              </a>
              
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
