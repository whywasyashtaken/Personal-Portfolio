import React from 'react';
import { motion } from 'framer-motion';
import styles from './styles/Home.module.css'; // Import the CSS module
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import { InView } from 'react-intersection-observer';
import Projects from './Projects';
import Contact from './Contact';
import myPhoto from "./icons/my_photo.jpg"

const sectionVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

const Home = () => {
  return (
    <motion.div
      className={styles.home} // Add the CSS module class here
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className={styles.sectionContainer}>
      <InView triggerOnce>
          {({ inView, ref }) => (
         <motion.div id="home" ref={ref} variants={sectionVariants} initial="hidden" animate={inView ? "show" : "hidden"}>
         <h2 className={styles.sectionHeader}>Welcome</h2>
         <img src={myPhoto} alt="me" className={styles.myPhoto} />
         <div className={styles.textWrapper}>
           <div className={styles.description}>
             <h1>Welcome to my portfolio website!</h1>
             <p>
               My name is Yash Bhatia, I'm a Computer Science student at Saint Louis University, graduating in 2024. I have a diverse set of skills, ranging from Java, C/C++, JavaScript, HTML, CSS, Python, React Js, to Node Js and many more.
             </p>
             <p>To know more about my education, skills, experience, projects, etc please scroll through the website thank you .</p>
             <p><a href="https://drive.google.com/file/d/1ojz4WNvXQjEGBF8wu2ieJDClISxbntOt/view?usp=share_link">My Resume</a></p>
           </div>
         </div>
       </motion.div>
       
        
       )}
     </InView>

      </div>
      
      <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
            id="about"
              ref={ref}
              variants={sectionVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <h2 className={styles.sectionHeader}>About Me</h2>
              <About />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
            id="skills" // Update the id attribute here to "skills"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            >
              <h2 className={styles.sectionHeader}>Skills</h2>
              <Skills />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
            id="experience" // Update the id attribute here to "skills"
            ref={ref}
            variants={sectionVariants}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            >
              <h2 className={styles.sectionHeader}>Experience</h2>
              <Experience />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
            id="education"
              ref={ref}
              variants={sectionVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <h2 className={styles.sectionHeader}>Education</h2>
              <Education />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
            id="projects"
              ref={ref}
              variants={sectionVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <h2 className={styles.sectionHeader}>Projects</h2>
              <Projects />
            </motion.div>
          )}
        </InView>

        <InView triggerOnce>
          {({ inView, ref }) => (
            <motion.div
            id="contact"
              ref={ref}
              variants={sectionVariants}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
            >
              <h2 className={styles.sectionHeader}>Contact</h2>
              <Contact />
            </motion.div>
          )}
        </InView>
    </motion.div>
  );
};

export default Home;
