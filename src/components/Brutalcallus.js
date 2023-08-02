"use client";
import React from 'react'
import Image from 'next/image'
import styles from "../styles/BigText.module.css"
import AnimatedDiv from './Animateddiv'
function Brutalcallus() {
  return (
    <div className={styles.parentbtr}>
<div className={styles.wsbt}>
  <AnimatedDiv animateY={-10} y={0} initialOpacity={0} animateOpacity={1} duration={.5}>
<h1 className={styles.bthh}>
       Empowering <br/> Digital <br/> Interactions
        </h1>
  </AnimatedDiv>
</div>
        <div className={styles.abbt}>
            <div className={styles.cardbt}>
              <div style={{display:"flex",height:"fit-content",position:"relative",justifyContent:"center"}}>
              <Image src="/favicon.svg" width={200} height={200} alt="kisu" className={styles.anlg}/>
              </div>
                <div className={styles.mu}>
                <h4>Book a Call</h4>
                <p>Lear more about us.</p>
                <div className="buttons">
                <button id="cursor-scale" className="btn"><span></span><p data-start="Get Started!" data-text="Call us!" data-title="Get Started!"></p></button>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brutalcallus