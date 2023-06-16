import React from 'react'
import {FaMapMarkerAlt} from 'react-icons/fa'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {HiMail} from 'react-icons/hi'
import './question.css'
const Question = () => {
  return (
    <div className='question-footer'>
        <h1 className='question-footer__heading'>Have a Questions</h1>
        <div className='question-footer__info'>
            <div className='question-footer__info--item'>
                <FaMapMarkerAlt className='question-footer__info--icon' style={{color:"white"}}/>
                <p className='question-footer__info--desc'>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </div>
            <div className='question-footer__info--item'>
                <BsFillTelephoneFill className='question-footer__info--icon'/>
                <p className='question-footer__info--desc'>+2 392 3929 210</p>
            </div>
            <div className='question-footer__info--item'>
                <HiMail className='question-footer__info--icon'/>
                <p className='question-footer__info--desc'>info@yourdomain.com</p>
            </div>
        </div>
    </div>
  )
}

export default Question;