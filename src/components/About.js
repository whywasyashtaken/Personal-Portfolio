// components/About.js

import React from 'react';
import styles from './styles/About.module.css';
import { motion } from 'framer-motion';

function About() {
  return (
    <motion.div
    className={styles.about} // Add the CSS module class here
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    <div className={styles.aboutContainer}>
      <div className={styles.descriptionContainer}> {/* New wrapper div */}
        <p className={styles.description}>
          <p>Computer Science Student, looking forward to providing web apps using programming and providing a test-driven development approach to ensure the software has minimal bugs and error-free run. Keen learner and software programmer with extensive experience in the development of apps on both front and back end. Seeking a position to learn and adapt to newer technologies.</p>
          <p>I am a graduate assistant at Saint Louis University, working as a Tech Lead for open-source projects. I build software from scratch while learning new technologies and ensuring quality by following Scrum principles.
            </p> <p>I am also a gamer, I love playing FPS Games and fun fact I also used to stream on youtube the link for which is mentioned in contact below </p>
        </p>
      </div>
    </div>
  </motion.div>
  );
}

export default About;
