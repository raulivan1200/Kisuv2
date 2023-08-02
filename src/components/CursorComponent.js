"use client"
import { useEffect } from 'react';
import { easeInOut, motion } from 'framer-motion';
import Image from 'next/image';
import logo from "../../public/kisuout.svg"
const CursorComponent = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');
    const cursorScale = document.querySelectorAll('[id^="cursor-scale"]');
    const cursorDown = document.querySelectorAll('[id^="cursor-down"]');
    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = () => {
      cursor.style.left = `${mouseX}px`;
      cursor.style.top = `${mouseY}px`;
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', onMouseMove);

    cursorScale.forEach((link) => {
      link.addEventListener('mousemove', () => {
        cursor.classList.add('grow');
        cursor.classList.remove('cursor-down');
      });

      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('grow');
      });
    });

    cursorDown.forEach((link) => {
      link.addEventListener('mousemove', () => {
        cursor.classList.add('cursor-down');
        cursor.classList.remove('grow');
      });

      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('cursor-down');
      });
    });

    const updateCursorWithMotion = () => {
      requestAnimationFrame(updateCursorWithMotion);
      updateCursor();
    };

    updateCursorWithMotion();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return <motion.div className="cursor" style={{ left: 0, top: 0, margin:0, justifyContent:"center",alignItems:"center" }}> </motion.div>;
};

export default CursorComponent;
