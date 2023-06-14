import React from 'react'
import AboutFooter from './AboutFooter/AboutFooter'
import Question from './Question/Question'
import Link from './Link/Link'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className='footer'>
            <div className='footer-column'>
                <AboutFooter/>
                <Link heading='Links' linkfive='Contact' linkfour='Projects' linkthree='Services' linktwo='About' linkone='Home'/>
                <Link heading='Services' linkfive='Graphic Design' linkfour='Data Analysis' linkthree='Business Strategy' linktwo='Web Development' linkone='Web Design'/>
                <Question/>
            </div>
            <p className='footer-copy'>Copyright ©2023 All rights reserved | This template is made with by Colorlib</p>
        </div>
    </div>
  )
}

export default Footer