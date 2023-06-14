import React from 'react'
import './ourblog.css'
import { arrayBlog } from '../../dummydata/blogs'
import Card from './Card/Card'
const OurBlog = () => {
  return (
    <div className='ourblog-container' id='myblog'>
        <div className='ourblog'>
            <h1 className='ourblog-heading'>Our Blogs</h1>
            <p className='ourblog-desc'>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className='ourblog-cards'>
                {
                    arrayBlog.map((item,index)=>(
                        <Card key={index} blog={item}/>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default OurBlog