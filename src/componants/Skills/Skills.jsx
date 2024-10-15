import React, { useEffect } from "react";
import "./Skills.css";
import html from "../../image/html.png";
import css from "../../image/css.webp";
import js from "../../image/javascript.webp";
import bootstrap from "../../image/bootstrap.png";
import tailwind from "../../image/tailwind.png";
import react from "../../image/react.png";
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
      <Title title="my skills" discrep="I can design the interface of websites. I have learned a lot of skills
          and I am still learning until I gain a lot of experience, and these
          are some of the skills"
      />
      <div className="section-content">
        <div data-aos="fade-right" className="card">
          <div className="cart-text">
            <img src={html} alt="it is skills" />
            <h3>HTML5</h3>
          </div>
          <p>HTML stands for Hyper Text Markup Language</p>
        </div>

        <div data-aos="fade-left" className="card">
          <div className="cart-text">
            <img src={css} alt="it is skills" />

            <h3>CSS</h3>
          </div>
          <p>CSS stands for Cascading Style Sheets</p>
        </div>

        <div data-aos="fade-right" className="card">
          <div className="cart-text">
            <img src={js} alt="it is skills" />
            <h3>JavaScript</h3>
          </div>
          <p>JavaScript Can Change HTML Styles (CSS)</p>
        </div>

        <div data-aos="fade-left" className="card">
          <div className="cart-text">
            <img src={react} alt="it is skills" />

            <h3>React JS</h3>
          </div>
          <p>React is a JavaScript library for building user interfaces</p>
        </div>

        <div data-aos="fade-right" className="card">
          <div className="cart-text">
            <img src={bootstrap} alt="it is skills" />

            <h3>Bootstrap</h3>
          </div>
          <p>
            Bootstrap is a free front-end framework for faster and easier web
            development
          </p>
        </div>

        <div data-aos="fade-left" className="card">
          <div className="cart-text">
            <img src={tailwind} alt="it is skills" />

            <h3>Tailwind</h3>
          </div>
          <p>
            Tailwind CSS is a utility-first CSS framework that allows developers to style applications quickly by using pre-built classes directly in HTML.          </p>
        </div>
      </div>
    </section>
  );
}

export default Skills;
