import React from 'react'
import './contact.css'
import { arrayContact } from '../../dummydata/contact'
import Card from './Card/Card'
import FormContact from './FormContact/FormContact'
const Contact = () => {
  return (
    <div className='contact-container' id='contact'>
        <div className="contact">
            <h1 className='contact-heading'>Contact Me</h1>
            <p className='contact-desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className='contact-cards'>
                {
                    arrayContact.map((item,index)=>(
                        <Card key={index} contact={item}/>
                    ))
                }
            </div>
            <div className='contact-form'>
                <FormContact/>
            </div>
        </div>
    </div>
  )
}

export default Contact