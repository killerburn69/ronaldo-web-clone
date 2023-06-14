import React from 'react'
import { arrayTotalProject } from '../../dummydata/project'
import './totalproject.css'
const TotalProject = () => {
  return (
    <div className='project-total-container'>
      <div className='project-total'>
          {
              arrayTotalProject.map((item,index)=>(
                  <div className='project-total__box' key={index}>
                      <h1 className='project-total__heading'>{item.number}</h1>
                      <p className='project-total__title'>{item.title}</p>
                  </div>
              ))
          }
      </div>
    </div>
  )
}

export default TotalProject