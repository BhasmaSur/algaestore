"use client";

import { motion, AnimatePresence, useCycle } from "framer-motion";
import styles from "../../styles";
import { navVariants } from "../utils/motion";
import Link from "next/link";
import "./styles.css";
import { Provider } from "react-redux";
import store from "../utils/store";
import { useState } from "react";
import { getUserDetailsFromCookie } from "../services/auth";
import { useEffect } from "react";
import { USER_BUYER_ROLE } from "../constants/userConstants";
import { BUYER_SETTINGS, FARMER_SETTINGS } from "../constants/settings";
import { menuDetails } from "../constants/menuDetails";
import { useRouter } from "next/navigation";

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
  const [openMenu, cycleOpenMenu] = useCycle(false, true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [links, setLinks] = useState([]);
  const router = useRouter();

  const redirectToPage = (redirectTo) => {
    console.log(redirectTo);
  };

  const openUsersProfile = () =>{
    if(links === BUYER_SETTINGS){
      router.push("/buyer-profile");
    }else{
      router.push("/seller-profile");
    }
  }
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
          className={`${styles.xPaddings} py-8 relative bg-gradient-to-r from-gray-500 to-gray-900`}
        >
          <div />
          <div
            className={`${styles.innerWidth} max-auto flex justify-between gap-8`}
          >
            <img
              src="/algaelogo.png"
              alt="search"
              className="w-[100px] object-contain"
            />
            <div class="invisible lg:visible">
              <div
                class="hidden w-full md:block md:w-auto"
                id="navbar-dropdown"
              >
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
                  {menuDetails.map((menu) => {
                    return (
                      <li
                        class="block py-2 pl-3 pr-4 cursor-pointer text-white hover:bg-sky-700 rounded"
                        onClick={() => redirectToPage(menu.to)}
                      >
                        {menu.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
            <div className="flex gap-4">
              <Link href="/store">
                <img
                  src="/store.svg"
                  alt="menu"
                  className="w-[24px] h-[24px] object-contain fill-white text-green-600"
                />
              </Link>
              {isLoggedIn && (
                <img
                  className="w-[24px] h-[24px] object-contain fill-white text-green-600 cursor-pointer"
                  src="/defaultProfile.svg"
                  alt="Rounded avatar"
                  onClick={openUsersProfile}
                />
              )}
              {!isLoggedIn && (
                <Link
                  href="/login"
                  className="text-white p-1 text-xs"
                >
                  Login
                </Link>
              )}
              <div class="lg:invisible">
                {openMenu ? (
                  <img
                    src="/close.svg"
                    alt="close"
                    className="w-[25px] h-[25px] object-contain "
                    style={{ filter: "brightness(100%)", fill: "white" }}
                    onClick={cycleOpenMenu}
                  />
                ) : (
                  <img
                    src="/menu.svg"
                    alt="menu"
                    className="w-[24px] h-[24px] object-contain cursor-pointer"
                    onClick={cycleOpenMenu}
                  />
                )}
              </div>
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
                      <div>
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
                      <Link href={"/market"} key={10}>
                        <motion.a
                          key={10}
                          // href={to}
                          whileHover={{ scale: 1.1 }}
                          variants={itemVariants}
                          onClick={() => {
                            // handleDispatch(name);
                          }}
                        >
                          {"Logout"}
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
        <AnimatePresence>
          {openMenu && (
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
                  {menuDetails.map(({ name, to, id }) => (
                    <div>
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
                </div>
              </motion.div>
            </motion.aside>
          )}
        </AnimatePresence>
      </Provider>
    </div>
  );
};

export default NavbarContent;
