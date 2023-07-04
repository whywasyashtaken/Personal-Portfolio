// components/Experience.js

import React from 'react';
import styles from './styles/Experience.module.css';
import { motion } from 'framer-motion';

function Experience() {
  
  return (
    <motion.div
      className={styles.experienceContainer}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.experienceContent}>
        <ul>
          <li><b>Graduate Assistant at Saint Louis University</b>
            <ul> 
              <li>Working as a Tech Lead for open-source projects.</li> 
              <li>Organizing Scrum Meetings, and problem-solving sessions.</li> 
              <li>Working with my team to build software from scratch while learning new technologies.</li>
              <li>Ensuring quality and following Scrum Principles.</li>
              <li>The Links for my current projects are : <a href="https://github.com/oss-slu/lrda_mobile ">LRDA</a> and <a href="https://github.com/oss-slu/python_tbe">Python TBE</a></li>
            </ul>
          </li>
        </ul>
        <p>
          My Previous Positions were as follows:
        </p>
        <ul>
          <li>
            <b>Manager/Senior Engineer at Eezee Business Machines Mumbai</b>
            <ul>
              <li>Working as a hardware manager assembling and troubleshooting computers/laptops and providing logical solutions to their issues.</li>
              <li>Participated in daily meetings with employees and clients.</li>
              <li>Ensured quality and effectiveness of the product.</li>
              <li>Managed a team of developers to deliver on time, within budget & with high-quality standards.</li>
            </ul>
          </li>
          <p></p>
          <li>
            <b>Full Stack Developer at HeadStrait Exceptional Software Mumbai</b>
            <ul>
              <li>To create a web-based software with TDD (Test Driven Development) approach, resulting in smoother and error-free software.</li>
              <li>Participated in weekly Scrum Meetings, addressing common issues to the application and working to provide an efficient solution.</li>
              <li>Implemented CICD Pipeline.</li>
            </ul>
          </li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Experience;
