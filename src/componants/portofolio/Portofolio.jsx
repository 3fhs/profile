import React, { useEffect, useState } from "react";
import "./Portofolio.css";
import "../Skills/Skills.css";
import { Link } from "react-router-dom";
import Title from "../title-head/Title";
import Pagination from "../pagenation/Pagination";
import { data } from "../../Data";
import Aos from "aos";

function Portofolio() {

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    })
  },[])

    const [pageNumber, setPageNumber] = useState(1);
    const currentPage = 3;

    const pages = Math.ceil(data.length / currentPage);// دى علشان اعرف عدد الصفحات كام و استخدمت الماس سيل علشان يكون لاقرب عدد صحيح 
    const startPage = (pageNumber - 1) * currentPage; // علشان اجيب انا هبداء بانهى اندكس
    const endPage = pageNumber * currentPage; // علشان اجيب اخر اندكس عندى فى الصفحة 

    const wepSite = data.slice(startPage, endPage); // بقوله هاتلى الداتا دى من اول هنا لحد اخرك هنا 

  return (
    <section className="sectionx" id="projectes">
      <div className="intro-conainer">
        <Title title="projects" />

        <div className="project-count">
          <div className="project-show">
            {wepSite.map((item) => (
              <Link
                to={item.location}
                target="_blank"
                className="cart"
                key={item.id}
                data-aos="fade-dwon"
              >
                <img src={item.image} alt={item.title} />
                <div className="cart-info">
                  <h3> Name : {item.title.slice(0, 20)}..</h3>
                  <h3> Technical Skills : {item.use.slice(0, 14)}.. </h3>
                  <p>{item.info.slice(0, 120)}..</p>
                </div>
              </Link>
            ))}
          </div>
          <Pagination page={pages} numberFunction={setPageNumber} number={pageNumber}/>
        </div>
      </div>
    </section>
  );
}

export default Portofolio;
