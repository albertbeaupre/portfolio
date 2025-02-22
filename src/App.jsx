import { motion } from "framer-motion";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Hero } from "./components/Albert/Albert";
import { Navbar } from "./components/Navbar/Navbar";
import { Projects } from "./components/Projects/Projects";

// Slide-in animation variant
const slideInVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: (custom) => ({
    opacity: 1,
    x: 0,
    transition: { delay: custom * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

function App() {
  return (
    <div className={styles.App}>
      <motion.div initial="hidden" animate="visible" variants={slideInVariant} custom={0}>
        <Navbar />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={slideInVariant} custom={1}>
        <Hero />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={slideInVariant} custom={2}>
        <About />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={slideInVariant} custom={3}>
        <Experience />
      </motion.div>
      <motion.div initial="hidden" animate="visible" variants={slideInVariant} custom={4}>
        <Projects />
      </motion.div>
    </div>
  );
}

export default App;