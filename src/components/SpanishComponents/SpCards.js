import React from 'react'
import styles from "../../styles/Card.module.css"

function Spcards() {
  return (
    <div className={styles.cardparent} >
    <div className={styles.cardcontainerone}>
    <div className={styles.cardcchild}>
    <div className={styles.up}>  
    <h1 className={styles.mlh}>Standard</h1>
    <p className={styles.mlh}>Landing page.</p>
<div className={styles.spacex}>
  
    <h1 className={styles.mlh}>$1000</h1>
        <p className={styles.mlh}>50% de anticipo.</p>
        <div className={styles.lsp}>        </div>
        <a href="https://wa.me/524496082929?text=Estoy%20interesado%20en%20el%20plan%20Standard" target='_blank'>
        <div className="buttons">
   <button id="cursor-scale" className="btn"><span></span><p data-start="Comencemos" data-text=" ¡Llámanos!" data-title="Comencemos"></p></button>
</div>
        </a>

    <a href="https://wa.me/524496082929?text=Quisiera%20agendar%20una%20llamada"  className={styles.lik} target='_blank'>
    <h4 style={{textAlign:"center"}} >Agendar una llamada</h4>
    </a>    
</div>
    </div>  

    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
      
    <h4>50% de anticipo.</h4>
    <p>
    Diseño Web personalizado.<br/>
Formulario Chat y Mapa.<br/>
Fotografías de Stock.<br/>
Tiempo de entrega de 3 a 4 semanas.<br/>
4 sesiones de revisión disponibles.<br/>
Integración de redes sociales.<br/>
Sitio Responsive a móviles.
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
        <p className={styles.mlh}>50% de anticipo.</p>
        <div className={styles.lsp}>        </div>
        <a href="https://wa.me/524496082929?text=Estoy%20interesado%20en%20el%20plan%20pro" target='_blank'>
        <div className="buttons">
   <button id="cursor-scale" className="btn"><span></span><p data-start="Comencemos" data-text=" ¡Llámanos!" data-title="Comencemos"></p></button>
</div>
        </a>
    <a href="https://wa.me/524496082929?text=Quisiera%20agendar%20una%20llamada" className={styles.likp} target='_blank'>
    <h4 style={{textAlign:"center"}}>Agendar una llamada</h4>
    </a>    
</div>
    </div>  
    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
    <h4>50% de anticipo.</h4>
    <p>
    Sitio responsive<br/>
Website from Scratch<br/>
Diseño Web personalizado.<br/>
Formulario, Chat y Mapa<br/>
Fotografías de Stock<br/>
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
    <p className={styles.mlh}>Tiendas y Sistemas.</p>
<div className={styles.spacex}>
    <h1 className={styles.mlh}>$25000</h1>
        <p className={styles.mlh}>50% de anticipo.</p>
        <div className={styles.lsp}>        </div>

        <a href="https://wa.me/524496082929?text=Estoy%20interesado%20en%20el%20plan%20Entreprise" target='_blank'>
        <div className="buttons">
   <button id="cursor-scale" className="btn"><span></span><p data-start="Comencemos" data-text=" ¡Llámanos!" data-title="Comencemos"></p></button>
</div>
        </a>
    <a href="https://wa.me/524496082929?text=Quisiera%20agendar%20una%20llamada" className={styles.likg} target='_blank' >
    <h4 style={{textAlign:"center"}}>Agendar una llamada</h4>
    </a>    
</div>
    </div>  
    <div className={styles.down}>
    <hr/>
    <div className={styles.lsp}>
    <h4>50% de anticipo.</h4>
    <p>
    Multipage <br/>
CMS<br/>
Animaciones 3D<br/>
Custom Icons (6 icons)<br/>
Diseño Web personalizado.<br/>
Formulario Chat y Mapa<br/>
Fotografías de Stock<br/>
Tiempo de entrega de 3 a 4 semanas<br/>
Revisiones ilimitadas disponibles<br/>
Integración de redes sociales<br/>
    </p>
    </div>    </div>  </div>
    </div>

    </div>
  )
}

export default Spcards