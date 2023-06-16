import React, { useEffect } from 'react'
import {FaGift} from 'react-icons/fa'
import { arrayAward } from '../../../dummydata/profile'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './award.css'
const Award = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])
  return (
    <div className='award' id='award'>
        <h1 className='award-heading' data-aos="fade-up">Award</h1>
        <div className='award-list'>
            {arrayAward.map((item,index)=>(
                <div data-aos="fade-up" className='award-item' key={index}>
                    <div className='award-icon'>
                        <FaGift className='icon' size={20}/>
                    </div>
                    <div className='award-info'>
                        <h3 className='year'>{item.year}</h3>
                        <h1 className='heading'>{item.heading}</h1>
                        <h3 className='title'>{item.heading_title}</h3>
                        <p className='desc'>{item.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Award