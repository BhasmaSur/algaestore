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
        <span>Introducing </span>
        <span className="font-extrabold text-green-600">
          Algae Store :
        </span>{' '}
        Your Premier B2B Hub for Seaweed Trading
        <br />
        Are you in the business of seaweed cultivation, processing, or
        distribution? Look no further. Algae Store is your one-stop digital
        destination, revolutionizing the way seaweed buyers and sellers connect,
        collaborate, and thrive.
        <br />
        <br />
      </motion.p>
    </motion.div>
  </section>
);
export default About;
