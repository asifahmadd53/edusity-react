import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Campus from './components/Campus/Campus'
import Testimonials from './components/Testimonial/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/Videoplayer/VideoPlayer'

const App = () => {

  const [playState, setPlayState] =useState(false)

  return (
    <>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our Program' title='What we Offer'/>
      <Programs/>
      <About setPlayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What Student Says'/>
      <Testimonials/>
      <Title subTitle='Contact Us' title='get in Touch'/>
      <Contact/>
      <Footer/>
      <VideoPlayer playState= {playState} setPlayState={setPlayState}/>
      </div>
     
    </>
  )
}

export default App
