import React, { useEffect } from 'react'
import "./section2.css"
import Aos from 'aos'
import 'aos/dist/aos.css';

const Section2 = () => {

    useEffect(() =>{
        Aos.init()
      },[])

  return (
    <section className='section2'>
        <div className='firstSec2'>
          <p className='Sec2-text-1' data-aos="zoom-out-up" data-aos-duration="1200">Eiger Extreme</p>
          <p className='Sec2-text-2' data-aos="zoom-out-up" data-aos-duration="1200">For living life on the edge. For experiencing all the extremes. <br/> For limits there to be pushed. When your equipment must be <br/> function-first, Eiger Extreme is made for you.</p>
          <button className='Sec2-btn' data-aos="zoom-out-up" data-aos-duration="1200">Discover Eiger Extreme Collection</button>
        </div>
        <div className='secondSec2'></div>
    </section>
  )
}

export { Section2 }
