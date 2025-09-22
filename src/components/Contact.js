import React from 'react';
import styles from './styles/Contact.module.css';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaYoutube, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';

function Contact() {
  const contactMethods = [
    {
      type: "Email",
      value: "ybhatia@slu.edu",
      url: "mailto:ybhatia@slu.edu",
      icon: FaEnvelope,
      description: "Send me an email"
    },
    {
      type: "Phone",
      value: "+1 (314)-814-6036",
      url: "tel:+13148146036",
      icon: FaPhone,
      description: "Call me directly"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/yashb196",
      icon: FaGithub,
      description: "View my code repositories"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yashbhatia238/",
      icon: FaLinkedin,
      description: "Connect professionally"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@BhatiaGamingTM",
      icon: FaYoutube,
      description: "Watch my content"
    },
    {
      name: "Twitter",
      url: "https://twitter.com/ykb238?s=21&t=iLoOeYdJfBqY_tvJ51NGLg",
      icon: FaTwitter,
      description: "Follow my updates"
    }
  ];

  return (
    <div className={styles.contactWrapper}>
      <div className={styles.contactContainer}>
        {/* Contact Methods */}
        <div className={styles.contactSection}>
          <h2 className={styles.sectionTitle}>Get In Touch</h2>
          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.contactCard}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => window.open(method.url, '_blank', 'noopener,noreferrer')}
                >
                  <div className={styles.cardIcon}>
                    <IconComponent size={24} color="#e50914" />
                  </div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{method.type}</h3>
                    <p className={styles.cardValue}>{method.value}</p>
                    <p className={styles.cardDescription}>{method.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Social Links */}
        <div className={styles.socialSection}>
          <h2 className={styles.sectionTitle}>Connect With Me</h2>
          <div className={styles.socialGrid}>
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <motion.div
                  key={index}
                  className={styles.socialCard}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.1 }}
                  onClick={() => window.open(social.url, '_blank', 'noopener,noreferrer')}
                >
                  <div className={styles.socialIcon}>
                    <IconComponent size={28} color="#e50914" />
                  </div>
                  <div className={styles.socialContent}>
                    <h3 className={styles.socialName}>{social.name}</h3>
                    <p className={styles.socialDescription}>{social.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;