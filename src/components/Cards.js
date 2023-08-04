import React from 'react'
import styles from "../styles/Card.module.css"

function Cards() {
  return (
    <div className={styles.cardparent} >
    <div className={styles.cardcontainerone}>
    <div className={styles.cardcchild}>
    <div className={styles.up}>  
    <h1 className={styles.mlh}>Standard</h1>
    <p className={styles.mlh}>Landing page.</p>
<div className={styles.spacex}>
  
    <h1 className={styles.mlh}>$1000</h1>
        <p className={styles.mlh}>50% to start working</p>
        <div className={styles.lsp}>        </div>
        <div className="buttons">
   <button id="cursor-scale" className="btn"><span></span><p data-start="Get Started!" data-text="Call us!" data-title="Get Started!"></p></button>
</div>

    <a href=""  className={styles.lik}>
    <h4 style={{textAlign:"center"}} >Schedule a call</h4>
    </a>    
</div>
    </div>  

    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
      
    <h4>50% to start working</h4>

    <p>
      Custom Web Design.<br />
      Chat and Map Form.<br />
      Stock Photos.<br />
      Delivery time of 3 to 4 weeks.<br />
      4 revision sessions available.<br />
      Integration of social media.<br />
      Mobile Responsive Site.
    </p>

    </div>
    </div>
</div>
    </div>

    <div className={styles.cardcontainertwo}>
    <div className={styles.cardcchild}>
    <div className={styles.up}>  
    <h1 className={styles.mlh}>Pro</h1>
    <p className={styles.mlh}>Multipage.</p>
<div className={styles.spacex}>
    <h1 className={styles.mlh}>$5000</h1>
        <p className={styles.mlh}>50% to start working</p>
        <div className={styles.lsp}>        </div>
        <div className="buttons">
   <button id="cursor-scale" className="btn"><span></span><p data-start="Get Started!" data-text="Call us!" data-title="Get Started!"></p></button>
</div>
    <a href="" className={styles.likp}>
    <h4 style={{textAlign:"center"}}>Schedule a call</h4>
    </a>    
</div>
    </div>  
    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
    <h4>50% to start working</h4>

      <p>
          Responsive Site<br />
          Website from Scratch<br />
          Custom Web Design.<br />
          Chat and Map Form<br />
          Stock Photos<br />
          Delivery time of 3 to 4 weeks<br />
          4 revision sessions available<br />
          Integration of social media
        </p>

    </div>
    </div>
</div>
    </div>

        <div className={styles.cardcontainerthree}>
        <div className={styles.cardcchild}>
    <div className={styles.up}>  
    <h1 className={styles.mlh}>Entreprise</h1>
    <p className={styles.mlh}>Stores.</p>
<div className={styles.spacex}>
    <h1 className={styles.mlh}>$25000</h1>
        <p className={styles.mlh}>50% to start working</p>
        <div className={styles.lsp}>        </div>
        <div className="buttons">
   <button id="cursor-scale" className="btn"><span></span><p data-start="Get Started!" data-text="Call us!" data-title="Get Started!"></p></button>
</div>
    <a href="" className={styles.likg}>
    <h4 style={{textAlign:"center"}}>Schedule a call</h4>
    </a>    
</div>
    </div>  
    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
    <h4>50% to start working</h4>

       <p>
          Multipage<br />
          CMS<br />
          3D Animations<br />
          Custom Icons (6 icons)<br />
          Custom Web Design.<br />
          Chat and Map Form<br />
          Stock Photos<br />
          Delivery time of 3 to 4 weeks<br />
          Unlimited revisions available<br />
          Integration of social media<br />
        </p>

    </div>    </div>  </div>
    </div>

    </div>
  )
}

export default Cards