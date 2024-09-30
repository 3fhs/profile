import React from 'react'
import NavBar from '../../componants/Navbar/NavBar'
import Intro from '../../componants/intro/Intro'
import About from '../../componants/about/About'
import Skills from '../../componants/Skills/Skills'
import Portofolio from '../../componants/portofolio/Portofolio'
import Contact from '../../componants/contact/Contact'
import Footer from '../../componants/footer/Footer'

function Home() {

  return (
    <div>
        <NavBar/>
        <Intro/>
        <About/>
        <Skills/>
        <Portofolio/>
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home