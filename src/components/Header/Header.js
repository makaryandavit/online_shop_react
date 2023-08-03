import React from 'react'
import "./header.css"

const Header = () => {
  return (
    <div className='header'>
        <div className='firstHeader'>
          <p className='header-text-1'>Go further faster</p>
          <p className='header-text-2'>Go the distance with lightweight layers for real <br /> mountain conditions.</p>
          <button className='header-btn'>Discover the new ski touring collection</button>
        </div>
        <div className='secondHeader'></div>
    </div>
  )
}

export { Header }
