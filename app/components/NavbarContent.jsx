'use client';

import { motion, AnimatePresence, useCycle } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';
import './styles.css';
import { Provider } from 'react-redux';
import store from '../utils/store';
import { setLoginScreen } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { getUserDetailsFromCookie } from '../services/auth';
import { useEffect } from 'react';
import { USER_BUYER_ROLE } from '../constants/userConstants';
import { BUYER_SETTINGS, FARMER_SETTINGS } from '../constants/settings';

const itemVariants = {
  closed: {
    opacity: 0,
  },
  open: { opacity: 1 },
};

const sideVariants = {
  closed: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: -1,
    },
  },
  open: {
    transition: {
      staggerChildren: 0.2,
      staggerDirection: 1,
    },
  },
};

const NavbarContent = ({ navObject }) => {
  const [open, cycleOpen] = useCycle(false, true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [links, setLinks] = useState([]);
  //   const dispatch = useDispatch();

  //   const handleDispatch = (name) => {
  //     dispatch(setLoginScreen(name));
  //   };

  useEffect(() => {
    const userDetails = getUserDetailsFromCookie();
    if (userDetails) {
      setIsLoggedIn(true);
      if (userDetails.role === USER_BUYER_ROLE) {
        setLinks(BUYER_SETTINGS);
      } else {
        setLinks(FARMER_SETTINGS);
      }
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  return (
    <div>
      <Provider store={store}>
        <motion.nav
          variants={navVariants}
          initial="hidden"
          whileInView="show"
          className={`${styles.xPaddings} py-8 relative`}
        >
          <div className="absolute w-[50%] inset-0 gradient-01" />
          <div
            className={`${styles.innerWidth} max-auto flex justify-between gap-8`}
          >
            <img
              src="/search.svg"
              alt="search"
              className="w-[24px] h-[24px] object-contain"
            />
            <h2 className="font-extrabold text-[24px] leading-[30px] text-white">
              {`${navObject.algae} ${navObject.store}`}
            </h2>
            <div className="flex gap-4">
              <Link href="/store">
                <img
                  src="/Store.svg"
                  alt="menu"
                  className="w-[24px] h-[24px] object-contain fill-white"
                />
              </Link>
              {isLoggedIn && (
                <Link href="/profile">
                  <img
                    className="w-[24px] h-[24px] object-contain fill-white"
                    src="/genericImg.png"
                    alt="Rounded avatar"
                  />
                </Link>
              )}
              {!isLoggedIn && (
                <Link href="/login" className="border-2 text-white p-1 text-xs">
                  Login
                </Link>
              )}
              {open ? (
                <img
                  src="/close.svg"
                  alt="close"
                  className="w-[25px] h-[25px] object-contain "
                  style={{ filter: 'brightness(100%)', fill: 'white' }}
                  onClick={cycleOpen}
                />
              ) : (
                <img
                  src="/menu.svg"
                  alt="menu"
                  className="w-[24px] h-[24px] object-contain"
                  onClick={cycleOpen}
                />
              )}
            </div>
          </div>
        </motion.nav>
        <AnimatePresence>
          {open && (
            <motion.aside
              initial={{ width: 0 }}
              animate={{
                width: 300,
              }}
              exit={{
                width: 0,
                transition: { delay: 0.7, duration: 0.3 },
              }}
            >
              <motion.div
                className="container"
                initial="closed"
                animate="open"
                exit="closed"
                variants={sideVariants}
              >
                <div class="grid grid-cols-1 divide-y-4 w-60">
                  {isLoggedIn &&
                    links.map(({ name, to, id }) => (
                      <div >
                        <Link class="text-lg" href={to} key={id}>
                          <motion.a
                            key={id}
                            // href={to}
                            whileHover={{ scale: 1.1 }}
                            variants={itemVariants}
                            onClick={() => {
                              // handleDispatch(name);
                            }}
                          >
                            {name}
                          </motion.a>
                        </Link>
                      </div>
                    ))}
                    {isLoggedIn && (
                  <div>
                    <Link href={'/market'} key={10}>
                      <motion.a
                        key={10}
                        // href={to}
                        whileHover={{ scale: 1.1 }}
                        variants={itemVariants}
                        onClick={() => {
                          // handleDispatch(name);
                        }}
                      >
                        {'Logout'}
                      </motion.a>
                    </Link>
                  </div>
                )}
                </div>
                
                {!isLoggedIn && <p>You are not logged in</p>}
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </Provider>
    </div>
  );
};

export default NavbarContent;
