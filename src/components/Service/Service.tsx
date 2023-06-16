import React, { useEffect } from 'react'
import { arrayService } from '../../dummydata/service'
import Card from './Card/Card'
import './service.css'
import Aos from 'aos';
import 'aos/dist/aos.css';

const Service = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])
  return (
    <div className='service-container' id='services'>
        <div className="service">
            <h1 className='service-heading' data-aos="fade-up">Services</h1>
            <p className='service-desc' data-aos="fade-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className='service-card' data-aos="fade-up">
                {
                    arrayService.map((item, index)=>(
                        <Card key={index} service={item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Service