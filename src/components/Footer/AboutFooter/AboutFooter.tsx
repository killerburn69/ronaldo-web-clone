import React from 'react'
import {BsTwitter,BsInstagram} from 'react-icons/bs'
import {FaFacebookF} from 'react-icons/fa'
import './aboutfooter.css'
const AboutFooter = () => {
  return (
    <div className='footer-about'>
        <h1 className='footer-about__heading'>About</h1>
        <p className='footer-about__desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
        <div className='footer-about__icons'>
            <div className='footer-about__icons--item'>
                <BsTwitter/>
            </div>
            <div className='footer-about__icons--item'>
                <FaFacebookF/>
            </div>
            <div className='footer-about__icons--item'>
                <BsInstagram/>
            </div>
        </div>
    </div>
  )
}

export default AboutFooter