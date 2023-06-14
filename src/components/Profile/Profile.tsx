import React from 'react'
import Education from './Education/Education'
import Experience from './Experience/Experience'
import Skills from './Skills/Skills'
import Award from './Award/Award'
import { arrayProfileLink } from '../../dummydata/profile'
import './profile.css'
const Profile = () => {
  return (
    <div className='profile-container' id='resume'>
        <div className='profile'>
            <ul className='profile-links'>
                {arrayProfileLink.map((profileLink)=>(
                    <li className='profile-link-item' key={profileLink.id}>
                        <a className='profile-link-item__link' href={profileLink.id}>{profileLink.title}</a>
                    </li>
                ))}
            </ul>
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