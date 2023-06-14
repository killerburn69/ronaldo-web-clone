import React from 'react'
import { arrayService } from '../../dummydata/service'
import Card from './Card/Card'
import './service.css'
const Service = () => {
  return (
    <div className='service-container' id='services'>
        <div className="service">
            <h1 className='service-heading'>Services</h1>
            <p className='service-desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className='service-card'>
                {
                    arrayService.map((item, index)=>(
                        <Card key={index} service={item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Service