'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = ({ aboutObject }) => (
  <>
    {/* <section className="home-note">
      <h2 className="home-caption01">{aboutObject.aboutAlgaeStorePara}</h2>
    </section> */}
    <section className="home-slider">
      <h3 className="home-header01 mb-10">{aboutObject.aboutAlgaeStore}</h3>
      <div className="home-header04">
        <h2 className="home-heading01">
          {/* <span>{aboutObject.premiumHub}</span> */}
          {/* <span className="home-text12">o</span> */}
          <span className="home-text13">
            {aboutObject.premiumHub}
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </h2>
      </div>
      <div className="home-selector">
        <p className="home-caption05">
          {aboutObject.aboutAlgaeStorePara}
          <span
            dangerouslySetInnerHTML={{
              __html: ' ',
            }}
          />
        </p>
      </div>
    </section>
  </>
);
export default About;
