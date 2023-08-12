"use client"
import React from 'react'
import { useEffect,useState,useRef } from 'react';
import AnimatedTextCharacter from './Anchar';
import Image from 'next/image';
import Imkids from "../../public/Portfolio/imagigids.jpg"
import Imkidsf from "../../public/Portfolio/imagikco.jpg"
import Imkidsg from "../../public/Portfolio/Imagikids.jpg"
import Ssys from "../../public/Portfolio/System.jpg"
import Ssysf from "../../public/Portfolio/sale system.jpg"
import bills from "../../public/Portfolio/billsp.jpg"
import billsf from "../../public/Portfolio/billspco.jpg"
import billsg from "../../public/Portfolio/billspl.jpg"
import billsh from "../../public/Portfolio/billspgrey.jpg"
import woff from "../../public/Portfolio/woffles.jpg"
import woffh from "../../public/Portfolio/wofflescolor.jpg"
import woffg from "../../public/Portfolio/wofflesdetail.jpg"


function Scroll() {
  const stickySectionsRef = useRef([]);
  const progressBarRef = useRef(null);

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
        const progressBar = progressBarRef.current;
        progressBar.style.width = `${percentage * 10.5}%`;
        progressBar.style.transition = `width 0.2s ${easing}`;
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
                  <div className='horizontalbar' ref={progressBarRef}></div>
                      <div className='pppphz'>

                      <div className="pahz" id='section1'>
                          <div className="hzc">
                             <Image src={woff} alt="water" placeholder='blur'  width={0} height={0} sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className="imc"/>
                            <Image src={woffh} alt="water" placeholder='blur' width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className="imc"/>
                          </div>
                          <div className='hzc'>    
                        <Image src={woffg} alt="aiu" placeholder='blur' width={0} height={0} sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, " className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h2>Woffles</h2>
                        <p>
                        A waffle restaurant was in need of a new website, and we engaged in a thorough consultation to understand their requirements and goals. Employing the latest and fastest technologies, we crafted a cutting-edge design and developed a highly optimized website for search engines. As a result of our work, the restaurant experienced a remarkable 30% increase in sales. 📈 Our collaboration proved instrumental in their success, and we take pride in delivering impactful solutions to our clients.
                        </p>
                        </div>
                        </div>  

                      
                        <div className="pahz" id='section1'>
                          <div className="hzc">

                             <Image src={bills} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className="imc"/>
                            <Image src={billsf} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className="imc"/>
                            </div>
                            <div className="hzc">
                         <Image src={billsg} placeholder='blur' alt="aiu" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className='imc'/>
                        <Image src={billsh} placeholder='blur' alt="aiu" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h2>Bill splitter</h2>
                        <p>
                        A company sought our expertise to develop a bill-splitting system for their employees. Leveraging React, we created a visually captivating and intuitive UI/UX design with animated elements. Our focus on security resulted in implementing extra layers of protection, ensuring data integrity and confidentiality. The system's success led to enhanced operational efficiency, significant time and cost savings, and heightened user satisfaction. Our commitment to delivering cutting-edge solutions solidified our relationship with the client, making us a trusted partner for future endeavors.
                        </p>
                        </div>
                        </div>  

                       
                        <div className="pahz" id='section1'>
                          <div className="hzc">
                             <Image src={Ssys} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className="imc"/>
                            <Image src={Ssysf} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className="imc"/>
                          </div>
                        <div className='texthz'>  
                        <h2>Sales System</h2> 
                        <p>          
                We developed a comprehensive account, sales, payment, and invoice management system. The user interface (UI) and user experience (UX) were carefully designed to ensure ease of use across both computers and smartphones, leveraging React and Next.js for optimal performance. The system's robust security and reliability delighted the client, leading to its resounding success. We take pride in delivering a transformative solution that saves time and money while providing a seamless experience for our valued clients. 💼
                          </p>
                        </div>
                        </div>  
                        
                        <div className="pahz" id='section1'>
                          <div className="hzc">
                             <Image src={Imkids} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className="imc"/>

                            <Image src={Imkidsf} placeholder='blur' alt="water" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className="imc"/>
                          </div>
                          <div className='hzc'>
                         <Image src={Imkidsg} placeholder='blur' alt="aiu" width={0} height={0}  sizes="(max-width: 768px) 480px, (max-width: 1200px) 20vw, (min-width: 1200px) 40vw, "  className='imc'/>
                          </div>
                        <div className='texthz'>  
                        <h2>Imagi Kids</h2>
                        <p>
                        We developed a cutting-edge mobile and web application for a company, enabling them to find the perfect babysitters. Utilizing React Native, we ensured a seamless and user-friendly experience across both smartphones and computers, incorporating top-notch UX/UI designs. The application's robust security measures safeguarded sensitive data, ensuring trust and reliability. Through the implementation of CRUD functionalities, users could conveniently manage their nanny search process. The client's satisfaction with the final outcome was evident, as the application became a tremendous success. We take pride in having helped our client create a powerful tool to find the ideal caregiver for their children.
                        </p>
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