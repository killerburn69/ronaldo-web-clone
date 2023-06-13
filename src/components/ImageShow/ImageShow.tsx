import React from 'react'
import { arrayPartnerImage } from '../../dummydata/partner'
import './imageshow.css'
const ImageShow = () => {
  return (
    <div className='partner-container'>
        <div className='partner'>
            {
                arrayPartnerImage.map((image)=>(
                    <img className='partner-image' src={image.linkImage} alt={image.id} key={image.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default ImageShow