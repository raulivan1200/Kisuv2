"use client"
import React, { useState, useEffect } from 'react';
import { easeInOut, motion } from 'framer-motion';
import styles from "../styles/BigText.module.css"

const AnimatedwText = ({ text, visibleX, visibleY, hiddenX, hiddenY, delay, duration, fontSize }) => {
  const [currentFont, setCurrentFont] = useState(0);
  const [randomChars, setRandomChars] = useState([]);
  const [showRandomChars, setShowRandomChars] = useState(true);

  // Define an array of fonts you want to cycle through
  const fonts = ['Eudoxus','Georgia', 'Arial', 'Helvetica', 'Verdana','Gt-America-EL', 'Times New Roman','Gt-America-EB'];

  // Special characters for the random character effect
  const specialCharacters = "!:[{}]^*()+-+/?";

  const variants = {
    visible: {
      opacity: 1,
      transition: { type: "spring", duration: duration, ease: easeInOut, delay: delay, stiffness: 300, damping: 100, mass: 300 },
    },
    hidden: {
      opacity: 1,
      transition: { type: "spring", duration: duration, ease: easeInOut, delay: delay, stiffness: 300, damping: 100, mass: 300 },
    },
  };
  

  useEffect(() => {
    // Function to generate random characters for each letter
    const getRandomChars = () => {
      let chars = [];
      for (let i = 0; i < text.length; i++) {
        if (Math.random() < 0.5) {
          chars.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)]);
        } else {
          chars.push(text[i]);
        }
      }
      return chars;
    };

    // Function to change the font and random characters
    const changeFontAndChars = () => {
      setCurrentFont((prevFont) => (prevFont + 1) % fonts.length);
      setRandomChars(getRandomChars());
      toggleRandomChars();
    };

    // Initial interval (constant speed)
    const interval = setInterval(changeFontAndChars, 400);

    // Cleanup the interval on component unmount
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to toggle between original text and random characters
  const toggleRandomChars = () => {
    setShowRandomChars((prevShowRandomChars) => !prevShowRandomChars);
  };

  useEffect(() => {
    // Function to keep "kisu" displayed for 0.2 seconds longer
    const keepKisu = () => {
      setTimeout(() => {
        toggleRandomChars();
      }, 100); // 200ms (0.2 seconds) delay before switching back to random characters
    };

    // Check if the current text is "kisu" and apply the 0.2 seconds extension
    if (text === "kisu") {
      keepKisu();
    }
  }, [text]);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        type: "spring",
        duration: duration,
        ease: easeInOut,
        stiffness: 300,
        damping: 100,
        mass: 300
      }}
      className={styles.textmd}
      style={{
        transform: showRandomChars ? 'scale(1)' : 'scale(1.2)', // Apply scaling based on showRandomChars
        transformOrigin: 'center', // Set the scaling origin to the center
      }}
    >
      <h1 className={styles.wordWrap}>
        {text.split('').map((letter, index) => (
          <motion.span key={index} style={{
            fontFamily: fonts[currentFont],
            color: 'black',
          }}>
            {showRandomChars ? randomChars[index] : letter}
          </motion.span>
        ))}
      </h1>
    </motion.div>
  );
};

export default AnimatedwText;