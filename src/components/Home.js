import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Home.module.css'; // Import the CSS module

const Home = () => {
    return (
        <motion.div
            className={styles.home} // Add the CSS module class here
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
        >
            <h1>Home</h1>
            <p>Welcome to my portfolio website! My name is Yash Bhatia, I'm a Computer Science student at Saint Louis University, graduating in 2024. I have a diverse set of skills, ranging from Java, C/C++, JavaScript, HTML, CSS, Python, React Js, to Node Js and many more.</p>
            <p>Please navigate through the website to learn more about my education, skills, experience, projects and how to get in touch with me.</p>
        </motion.div>
    );
};

export default Home;
