'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = ({ aboutObject }) => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title={aboutObject.aboutAlgaeStore} textStyles="text-center" />

      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center"
      >
        <span>{aboutObject.introducing} </span>
        <span className="font-extrabold text-green-600">
          {aboutObject.title} :
        </span>{' '}
        {aboutObject.premiumHub}
        <br />
        {aboutObject.aboutAlgaeStorePara}
        <br />
        <br />
      </motion.p>
    </motion.div>
  </section>
);
export default About;
