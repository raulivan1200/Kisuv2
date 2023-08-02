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
    <h4 style={{textAlign:"center"}} >Agendar una llamada</h4>
    </a>    
</div>
    </div>  

    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
      
    <h4>50% to start working</h4>
    <p>
    Diseño Web personalizado.<br/>
Formulario Chat y Mapa.<br/>
Fotografias de Stock.<br/>
Tiempo de entrega de 3 a 4 semanas.<br/>
4 sesiones de revisión disponibles.<br/>
Integración de redes sociales.<br/>
Sitio Responsive a moviles.
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
    <h4 style={{textAlign:"center"}}>Agendar una llamada</h4>
    </a>    
</div>
    </div>  
    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
    <h4>50% to start working</h4>
    <p>
    Sitio responsive<br/>
Website from Scratch<br/>
Diseño Web personalizado.<br/>
Formulario, Chat y Mapa<br/>
Fotografias de Stock<br/>
Tiempo de entrega de 3 a 4 semanas<br/>
4 sesiones de revisión disponibles<br/>
Integración de redes sociales
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
    <h4 style={{textAlign:"center"}}>Agendar una llamada</h4>
    </a>    
</div>
    </div>  
    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
    <h4>50% to start working</h4>
    <p>
    Multipage <br/>
CMS<br/>
Animaciones 3D<br/>
Custom Icons (6 icons)<br/>
Diseño Web personalizado.<br/>
Formulario Chat y Mapa<br/>
Fotografias de Stock<br/>
Tiempo de entrega de 3 a 4 semanas<br/>
Revisiónes ilimitadas disponibles<br/>
Integración de redes sociales<br/>
    </p>
    </div>    </div>  </div>
    </div>

    </div>
  )
}

export default Cards