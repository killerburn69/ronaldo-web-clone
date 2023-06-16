import React from 'react'
import { Service } from '../../../dummydata/service'
import './card.css'
interface ServiceProps{
    service:Service
}
const Card = (props:ServiceProps) => {
  return (
    <div className='card-service'>
        <img className='card-service__image' src={props.service.icon} alt="" />
        <h4 className='card-service__heading'>
            {props.service.heading}
        </h4>
        <p className='card-service__desc'>{props.service.description}</p>
    </div>
  )
}

export default Card