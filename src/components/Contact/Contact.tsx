import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './contact.css'
import { arrayContact } from '../../dummydata/contact'
import Card from './Card/Card'
import FormContact from './FormContact/FormContact'
const Contact = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])
  return (
    <div className='contact-container' id='contact'>
        <div className="contact">
            <h1 className='contact-heading' data-aos="fade-up">Contact Me</h1>
            <p className='contact-desc' data-aos="fade-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className='contact-cards' data-aos="fade-up">
                {
                    arrayContact.map((item,index)=>(
                        <Card key={index} contact={item}/>
                    ))
                }
            </div>
            <div className='contact-form' data-aos="fade-up">
                <FormContact/>
            </div>
        </div>
    </div>
  )
}

export default Contact