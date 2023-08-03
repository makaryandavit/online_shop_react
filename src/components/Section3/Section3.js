import React, { useEffect } from 'react'
import "./section3.css"
import Aos from 'aos'
import 'aos/dist/aos.css';

const Section3 = () => {

    useEffect(() =>{
        Aos.init()
      },[])

  return (
    <section className="section3">
        <div className="sec3-box sec3-box1" data-aos="fade-right" data-aos-duration="1300">
            <p>Men</p>
        </div>
        <div className="sec3-box sec3-box2" data-aos="fade-left" data-aos-duration="1300">
            <p>Women</p>
        </div>
    </section>
  )
}

export { Section3 }
