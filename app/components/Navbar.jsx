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
import NavbarContent from './NavbarContent';


const Navbar = ({navObject}) => {

  return (
    <div>
      <Provider store={store}>
        <NavbarContent navObject={navObject}/>
      </Provider>
    </div>
  );
};

export default Navbar;
