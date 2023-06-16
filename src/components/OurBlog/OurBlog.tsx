import React,{useEffect} from 'react'
import './ourblog.css'
import { arrayBlog } from '../../dummydata/blogs'
import Card from './Card/Card'
import Aos from 'aos';
import 'aos/dist/aos.css';
const OurBlog = () => {
    useEffect(()=>{
        Aos.init({duration:800})
    },[])
  return (
    <div className='ourblog-container' id='myblog'>
        <div className='ourblog'>
            <h1 className='ourblog-heading' data-aos="fade-up">Our Blogs</h1>
            <p className='ourblog-desc' data-aos="fade-up">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
            <div className='ourblog-cards' data-aos="fade-up">
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