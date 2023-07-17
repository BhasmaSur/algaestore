'use client';

import { motion, AnimatePresence, useCycle } from 'framer-motion';
import styles from '../../styles';
import { navVariants } from '../utils/motion';
import Link from 'next/link';
import "./styles.css";
import { Provider } from 'react-redux';
import store from '../utils/store';
import { setLoginScreen } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const links = [
    { name: "Admin", to: "/login", id: 1 },
    { name: "Buyer", to: "/login", id: 2 },
    { name: "Farmer", to: "/login", id: 3 },
];

const itemVariants = {
    closed: {
        opacity: 0
    },
    open: { opacity: 1 }
};

const sideVariants = {
    closed: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: -1
        }
    },
    open: {
        transition: {
            staggerChildren: 0.2,
            staggerDirection: 1
        }
    }
};

const NavbarContent = ({ navObject }) => {

    const [open, cycleOpen] = useCycle(false, true);
    const dispatch = useDispatch();

    const handleDispatch = (name) => {
        dispatch(setLoginScreen(name))
    }

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
                            {open ?
                                <img
                                    src="/close.svg"
                                    alt="close"
                                    className="w-[25px] h-[25px] object-contain "
                                    style={{ filter: 'brightness(100%)', fill: 'white' }}
                                    onClick={cycleOpen}
                                />
                                :
                                <img
                                    src="/menu.svg"
                                    alt="menu"
                                    className="w-[24px] h-[24px] object-contain"
                                    onClick={cycleOpen}
                                />
                            }
                        </div>
                    </div>
                </motion.nav>
                <AnimatePresence>
                    {open && (
                        <motion.aside
                            initial={{ width: 0 }}
                            animate={{
                                width: 300
                            }}
                            exit={{
                                width: 0,
                                transition: { delay: 0.7, duration: 0.3 }
                            }}
                        >
                            <motion.div
                                className="container"
                                initial="closed"
                                animate="open"
                                exit="closed"
                                variants={sideVariants}
                            >
                                {links.map(({ name, to, id }) => (
                                    <Link href={to} key={id}>
                                        <motion.a
                                            key={id}
                                            // href={to}
                                            whileHover={{ scale: 1.1 }}
                                            variants={itemVariants}
                                            onClick={() => { handleDispatch(name) }}
                                        >
                                            {name}
                                        </motion.a>
                                    </Link>
                                ))}
                            </motion.div>
                        </motion.aside>
                    )}
                </AnimatePresence>
            </Provider>
        </div>
    );
};

export default NavbarContent;
