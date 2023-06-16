import React from 'react'
import {FaGift} from 'react-icons/fa'
import { arrayExperience } from '../../../dummydata/profile'
import './experience.css'
const Experience = () => {
  return (
    <div className='experience' id='experience'>
        <h1 className='experience-heading'>Experience</h1>
        <div className='experience-list'>
            {arrayExperience.map((item,index)=>(
                <div className='experience-item' key={index}>
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