"use client";
import React, { useEffect, useState, useRef } from 'react'; // Import useRef
import styles from "../styles/Foot.module.css";
import VelocityScroll from "../components/Velocityscroll";
import Smbuttons from './Smbuttons';

const fonts = ['Eudoxus', 'Georgia', 'Arial', 'Helvetica', 'Verdana', 'Gt-America-EL', 'Times New Roman', 'Gt-America-EB'];

function Foot() {
  const textRef = useRef(null); // Use useRef to access the h1 element

  const [currentFont, setCurrentFont] = useState(0);

  useEffect(() => {
    // Function to change the font every 0.5 seconds
    const interval = setInterval(() => {
      setCurrentFont((prevFont) => (prevFont + 1) % fonts.length);
    },1000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Update the font when the currentFont state changes
    if (textRef.current) {
      textRef.current.style.fontFamily = fonts[currentFont];
    }
  }, [currentFont]);

  return (
    <div className={styles.footp}>
      <div style={{overscrollBehavior:"contain",overflow:"hidden"}}>
      <VelocityScroll baseVelocity={-5}> 今すぐ電話！今すぐ電話！</VelocityScroll>
      <VelocityScroll baseVelocity={5}> us Contact</VelocityScroll>
      <VelocityScroll baseVelocity={-1}> 今すぐ電話！今すぐ電話！</VelocityScroll>
      </div>
    
      <div className={styles.txtcen}>
        <a id='cursor-scale' className='aref atb' href="">
        <div style={{position:"relative", height:"15vh"}}>
        <h1 ref={textRef} className={styles.btf}>
            kisucontacto@gmail.com
          </h1>
        </div>
        </a>
        <Smbuttons />
      </div>

      <div className={styles.bottomtxt}>
        <div>
          <h2>© 2023 KISU</h2>
        </div>      
        <div>
          <h2>© 2023 KISU</h2>
        </div>    
        <div>
          <h2>© 2023 KISU</h2>
        </div>    
        <div>
          <h2>© 2023 KISU</h2>
        </div>    
      </div>
    </div>
  );
}

export default Foot;
