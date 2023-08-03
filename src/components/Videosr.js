import React from 'react'
import styles from "../styles/BigText.module.css"
function Videosr() {
  return (
    <div className={styles.videoco}>
      <video width="100%" height="100%" autoPlay muted playsInline loop src="/showreel.mp4" type="video/mp4" >
      <h1>ready to start?</h1>
    </video>
    </div>
  )
}

export default Videosr