import React from 'react'
import styles from "../styles/BigText.module.css"
function Videosr() {
  return (
    <div className={styles.videoco}>
      <video width="100%" height="100%" autoPlay muted playsInline loop >
      <source src="/showreel.mp4"/>
    </video>
    </div>
  )
}

export default Videosr