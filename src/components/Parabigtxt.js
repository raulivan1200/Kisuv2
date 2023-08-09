"use client";
import React from 'react';
import styles from '../styles/BigText.module.css';
import AnimatedDiv from './Animateddiv';
import Image from 'next/image';
import cato from "../../public/catmouse.png"
import catt from "../../public/cateating.png"
import catr from "../../public/Portfolio/woffles.jpg"
import catf from "../../public/Portfolio/woffles.jpg"

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
    <Image src={cato} className={styles.im} width={0} height={0} sizes='(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw' ></Image>
  </div>
  </div>
  <div className={styles.c2}>
    <div className={styles.cardana}>
    <p> 📈 75% of consumers admit to making judgments on a company's credibility based on the company's website design</p>
    <Image src={catt} className={styles.im} width={0} height={0} sizes='(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw' ></Image>
   </div>
  </div>
  <div className={styles.c3}>
    <div className={styles.cardana}>
    <p> 📈 Nearly 8 in 10 customers would stop engaging with content that doesn't display well on their device</p>
    <Image src={catr} className={styles.im} width={0} height={0} sizes='(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw' ></Image>
   </div>
  </div>
  <div className={styles.c4}>
    <div className={styles.cardana}>
    <p> 📈 Once on a company's homepage, 86% of visitors want to see information about that company's products/services</p>
    <Image src={catf} className={styles.im} width={0} height={0} sizes='(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw' ></Image>
    </div>
  </div>
</div>
    </div>
  );
}

export default Parabigtxt;
