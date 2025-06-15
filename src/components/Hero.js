import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <motion.div 
      className="hero-container glass"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="hero-text text-white text-center">
        <h1>¡Bienvenid@ a mi universo digital!</h1>
        <p>Explora mis proyectos, habilidades y pasiones</p>
      </div>

      <motion.img 
        src="/img/astronauta.png"
        alt="Astronauta"
        className="astronauta"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
    </motion.div>
  );
}

export default Hero;
