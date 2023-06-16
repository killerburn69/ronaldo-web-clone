
import "./hero.css"
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import {BsArrowDown} from 'react-icons/bs'
const Hero = () => {
    const [text]= useTypewriter({
        words:['Web Designer.', 'Developer.','Photographer.','Marketer.','Blogger.'],
        loop:0,
        typeSpeed:120,
        delaySpeed:80

    })
  return (
    <div id='home' className='hero-container'>
        <div className='hero'>
            <h3 className='hero-heading__submain'>hey! i am</h3>
            <h1 className='hero-heading__main'>Ronaldo Fredrickson</h1>
            <h2 className='hero-heading__typewriter'>I'm a <span className='text-typewriter'>{text}</span>
                <span className='cursor-typewriter'>
                    <Cursor cursorStyle="|" cursorBlinking={false}/>
                </span> 
            </h2>
        </div>
        <a href="#resume" className='hero-scroll'>
            <BsArrowDown size={20} color='#3e64ff' className='icon-scroll'/>
        </a>
        {/* <div className='hero-scroll'>
        </div> */}
    </div>
  )
}

export default Hero