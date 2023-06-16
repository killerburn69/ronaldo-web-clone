import React, { useEffect } from 'react'
import './skills.css'
import Card from './Card/Card'
import { arraySkills, arraySkillsRatio } from '../../../dummydata/profile'
import Straight from './Straight/Straight'
import Aos from 'aos';
import 'aos/dist/aos.css';
const Skills = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])
  return (
    <div className='skills' id='skills'>
        <h1 className='skills-heading' data-aos="fade-up">Skills</h1>
        <div className='skills-progress' data-aos="fade-up">
            {
                arraySkillsRatio.map((item,index)=>(
                    <Card key={index} skill={item}/>
                ))
            }
        </div>
        <div className='skills-straight-progress' data-aos="fade-up">
            {
                arraySkills.map((item,index)=>(
                    <Straight key={index} skill={item}/>
                ))
            }
        </div>
    </div>
  )
}

export default Skills