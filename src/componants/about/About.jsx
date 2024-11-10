import React, { useEffect } from "react";
import "./About.css";
import "../Skills/Skills.css";
import Title from "../title-head/Title";
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
    <section className="sectiony" id="about">
      <Title title="About me" discrep={false}/>
      <div className="about-count">
        <div className="about-info">
          <h3 data-aos="fade-right">
            My name is Mohamed Abdelghany
          </h3>

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
    </section>
  );
}

export default About;
