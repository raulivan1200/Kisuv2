import React from 'react'
import styles from "../styles/BigText.module.css"
import AnimatedwText from './AnimatedwText'
import AnimatedTextCharacter from './Anchar'

function BigText() {
  return (
    <div className={styles.parentbt}>
        <AnimatedwText text={"KISU"} fontSize={10} hiddenY={-10} visibleY={0} delay={0} />
    </div>
  )
}

export default BigText