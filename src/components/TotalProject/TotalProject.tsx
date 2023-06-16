import React, { useEffect } from 'react'
import { arrayTotalProject } from '../../dummydata/project'
import './totalproject.css'
import Aos from 'aos';
import 'aos/dist/aos.css';
import CountUp from 'react-countup';
const TotalProject = () => {
  useEffect(()=>{
    Aos.init({duration:800})
},[])
  return (
    <div className='project-total-container'>
      <div className='project-total'>
          {
              arrayTotalProject.map((item,index)=>(
                  <div data-aos="fade-up" data-aos-duration={1000+index*30} className='project-total__box' key={index}>
                      <h1 className='project-total__heading'>
                        <CountUp start={0} end={+item.number} duration={5} delay={0}/>
                      </h1>
                      <p className='project-total__title'>{item.title}</p>
                  </div>
              ))
          }
      </div>
    </div>
  )
}

export default TotalProject