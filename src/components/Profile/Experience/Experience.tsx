import React, { useEffect } from 'react'
import {FaGift} from 'react-icons/fa'
import { arrayExperience } from '../../../dummydata/profile'
import './experience.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Experience = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])
  return (
    <div className='experience' id='experience'>
        <h1 className='experience-heading' data-aos="fade-up">Experience</h1>
        <div className='experience-list'>
            {arrayExperience.map((item,index)=>(
                <div data-aos="fade-up" className='experience-item' key={index}>
                    <div className='experience-icon'>
                        <FaGift className='icon' size={20}/>
                    </div>
                    <div className='experience-info'>
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

export default Experience