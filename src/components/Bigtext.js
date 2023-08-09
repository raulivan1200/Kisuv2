"use client";
import React from 'react'
import styles from "../styles/BigText.module.css"
import AnimatedwText from './AnimatedwText'
import AnimatedDiv from './Animateddiv'

function BigText() {
  return (
    <div className={styles.parentbt}>
        <AnimatedwText text={"KISU"} fontSize={10} hiddenY={-10} visibleY={0} delay={0} />
        <AnimatedDiv animateY={10} delay={0} duration={.2}><svg className='hod' style={{transform:"scale(.5)"}} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z"/></svg></AnimatedDiv>
    </div>
  )
}

export default BigText