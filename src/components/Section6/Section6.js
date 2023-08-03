import React, { useEffect } from 'react'
import "./section6.css"
import { useRef } from 'react';

import Item1 from "../../assets/item1.png";
import Item2 from "../../assets/item2.png";
import Item3 from "../../assets/item3.png";
import Item4 from "../../assets/item4.png";
import Left from "../../assets/left.png"
import Right from "../../assets/right.png"


const items = [
    {
        id: Math.random(),
        img: Item1,
        title: 'Haldigrat HS Pants Men',
        price: 440,
    },
    {
        id: Math.random(),
        img: Item2,
        title: 'Meron IN Hooded Jacket Men',
        price: 480,
    },
    {
        id: Math.random(),
        img: Item3,
        title: 'Stoney HS Thermo Jacket Women',
        price: 460,
    },
    {
        id: Math.random(),
        img: Item4,
        title: 'Innominata ML Jacket Women',
        price: 140,
    },
    {
        id: Math.random(),
        img: Item2,
        title: 'Innominata ML Hybrid Jacket Men',
        price: 180,
    },
    {
        id: Math.random(),
        img: Item1,
        title: 'Meron IN Hooded Jacket Men',
        price: 320,
    },
    {
        id: Math.random(),
        img: Item3,
        title: 'Haldigrat HS Pants Men',
        price: 540,
    },
]



const Section6 = () => {

    const ref = useRef(null);
    let elem;
  useEffect(() => {
    const element = ref.current;
    elem = element;
  }, []);
  const ref2 = useRef(null);
    let elem2;
  useEffect(() => {
    const element = ref2.current;
    elem2 = element;
  }, []);

  let slideX = 0;

  return (
    <section className='sec6'> 
        <div className='sec6-controls'>
            <h1 className='sec6-title'>Bestsellers</h1>
            <div className='btns'>
                <img src={Right} alt="" className='toRight' onClick={() =>{
                    slideX += 800
                    elem.scrollTo({
                        left: slideX,
                        behavior: 'smooth'
                    })
                }} />
            </div>
        </div>
        <div className='items' ref={ref}>
            {
                items.map(item => (
                    <div className='item' key={item.id} ref={ref2}>
                        <div className='itemImg'>
                            <img src={item.img} alt="Cloth" className='clothImg' />
                        </div>
                        <div className='itemInfo'>
                            <p className='item-title'>{item.title}</p>
                            <p className='item-price'>€{item.price}</p>
                        </div>
                    </div>
                ))
            }
        </div>  
    </section>
  )
}

export { Section6 }
