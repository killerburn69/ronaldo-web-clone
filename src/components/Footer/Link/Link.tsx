import React from 'react'
import {FaLongArrowAltRight} from 'react-icons/fa'
import './link.css'
interface LinkProps{
    heading:string;
    linkone:string;
    linktwo:string;
    linkthree:string;
    linkfour:string;
    linkfive:string;
}
const Link = (props:LinkProps) => {
  return (
    <div className='link-footer'>
        <h1 className='link-footer__heading'>{props.heading}</h1>
        <ul className='link-footer__links'>
            <li className='link-footer__link'>
                <a href="#" className='link-footer__link--item'>
                    <FaLongArrowAltRight style={{marginRight:"5px"}}/>
                    {props.linkone}
                </a>
            </li>
            <li className='link-footer__link'>
                <a href="#" className='link-footer__link--item'>
                    <FaLongArrowAltRight style={{marginRight:"5px"}}/>
                    {props.linktwo}
                </a>
            </li>
            <li className='link-footer__link'>
                <a href="#" className='link-footer__link--item'>
                    <FaLongArrowAltRight style={{marginRight:"5px"}}/>
                    {props.linkthree}
                </a>
            </li>
            <li className='link-footer__link'>
                <a href="#" className='link-footer__link--item'>
                    <FaLongArrowAltRight style={{marginRight:"5px"}}/>
                    {props.linkfour}
                </a>
            </li>
            <li className='link-footer__link'>
                <a href="#" className='link-footer__link--item'>
                    <FaLongArrowAltRight style={{marginRight:"5px"}}/>
                    {props.linkfive}
                </a>
            </li>
        </ul>
    </div>
  )
}

export default Link