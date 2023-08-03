import React from 'react'
import "./section5.css"

const Section5 = () => {
  return (
    <section className="section5">
        <div className='sec5-left'></div>
        <div className='sec5-right'>
            <div className='sec5-right-inside'>
              <p className='sec5-title'>Bestsellers</p>
              <p className='sec5-text'>Our gear is known for top performance in the mountains. Now discover which kit is performing just as well in-store this winter.</p>
            </div>
            <div className='sec5-right-bottom'>
              <button className='sec5-btn'>Discover women’s bestsellers</button>
              <button className='sec5-btn'>Discover men’s bestsellers</button>
            </div>
        </div>
    </section>
  )
}

export { Section5 }
