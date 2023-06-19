import React, { useEffect, useState } from 'react'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'
import Award from './Award/Award'
import { arrayProfileLink } from '../../dummydata/profile'
import './profile.css'
interface NavbarProps{
    scrollTop:number
}
const Profile = (props:NavbarProps) => {
    const [isActive, setIsActive] = useState<string | null>(null)
    const setActiveItemSidebar = (item:string)=>{
        setIsActive(item)
    }
    useEffect(()=>{
        if(1307<=props.scrollTop && props.scrollTop<2460){
            setIsActive('#education')
        }
        if(2460<= props.scrollTop && props.scrollTop<3970){
            setIsActive('#experience')
        }
        if(3970<= props.scrollTop && props.scrollTop<4770){
            setIsActive('#skills')
        }
        if(4770<=props.scrollTop){
            setIsActive('#award')
        }
    },[props.scrollTop])
  return (
    <div className='profile-container' id='resume'>
        <div className='profile'>
            <div className='sticky'>
                <ul className='profile-links'>
                    {arrayProfileLink.map((profileLink)=>(
                        <li onClick={()=>{setActiveItemSidebar(profileLink.id)}} className={`profile-link-item`} key={profileLink.id}>
                            <a className={`profile-link-item__link ${profileLink.id === isActive  ? "active_link" : ""}`} href={profileLink.id}>{profileLink.title}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div style={{width:"100%"}}>
                <Education/>
                <Experience/>
                <Skills/>
                <Award/>
            </div>
        </div>
    </div>
  )
}

export default Profile