"use client";
import React, { useState, useEffect } from 'react';
import styles from "../styles/BigText.module.css";

const AnimatedwText = ({ text }) => {
  const [currentFont, setCurrentFont] = useState(0);
  const [randomChars, setRandomChars] = useState([]);
  const [showRandomChars, setShowRandomChars] = useState(true);

  const fonts = ['Eudoxus', 'Georgia', 'Arial', 'Helvetica', 'Verdana', 'Gt-America-EL', 'Times New Roman', 'Gt-America-EB'];
  const specialCharacters = "!:[{}]^*()+-+/?";

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

  const toggleRandomChars = () => {
    setShowRandomChars((prevShowRandomChars) => !prevShowRandomChars);
  };

  useEffect(() => {
    const keepKisu = () => {
      setTimeout(() => {
        toggleRandomChars();
      }, 100);
    };

    if (text === "kisu") {
      keepKisu();
    }
  }, [text]);

  useEffect(() => {
    const changeFontAndChars = () => {
      setCurrentFont((prevFont) => (prevFont + 1) % fonts.length);
      setRandomChars(getRandomChars());
      toggleRandomChars();
    };

    const interval = setInterval(changeFontAndChars, 400);

    return () => {
      clearInterval(interval);
    };
  }, [fonts]);

  return (
    <div
      className={styles.textmd}
      style={{
        transform: showRandomChars ? 'scale(1)' : 'scale(1.2)',
        transformOrigin: 'center',
      }}
    >
      <h1 className={styles.wordWrap}>
        {text.split('').map((letter, index) => (
          <span key={index} style={{
            fontFamily: fonts[currentFont],
            color: 'black',
          }}>
            {showRandomChars ? randomChars[index] : letter}
          </span>
        ))}
      </h1>
    </div>
  );
};

export default React.memo(AnimatedwText);
