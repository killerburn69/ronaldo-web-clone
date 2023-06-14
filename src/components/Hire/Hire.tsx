import React from 'react'
import './hire.css'
const Hire = () => {
  return (
    <div className='hire-container'>
        <div className="hire">
            <div className='hire-overlay'></div>
            <div className='hire-content'>
                <h1 className='hire-heading'>
                    I'm <span>Available</span> for freelancing
                </h1>
                <p className='hire-desc'>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <button className='hire-btn'>Hire me</button>
            </div>
        </div>
    </div>
  )
}

export default Hire