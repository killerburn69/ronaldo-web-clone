import React from 'react'
import './card.css'
import { Skills } from '../../../../dummydata/profile'
interface CardProps{
    skill:Skills
}
const Card = (props:CardProps) => {
  return (
    <div className='card-container'>
        <h2 className="card-heading">{props.skill.heading}</h2>
        <div className='card-box'>
            <div className='card-box__percent'>
                <svg>
                    <circle cx="90" cy="90" r="90"></circle>
                    <circle style={{strokeDashoffset:`calc(566 - (566 * ${props.skill.ratio}) / 100)`}} cx="90" cy="90" r="90"></circle>
                </svg>
                <div className='card-box__number'>
                    <h2>{props.skill.ratio}<span>%</span></h2>
                </div>
            </div>
        </div>
        {/* <div className='card-progress-month'>
            <div className='progress-detail'>
                <h2>{props.skill.last_week}</h2>
                <span>Last week</span>
            </div>
            <div>
                <div className='card-vertical'></div>
            </div>
            <div className='progress-detail'>
                <h2>{props.skill.last_month}</h2>
                <span>Last month</span>
            </div>
        </div> */}
    </div>
  )
}

export default Card