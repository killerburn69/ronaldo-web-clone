import React from 'react'
import './aboutme.css'
import RonaldoImage from "../../images/about.jpg.webp"
import { arrayPropertiesProfile } from '../../dummydata/aboutme'
const AboutMe = () => {
  return (
    <div className='aboutme-container' id="about">
        <div className='aboutme'>
            <div className='aboutme-image'>
                <img src={RonaldoImage} alt="" />
            </div>
            <div className='aboutme-info'>
                <h1 className='aboutme-info__heading'>About Me</h1>
                <p className='aboutme-info__desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <div className='aboutme-profile'>
                    {arrayPropertiesProfile.map((property)=>(
                        <div className='aboutme-profile__item' key={property.id}>
                            <h4>{property.title}</h4>
                            <p>{property.description}</p>
                        </div>
                    ))}
                </div>
                <div className='number-projects'>
                    <span className='number-projects__heading'>120 </span>
                    <span>Project complete</span>
                </div>
                <button className='downloadbtn'>Download CV</button>
            </div>
        </div>
    </div>
  )
}

export default AboutMe