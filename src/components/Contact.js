// components/About.js

import React from 'react';
import styles from './styles/Contact.module.css';

function Contact() {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.header}>About Me</h2>
      <p className={styles.description}>I am a graduate assistant at Saint Louis University, working as a Tech Lead for open-source projects. I build software from scratch while learning new technologies and ensuring quality by following Scrum principles.</p>
    </div>
  );
}

export default Contact;
