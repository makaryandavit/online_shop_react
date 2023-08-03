import React, { useEffect } from 'react'
import "./section4.css"
import Aos from 'aos'
import 'aos/dist/aos.css';



const Section4 = () => {

  useEffect(() =>{
    Aos.init()
  },[])

  return (
    <section className='section4'>
        <div className='sec4-left'>
            <p>What do you need for the <br/> next adventure?</p>
        </div>
        <div className='sec4-right'>
          <div className="box box1" data-aos="fade-right" data-aos-duration="1200">
            Equipment
          </div>
          <div className="box box2" data-aos="zoom-in" data-aos-duration="1200">
            Clothing
          </div>
          <div className="box box3" data-aos="fade-left" data-aos-duration="1200">
            Marketing
          </div>
        </div>
    </section>
  )
}

export { Section4 }
