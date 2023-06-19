import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import ImageShow from './components/ImageShow/ImageShow';
import Profile from './components/Profile/Profile';
import Service from './components/Service/Service';
import Project from './components/OurProject/Project';
import TotalProject from './components/TotalProject/TotalProject';
import OurBlog from './components/OurBlog/OurBlog';
import Hire from './components/Hire/Hire';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
// import logo from './logo.svg';
// import './App.css';

function App() {
  const [scrollTop, setScrollTop] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  console.log(Math.round(scrollTop))
  return (
    <div className="App">
      <Navbar scrollTop={scrollTop}/>
      <Hero/>
      <AboutMe/>
      <ImageShow/>
      <Profile scrollTop={scrollTop}/>
      <Service/>
      <Project/>
      <TotalProject/>
      <OurBlog/>
      <Hire/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
