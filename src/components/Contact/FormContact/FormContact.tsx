import React from 'react'
import User from '../../../images/about.jpg.webp'
import './formcontact.css'
const FormContact = () => {
  return (
    <div className='form-contact'>
        <img src={User} alt="" className='form-contact__img'/>
        <form action="" className='form-contact__form'>
            <div className='form-contact__input'>
                <input type="text" name="" id="name" placeholder="Your Name"/>
            </div>
            <div className='form-contact__input'>
                <input type="email" name="" id="email" placeholder='Your Email'/>
            </div>
            <div className='form-contact__input'>
                <input type="text" name="" id="subject" placeholder='Subject'/>
            </div>
            <div className='form-contact__input'>
                <textarea name="" id="message" placeholder='Message'></textarea>
            </div>
            <button className='form-contact__btn' type='submit'>SEND MESSAGE</button>
        </form>
    </div>
  )
}

export default FormContact