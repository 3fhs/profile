import React, { useState } from 'react'
import NavBar from '../../componants/Navbar/NavBar'
import Intro from '../../componants/intro/Intro'
import About from '../../componants/about/About'
import Skills from '../../componants/Skills/Skills'
import Portofolio from '../../componants/portofolio/Portofolio'
import Contact from '../../componants/contact/Contact'
import Footer from '../../componants/footer/Footer'
import { data } from '../../Data'
import Pagination from '../../componants/pagenation/Pagination'

function Home() {

    const [pageNumber, setPageNumber] = useState(1);
    const currentPage = 4;

    const pages = Math.ceil(data.length / currentPage);// دى علشان اعرف عدد الصفحات كام و استخدمت الماس سيل علشان يكون لاقرب عدد صحيح 
    const startPage = (pageNumber - 1) * currentPage; // علشان اجيب انا هبداء بانهى اندكس
    const endPage = pageNumber * currentPage; // علشان اجيب اخر اندكس عندى فى الصفحة 

    const wepSite = data.slice(startPage, endPage); // بقوله هاتلى الداتا دى من اول هنا لحد اخرك هنا 
    

  return (
    <div>
        <NavBar/>
        <Intro/>
        <About/>
        <Skills/>
        <Portofolio wepSite={wepSite} />
        <Pagination  page={pages} numberFunction={setPageNumber} number={pageNumber} /> 
        <Contact/>
        <Footer/>
    </div>
  )
}

export default Home