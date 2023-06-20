import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './hire.css'
const Hire = () => {
  useEffect(()=>{
    Aos.init({duration:800})
  },[])
  return (
    <div className='hire-container'>
        <div className="hire" >
            <div className='hire-overlay'></div>
            <div className='hire-content' data-aos="fade-up">
                <h1 className='hire-heading'>
                    I'm <span>Available</span> for looking job
                </h1>
                <p className='hire-desc'>I will do my best at work</p>
                <button className='hire-btn'>Hire me</button>
            </div>
        </div>
    </div>
  )
}

export default Hire