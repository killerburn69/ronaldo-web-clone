import React from 'react'
import './straight.css'
import { Skills } from '../../../../dummydata/profile'
interface StraightProps{
    skill:Skills
}
const Straight = (props:StraightProps) => {
  return (
    <div className='straight-container'>
        <div style={{display:"flex", justifyContent:"space-between", width:`${props.skill.ratio}`}}>
            <h4 className='straight-heading'>
                {props.skill.heading}
            </h4>
            <span style={{fontWeight:500}}>{props.skill.ratio}</span>
        </div>
        <div className='straight-progress-one'>
            <div className='straight-progress-two' style={{width:`${props.skill.ratio}`}}></div>
        </div>
    </div>
  )
}

export default Straight