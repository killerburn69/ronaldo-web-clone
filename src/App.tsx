import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import AboutMe from './components/AboutMe/AboutMe';
import ImageShow from './components/ImageShow/ImageShow';
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
    </div>
  );
}

export default App;
