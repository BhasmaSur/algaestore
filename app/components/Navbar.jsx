'use client';

import { motion } from 'framer-motion';

import styles from '../../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';

const Navbar = ({ navObject }) => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className={`${styles.innerWidth} max-auto flex justify-between gap-8`}>
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain"
      />
      <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
        {`${navObject.algae} ${navObject.store}`}
      </h2>
      <div className='flex gap-4'>
        <Link href="/store">
          <img
            src="/Store.svg"
            alt="menu"
            className="w-[24px] h-[24px] object-contain fill-white"
          />
        </Link>
        <img
          src="/menu.svg"
          alt="menu"
          className="w-[24px] h-[24px] object-contain"
        />
      </div>
    </div>
  </motion.nav>
);

export default Navbar;
