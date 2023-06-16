import React, {useEffect} from 'react'
import { arrayPartnerImage } from '../../dummydata/partner'
import Aos from 'aos';
import 'aos/dist/aos.css';
import './imageshow.css'
const ImageShow = () => {
  useEffect(()=>{
    Aos.init({duration:800})
  },[])
  return (
    <div className='partner-container'>
        <div className='partner'>
            {
                arrayPartnerImage.map((image)=>(
                    <img data-aos="fade-up" className='partner-image' src={image.linkImage} alt={image.id} key={image.id}/>
                ))
            }
        </div>
    </div>
  )
}

export default ImageShow