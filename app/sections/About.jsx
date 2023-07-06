'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Algae Store" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white">Algae Store </span> is a comprehensive platform dedicated to facilitating the buying and selling of <span className="font-extrabold text-white"> Seaweed </span>products between <span className="font-extrabold text-white">Farmers </span>and <span className="font-extrabold text-white">Sellers</span> . Our mission is to connect seaweed farmers with interested buyers , creating a sustainable marketplace for this unique and valuable resource . To ensure a smooth and efficient experience for all users, we have developed various features and functionalities that cater to the specific needs of our community.<br /><br />
        {/* <span className="font-extrabold text-white">
          {' '}
          madness of the metaverse{' '}
        </span>
        today, using only<span className="font-extrabold text-white"> VR </span>
        devices you can easily
        <span className="font-extrabold text-white"> explore </span>the
        metaverse world you want, turn your dreams into reality. Let's explore
        the madness of the meaverse by scrolling down. */}
      </motion.p>
    </motion.div>
  </section>
);

export default About;
