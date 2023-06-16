import React, { useEffect } from 'react'
import {FaGift} from 'react-icons/fa'
import { arrayEducation } from '../../../dummydata/profile'
import './education.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Education = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])
  return (
    <div className='education' id='education'>
        <h1 className='education-heading' data-aos="fade-up">Education</h1>
        <div className='education-list'>
            {arrayEducation.map((item,index)=>(
                <div data-aos="fade-up" className='education-item' key={index}>
                    <div className='education-icon'>
                        <FaGift className='icon' size={20}/>
                    </div>
                    <div className='education-info'>
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

export default Education