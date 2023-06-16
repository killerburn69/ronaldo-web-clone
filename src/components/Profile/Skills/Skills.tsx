import React from 'react'
import './skills.css'
import Card from './Card/Card'
import { arraySkills, arraySkillsRatio } from '../../../dummydata/profile'
import Straight from './Straight/Straight'
const Skills = () => {
  return (
    <div className='skills' id='skills'>
        <h1 className='skills-heading'>Skills</h1>
        <div className='skills-progress'>
            {
                arraySkillsRatio.map((item,index)=>(
                    <Card key={index} skill={item}/>
                ))
            }
        </div>
        <div className='skills-straight-progress'>
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