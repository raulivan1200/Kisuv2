"use client"
import React from 'react'
import { useEffect,useState,useRef } from 'react';
import AnimatedTextCharacter from './Anchar';

function Scroll() {
  const stickySectionsRef = useRef([]);

  useEffect(() => {
    // Function to handle the scroll event
    const handleScroll = () => {
      stickySectionsRef.current.forEach((section) => {
        const offsetTop = section.parentElement.offsetTop;
        const scrollSection = section.querySelector('.scroll_section');
        const scrollY = window.scrollY;
        const percentage = Math.min(
          Math.max((scrollY - offsetTop) / window.innerHeight, 0),
          50
        );
        const easing = 'ease-out';
        scrollSection.style.transform = `translate3d(${-percentage * 100}vw, 0, 0)`;
        scrollSection.style.transition = `transform 0.2s ${easing}`;

      });
    };

    // Query the DOM once during the initial render and store .sticky elements in stickySectionsRef
    stickySectionsRef.current = Array.from(document.querySelectorAll('.sticky'));

    // Add the scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
      <>
      <div className='spaceup'>
        
      </div>
     <div className='spaceleft' style={{scrollSnapType:"none",WebkitOverflowScrolling:"touch",overscrollBehavior:"none"}}>
     <AnimatedTextCharacter text="OUR PAST PROJECTS"/>
     </div>
        <section>    
            <div className='sticky_parent'>
                <div className='sticky'>
                    <div className='scroll_section'>
                      <div className='pppphz'>

                      <div className="pahz" id='section1'>
                          <div className="hzc">
                             <img src="./Portfolio/woffles.jpg" alt="water" className="imc"/>
                            <img src="./Portfolio/wofflescolor.jpg" alt="water" className="imc"/>
                          </div>
                          <div className='hzc'>    
                        <img src="./Portfolio/wofflesdetail.jpg" alt="aiu" className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h2>Woffles</h2>
                        <p>
                          Un restaurante de waffles estaba buscando una nueva página web. Nos reunimos con el cliente y discutimos sus necesidades y objetivos. Desarrollamos un diseño y creamos una página web utilizando las tecnologías más recientes y rápidas. La página web fue optimizada para motores de búsqueda y ayudó a aumentar las ventas del restaurante en un 30%. 📈
                        </p>
                        </div>
                        </div>  

                      
                        <div className="pahz" id='section1'>
                          <div className="hzc">

                             <img src="./Portfolio/billsp.jpg" alt="water" className="imc"/>
                            <img src="./Portfolio/billspco.jpg" alt="water" className="imc"/>
                            </div>
                            <div className="hzc">
                         <img src="./Portfolio/billspl.jpg" alt="aiu" className='imc'/>
                        <img src="./Portfolio/billspgrey.jpg" alt="aiu" className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h2>Bill splitter</h2>
                        <p>
                        Una empresa nos contactó para crear un sistema que ayudase a sus empleados a dividir las cuentas. Desarrollamos un prototipo del sistema que era fácil de usar, seguro y confiable. El cliente quedó satisfecho con el resultado final y el sistema fue un gran éxito. Estamos orgullosos de haber ayudado al cliente a crear un sistema que les ayudará a ahorrar tiempo y dinero.                        </p>
                        </div>
                        </div>  

                       
                        <div className="pahz" id='section1'>
                          <div className="hzc">
                             <img src="./Portfolio/System.jpg" alt="water" className="imc"/>
                            <img src="./Portfolio/sale system.jpg" alt="water" className="imc"/>
                          </div>
                        <div className='texthz'>  
                        <h2>Sales System</h2> 
                        <p>Creamos un sistema para administrar cuentas, ventas, pagos y facturas. El sistema es fácil de usar, seguro y confiable, disponible en computadoras y teléfonos inteligentes. El cliente quedó satisfecho con el resultado final y el sistema fue un gran éxito. Estamos orgullosos de haber ayudado a crear un sistema que ayudará a ahorrar tiempo y dinero.</p>
                        </div>
                        </div>  
                        
                        <div className="pahz" id='section1'>
                          <div className="hzc">
                             <img src="./Portfolio/imagigids.jpg" alt="water" className="imc"/>

                            <img src="./Portfolio/imagikco.jpg" alt="water" className="imc"/>
                          </div>
                          <div className='hzc'>
                         <img src="./Portfolio/Imagikids.jpg" alt="aiu" className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h2>Imagi Kids</h2>
                        <p>
                        Creamos una aplicación para una empresa que les ayudaba a encontrar niñeras. La aplicación era fácil de usar, segura y confiable, y estaba disponible en teléfonos inteligentes y computadoras. El cliente quedó satisfecho con el resultado final y la aplicación fue un gran éxito. Estamos orgullosos de haber ayudado al cliente a crear una herramienta que les ayudará a encontrar la niñera perfecta para sus hijos.                        </p>
                        </div>
                        </div>  

                      </div>
                    </div>
                </div>
            </div>
        </section>
        </>
  )
}

export default Scroll