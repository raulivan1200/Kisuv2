import React from 'react'
import styles from "../styles/BigText.module.css"
function Videosr() {
  return (
    <div className={styles.videoco}>
      <video width="100%" height="100%" controls autoPlay muted playsInline loop >
      <source src="/showreel.mp4" type="video/mp4"/>
      <iframe width="100%" height="100%" src="https://youtu.be/zawS019QfKg" frameborder="0" allow=" autoplay;" ></iframe>
      <h1>ready to star?</h1>
    </video>
    </div>
  )
}

export default Videosr