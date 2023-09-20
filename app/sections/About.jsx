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
      <TypingText title="About Algae Store" textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center"
      >
        <span className="font-extrabold text-green-600">Algae Store</span> is a
        comprehensive platform dedicated to facilitating the buying and selling
        of <span className="font-extrabold text-green-600"> Seaweed </span>
        products between{' '}
        <span className="font-extrabold text-green-600">Buyers </span>and{' '}
        <span className="font-extrabold text-green-600">Sellers</span> . Our
        mission is to connect seaweed sellers with interested buyers , creating
        a sustainable marketplace for this unique and valuable resource. To
        ensure a smooth and efficient experience for all users, we have
        developed various features and functionalities that cater to the
        specific needs of our community.
        <br />
        <br />
      </motion.p>
    </motion.div>
  </section>
);
export default About;
