import React from 'react'

function Smbuttons() {
  return (
    <div className="socialmedia">
  <a href="https://www.instagram.com/kisu.ags/" target='blank' className="socialContainer atb containerOne" id='cursor-down'>
    <h2 className="socialSvg instagramSvg ">Instagram</h2>
  </a>
  
  <a href="https://wa.me/524496082929" target='blank' className="socialContainer atb containerTwo" id='cursor-down'>  
   <h2 className="socialSvg twitterSvg" >twitter</h2>           
  </a>

  <a href="https://www.linkedin.com/in/kisu-ags-819b4a273/" target='blank' className="socialContainer atb containerThree" id='cursor-down'>
   <h2 className="socialSvg linkdinSvg" >linkedin</h2>
  </a>
  
  <a href="https://twitter.com/Kisu_ags" target='blank' className="socialContainer atb containerFour" id='cursor-down'>
   <h2 className="socialSvg whatsappSvg">whatsaap</h2>
  </a>
</div>             

  )
}

export default Smbuttons