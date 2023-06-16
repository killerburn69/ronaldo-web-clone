import React from 'react'
import { arrayProject } from '../../dummydata/project'
import './project.css'
const Project = () => {
  return (
    <div className='project-container' id='projects'>
        <div className='project'>
            <h1 className='project-heading'>Our Projects</h1>
            <p className='project-desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className='project-image-category'>
                {
                    arrayProject.map((item,index)=>(
                        <div key={index} className='project-image-category__container'>
                            <img src={item.img} alt='' className='project-image-category__image'/>
                            <div className='project-image-category__overlay'>
                                <div className='project-image-category__content'>
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Project