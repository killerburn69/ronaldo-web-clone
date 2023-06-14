import React from 'react'
import './card.css'
import { Blog } from '../../../dummydata/blogs'
interface CardBlogprops{
    blog:Blog
}
const Card = (props:CardBlogprops) => {
  return (
    <div className='ourblog-card'>
        <img className='ourblog-card__image' src={props.blog.img} alt="" />
        <h3 className='ourblog-card__heading'>{props.blog.heading}</h3>
        <div className='ourblog-card__status'>
            <span className='ourblog-card__date'>{props.blog.date}</span>
            <span className='ourblog-card__role'>{props.blog.role}</span>
            <span className='ourblog-card__comment'>{props.blog.commentIcon} {props.blog.commentNumber}</span>
        </div>
        <p className='ourblog-card__desc'>{props.blog.desc}</p>
    </div>
  )
}

export default Card