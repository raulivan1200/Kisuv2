"use client"
import React from "react";
import { motion } from "framer-motion";

const Textwave = ({ text }) => {
  const words = text.split(" ");

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.12,
        staggerDirection: 1, // Animate from first to last
      },
    },
  };

  const child = {
    visible: (i = 1) => ({
      opacity: 1,
      y: [
        0, // Starting position
        Math.floor(Math.random() * 6) + 5, // Random position between 5 and 10
        0, // Back to the starting position
      ],
      transition: {
        duration: 1.5, // Duration for each word animation
        repeat: Infinity, // Repeat the animation indefinitely
        repeatType: "mirror", // Reverse the animation direction after each iteration
        repeatDelay: 0.1 * i, // Delay between word animations
        ease: "easeInOut", // Add ease-in and ease-out

      },
    }),
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex"}}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          variants={child}
          style={{ marginRight: "5px" }}
          key={index}
        >
       <h2>
           {word}
        </h2>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default Textwave;
