import React from 'react';
import { motion } from 'framer-motion';
import CustomNavbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About'
import Projects from './components/Projects';
import Footer from './components/Footer';
import './main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
    <div>
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <CustomNavbar />
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Hero />
      </motion.div>
      </div>
      <About />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
