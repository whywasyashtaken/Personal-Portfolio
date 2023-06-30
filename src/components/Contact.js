import React from 'react';
import styles from './styles/Contact.module.css';
import { motion } from 'framer-motion';
import githubIcon from './icons/github.png';
import phoneIcon from './icons/phone.png';
import linkedinIcon from './icons/linkedin.png';
import youtubeIcon from './icons/youtube.png';
import twitterIcon from './icons/twitter.png';
import emailIcon from './icons/gmail.png';

function Contact() {
  return (
    <motion.div
      className={styles.home}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.contact}>
        <div className={styles.contactInfo}>
          <img src={emailIcon} alt="Email" className={`${styles.icon} ${styles.emailIcon}`} />
          : <a href="mailto:ybhatia@slu.edu">ybhatia@slu.edu</a>
        </div>
        <div className={styles.contactInfo}>
          <img src={phoneIcon} alt="Phone" className={`${styles.icon} ${styles.phoneIcon}`} />
          : <a href="tel:+13148146036">+1 (314)-814-6036</a>
        </div>
        <div className={styles.socialIcons}>
          <a href="https://github.com/yashb196" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" className={`${styles.icon} ${styles.socialIcon}`} />
          </a>
          <a href="https://www.linkedin.com/in/yashbhatia238/" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className={`${styles.icon} ${styles.socialIcon}`} />
          </a>
          <a href="https://www.youtube.com/@BhatiaGamingTM" target="_blank" rel="noopener noreferrer">
            <img src={youtubeIcon} alt="YouTube" className={`${styles.icon} ${styles.socialIcon}`} />
          </a>
          <a href="https://twitter.com/ykb238?s=21&t=iLoOeYdJfBqY_tvJ51NGLg" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className={`${styles.icon} ${styles.socialIcon}`} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default Contact;
