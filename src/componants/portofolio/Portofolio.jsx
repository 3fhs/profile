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
    const currentPage = 2;

    const pages = Math.ceil(data.length / currentPage);// دى علشان اعرف عدد الصفحات كام و استخدمت الماس سيل علشان يكون لاقرب عدد صحيح 
    const startPage = (pageNumber - 1) * currentPage; // علشان اجيب انا هبداء بانهى اندكس
    const endPage = pageNumber * currentPage; // علشان اجيب اخر اندكس عندى فى الصفحة 

    const wepSite = data.slice(startPage, endPage); // بقوله هاتلى الداتا دى من اول هنا لحد اخرك هنا 

  return (
    <section className="sectiony" id="projectes">
      <Title title="projects" />

      <div className="port-cart">
        {wepSite.map((item) => (
          <Link
            to={item.location}
            target="_blank"
            className="cart"
            key={item.id}
            data-aos="fade-dwon"
          >
            <img src={item.image} alt={item.title} />
            <div className="cart-inf">
              <h3> Name : {item.title}</h3>
              <h3> Technical Skills : {item.use} </h3>
              <p>{item.info}</p>
            </div>
          </Link>
        ))}
      </div>
      <Pagination page={pages} numberFunction={setPageNumber} number={pageNumber}/>
    </section>
  );
}

export default Portofolio;
