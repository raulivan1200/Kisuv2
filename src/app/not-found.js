"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';
import CursorComponent from '@/components/CursorComponent';
import { motion } from 'framer-motion';
import "./globals.css";

export default function NotFound() {
  const [currentFont, setCurrentFont] = useState(0);
  const [randomChars, setRandomChars] = useState([]);
  const [showRandomChars, setShowRandomChars] = useState(true);

  // Define an array of fonts you want to cycle through
  const fonts = ['Eudoxus', 'Georgia', 'Arial', 'Helvetica', 'Verdana', 'Gt-America-EL', 'Times New Roman', 'Gt-America-EB'];

  // Special characters for the random character effect
  const specialCharacters = "!:[{}]^*()+-+/?";
  const text = " 404 "; // The text to display (you can change this)

  // Framer motion variants for the animation
  const duration = 0.4; // Duration of the animation
  const easeInOut = [0.87, 0, 0.13, 1]; // Easing function for the animation
  const delay = 0; // Delay before the animation starts

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
    if (text === "404") {
      keepKisu();
    }
  }, [text]);

  return (
    <>
      <CursorComponent />
      <motion.div variants={variants} initial="hidden" animate="visible">

        <div style={{ width: "100%", height: "100vh", justifyContent: "center", alignItems: "center", textAlign: "center", margin: "0", display: "flex", flexDirection: "column" }}>
        <div style={{height:"13em"}}>
        <div style={{position:"absolute", height:"fit-content",top:0,left:0}}>
        {showRandomChars ? (
            <motion.h1 className='btfm' variants={variants}>{randomChars.join('')}</motion.h1>
          ) : (
            <motion.h1 className='btfm' variants={variants}>404</motion.h1>
          )}
        </div>
        <div style={{position:"absolute", height:"fit-content",top:0,right:0}}>
        {showRandomChars ? (
            <motion.h1 className='btfm' variants={variants}>{randomChars.join('')}</motion.h1>
          ) : (
            <motion.h1 className='btfm' variants={variants}>404</motion.h1>
          )}
        </div>
        </div>
          <Image src="/favicon.svg" alt="kisu" width={150} height={150} />
          <a href="/" className="socialContainer atb containerOne" id='cursor-down'>
    <h2 className="socialSvg instagramSvg ">Get Back</h2>
  </a>        </div>
      </motion.div>
    </>
  );
}
