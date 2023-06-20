import React,{useEffect} from 'react'
import './aboutme.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import RonaldoImage from "../../images/78564d9b3bf1f4afade0.jpg"
import { arrayPropertiesProfile } from '../../dummydata/aboutme'
import CountUp from 'react-countup';
const AboutMe = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])
  return (
    <div className='aboutme-container' id="about">
        <div className='aboutme'>
            <div className='aboutme-image'>
                <img src={RonaldoImage} alt="" />
            </div>
            <div className='aboutme-info'>
                <h1 className='aboutme-info__heading' data-aos="fade-up">About Me</h1>
                <p className='aboutme-info__desc' data-aos="fade-up">
                    Hi. My name is Kiet. I am a 3rd year student. My major is Information Technology. I am a person who loves to explore, learn, learn new things and am not afraid of difficulties
                </p>
                <div className='aboutme-profile'>
                    {arrayPropertiesProfile.map((property)=>(
                        <div className='aboutme-profile__item' data-aos="fade-up" key={property.id}>
                            <h4>{property.title}</h4>
                            <p>{property.description}</p>
                        </div>
                    ))}
                </div>
                <div className='number-projects' data-aos="fade-up">
                    <span className='number-projects__heading'><CountUp start={0} end={120} duration={50} delay={0}/> </span>
                    <span>Project complete</span>
                </div>
                <button data-aos="fade-up" className='downloadbtn'>
                    Download CV
                </button>
            </div>
        </div>
    </div>
  )
}

export default AboutMe