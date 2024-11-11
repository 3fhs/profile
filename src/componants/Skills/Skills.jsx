import React, { useEffect } from "react";
import "./Skills.css";
import html from "../../image/free-html5-logo-icon-svg.webp";
import css from "../../image/css-svg.webp";
import js from "../../image/js-svg.svg";
import bootstrap from "../../image/Bootstrap_logo.svg.png";
import tailwind from "../../image/Tailwind_CSS_Logo.svg.png";
import reduxTool from "../../image/redux-tool-kit.webp";
import redux from "../../image/redux.svg";
import react from "../../image/logo-react-svg.svg";
import Title from "../title-head/Title";
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد CSS

function Skills() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة
      // once: true,     // تشغيل الحركة مرة واحدة فقط
      once: false, // لجعل العناصر تعمل بشكل متكرر مع التمرير فى كل مرة 
    });
  }, []);

  return (
    <section className="sectionx" id="skills">
      <Title title="my skills"/>
      
      <div className="section-content">
        <div data-aos="fade-right" className="card">
          <div className="cart-text">
            <img src={html} alt="it is skills" />
            <h3>HTML5</h3>
          </div>
        </div>

        <div data-aos="fade-left" className="card">
          <div className="cart-text">
            <img src={css} alt="it is skills" />

            <h3>CSS</h3>
          </div>
        </div>

        <div data-aos="fade-right" className="card">
          <div className="cart-text">
            <img src={js} alt="it is skills" />
            <h3>JavaScript</h3>
          </div>
        </div>

        <div data-aos="fade-left" className="card">
          <div className="cart-text">
            <img src={react} alt="it is skills" />

            <h3>React JS</h3>
          </div>
        </div>

        <div data-aos="fade-right" className="card">
          <div className="cart-text">
            <img src={bootstrap} alt="it is skills" />

            <h3>Bootstrap</h3>
          </div>
        </div>

        <div data-aos="fade-left" className="card">
          <div className="cart-text">
            <img src={tailwind} alt="it is skills" />

            <h3>Tailwind</h3>
          </div>
        </div>

        <div data-aos="fade-right" className="card">
          <div className="cart-text">
            <img src={redux} alt="it is skills" />

            <h3>Redux</h3>
          </div>
        </div>

        <div data-aos="fade-left" className="card">
          <div className="cart-text">
            <img src={reduxTool} alt="it is skills" />

            <h3>Redux Tool/Kit</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
