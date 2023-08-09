"use client"
import React from 'react';
import Image from 'next/image';
import styles from "../../styles/BigText.module.css";
import AnimatedDiv from '../Animateddiv';

function SpBrutalcallus() {
    return (
        <div className={styles.parentbtr}>
    <div className={styles.wsbt}>
      <AnimatedDiv animateY={-10} y={0} initialOpacity={0} animateOpacity={1} duration={.5}>
    <h1 className={styles.bthh}>
    Impulsa  <br/> tu negocio <br/> en línea.
            </h1>
      </AnimatedDiv>
    </div>
            <div className={styles.abbt}>
                <div className={styles.cardbt}>
                  <div style={{display:"flex",height:"fit-content",position:"relative",justifyContent:"center"}}>
                  <Image src="/favicon.svg" width={200} height={200} alt="kisu" className={styles.anlg}/>
                  </div>
                    <div className={styles.mu}>
                    <h4>Agendar una llamada</h4>
                    <p>Conoce más.</p>
                    <a href="https://wa.me/524496082929?text=Estoy%20interesado%20en%20adquirir%20una%20pagina%20web" target='_blank'>
                    <div className="buttons">
                    <button id="cursor-scale" className="btn"><span></span><p data-start="Comencemos" data-text=" ¡Llámanos!" data-title="Comencemos"></p></button>
                    </div>
                    </a>
                    </div>
                </div>
            </div>
        </div>
      )
    }

export default SpBrutalcallus;
