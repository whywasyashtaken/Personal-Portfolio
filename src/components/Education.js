// components/Education.js

import React from 'react';
import styles from './styles/Education.module.css';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.div
      className={styles.educationContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.educationContent}>
        <div className={styles.courseWrapper}>
          <p className={styles.courseLabel}>
            <b>Masters Course:</b>
          </p>
          <p className={styles.courseInfo}>Computer Science</p>
        </div>
        <div className={styles.courseWrapper}>
          <p className={styles.courseLabel}>
            <b>University:</b>
          </p>
          <p className={styles.courseInfo}>
            Saint Louis University, Missouri, Saint Louis, 2022 - Present
          </p>
        </div>
        <div className={styles.courseWrapper}>
          <p className={styles.courseLabel}>
            <b>Bachelors Course:</b>
          </p>
          <p className={styles.courseInfo}>Computer Engineering</p>
        </div>
        <div className={styles.courseWrapper}>
          <p className={styles.courseLabel}>
            <b>University:</b>
          </p>
          <p className={styles.courseInfo}>
            University of Mumbai, 2016-2019
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default Education;
