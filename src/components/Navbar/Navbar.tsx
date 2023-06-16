import React, { useEffect, useState } from 'react'
import './navbar.css'
import { arrayNavbarLink } from '../../dummydata/navbar'
import {FiMenu} from 'react-icons/fi'
interface NavbarProps{
    scrollTop:number
}
const Navbar = (props:NavbarProps) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [isActive, setIsActive] = useState(arrayNavbarLink[0].id)
    const setActiveItemNavbar = (item:string)=>{
        setIsActive(item)
    }
    useEffect(()=>{
        if(0<=props.scrollTop && props.scrollTop<520){
            setIsActive("#home")
        }
        if(520<= props.scrollTop && props.scrollTop<1300){
            setIsActive('#about')
        }
        if(1300<=props.scrollTop && props.scrollTop<5845){
            setIsActive('#resume')
        }
        if(5845<=props.scrollTop && props.scrollTop<7328){
            setIsActive('#services')
        }
        if(7328<=props.scrollTop && props.scrollTop<8637){
            setIsActive('#projects')
        }
        if(8637<=props.scrollTop && props.scrollTop<10033){
            setIsActive('#myblog')
        }
        if(10033<=props.scrollTop){
            setIsActive('#contact')
        }
    },[props.scrollTop])
  return (
    <div className={`navbar-container ${props.scrollTop > 100 ? "background" : ""}`} style={{position:`${props.scrollTop > 100 ? "fixed" : "absolute"}`}}>
        <nav className='navbar'>
            <div className='navbar-without-menu'>
                <a href="/" className='navbar__text-logo'>
                    <span className='navbar__text-logo__primary'>R</span>
                    <span className={`navbar__text-logo__secondary ${props.scrollTop > 100 ? "change-text" : ""}`}>onaldo</span>
                </a>     
                <div className={`navbar-links-container ${!openMenu?"close":""}`}>
                    <ul className='navbar-links'>
                        {arrayNavbarLink.map((linkItem)=>(
                            <li onClick={()=>setActiveItemNavbar(linkItem.id)} className={`navbar-links-item ${linkItem.id === isActive ? "active":""}`} key={linkItem.id}>
                                <a className={`${props.scrollTop > 100 ? "change-text" : ""}`} href={linkItem.id}>{linkItem.link}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='navbar-menu' onClick={()=>setOpenMenu(!openMenu)}>
                <FiMenu size={30} className='navbar-menu__icon'/>
                <span className='navbar-menu__title'>Menu</span>
            </div>
        </nav>
    </div>
  )
}

export default Navbar