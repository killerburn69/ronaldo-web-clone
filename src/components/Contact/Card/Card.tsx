import React from 'react'
import { Contact } from '../../../dummydata/contact'
import './card.css'
interface ContactCardProps{
    contact:Contact
}
const Card = (props:ContactCardProps) => {
  return (
    <div className='contact-card'>
        <div className='contact-card__icon'>
            {props.contact.icon}
        </div>
        <h3 className='contact-card__heading'>{props.contact.title}</h3>
        <p className='contact-card__desc' style={{color:props.contact.isColorPrimary ? "#3e64ff" : "#999999"}}>{props.contact.desc}</p>
    </div>
  )
}

export default Card