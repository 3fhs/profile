import React, { useEffect } from "react";
import "./About.css";
import "../Skills/Skills.css";
import Title from "../title-head/Title";
import about from "../../image/Front-End-Developer-Skills-1024x543.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد CSS

function About() {

  useEffect(() => {
    AOS.init({
      duration: 1000, // مدة الحركة
      once: true,     // تشغيل الحركة مرة واحدة فقط عند التمرير
    });

    // تحديث تأثيرات AOS عند التمرير أو تغيير الحالة في الصفحة
    window.addEventListener('scroll', AOS.refresh);

    // تنظيف الـ EventListener عندما يتم إلغاء تركيب المكون
    return () => {
      window.removeEventListener('scroll', AOS.refresh);
    };
  }, []);

  return (
    <section className="sectionx " id="about">
      <div className="intro-conainer">
        <Title title="About me" discrep={false}/>
        <div className="about-count">
          <div className="about-info">
            <img src={about} alt="about me" style={{
                  maxWidth: "400px",
                  height: "400px",
                  objectFit: "cover",
                  borderRadius: "12px",
                  border: "5px solid black",
                  marginBottom:"10px",
                  width:"100%",
                }}
            />
            <div className="about-info-p">
              <p data-aos="fade-left">
                front-end developer with a self-taught background in modern web technologies,
              </p>
              <p data-aos="fade-right">
                actively seeking opportunities to leverage my skills in a professional environment.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
