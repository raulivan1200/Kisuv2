"use client";
import React from 'react';
import styles from '../styles/BigText.module.css';
import AnimatedDiv from './Animateddiv';
import Image from 'next/image';

function Parabigtxt() {
  return (
    <div className={styles.pbtx}>
      <div>
        <AnimatedDiv delay={0}>
          <h1 className={styles.btcu} style={{ wordBreak: 'break-word' }}  >We build brands that last in time</h1>
        </AnimatedDiv>
      </div>

      <h1 className={styles.papb}>Why Choose Us?</h1>
      <div className={styles.containerpb}>
  <div className={styles.c1}>
    <div className={styles.cardana}>
    <p> 📈 <span className={styles.rempin}>57%</span> of internet users say they won't recommend a business with a poorly designed website on mobile</p>
    </div>
  </div>
  <div className={styles.c2}>
    <div className={styles.cardana}>
    <p> 📈 75% of consumers admit to making judgments on a company's credibility based on the company's website design</p>
    </div>
  </div>
  <div className={styles.c3}>
    <div className={styles.cardana}>
    <p> 📈 Nearly 8 in 10 customers would stop engaging with content that doesn't display well on their device</p>
    </div>
  </div>
  <div className={styles.c4}>
    <div className={styles.cardana}>
    <p> 📈 Once on a company's homepage, 86% of visitors want to see information about that company's products/services</p>
    </div>
  </div>
</div>
    </div>
  );
}

export default Parabigtxt;
