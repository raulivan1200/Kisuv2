"use client";
import React from 'react';
import styles from '../../styles/BigText.module.css';
import AnimatedDiv from '../Animateddiv';
import Image from 'next/image';
import cato from "../../../public/catmouse.png"
import catt from "../../../public/cateating.png"
import catr from "../../../public/Portfolio/woffles.jpg"
import catf from "../../../public/Portfolio/woffles.jpg"

function Spparabigtxt() {
  return (
    <div className={styles.pbtx}>
      <div>
        <AnimatedDiv delay={0}>
          <h1 className={styles.btcu} style={{ wordBreak: 'break-word' }}  >Conectamos tu marca al mundo.</h1>
        </AnimatedDiv>
      </div>

      <h1 className={styles.papb}>¿Por qué elegirnos?</h1>
      <div className={styles.containerpb}>
  <div className={styles.c1}>
    <div className={styles.cardana}>
    <p>
          📈 El 57% de los usuarios de internet afirma que no recomendarían un negocio con un sitio web mal diseñado para móviles.
          <Image src={cato} className={styles.im} width={0} height={0} sizes='(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw' ></Image>
        </p>
    </div>  
  </div>
  <div className={styles.c2}>
    <div className={styles.cardana}>
    <p>
          📈 El 75% de los consumidores admiten que juzgan la credibilidad de una empresa en función del diseño de su sitio web.
        </p>
        <Image src={catt} className={styles.im} width={0} height={0} sizes='(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw' ></Image>
    </div>
  </div>
  <div className={styles.c3}>
    <div className={styles.cardana}>
    <p>
          📈 Casi el 80% de los clientes dejarían de interactuar con contenido que no se muestra bien en su dispositivo.
        </p>
    <Image src={catr} className={styles.im} width={0} height={0} sizes='(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw' ></Image>

    </div>
  </div>
  <div className={styles.c4}>
    <div className={styles.cardana}>
    <p>
          📈 Una vez en la página de inicio de una empresa, el 86% de los visitantes desean ver información sobre los productos/servicios de esa empresa.
        </p>
        <Image src={catf} className={styles.im} width={0} height={0} sizes='(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw' ></Image>

    </div>
  </div>
</div>
    </div>
  );
}

export default Spparabigtxt;
