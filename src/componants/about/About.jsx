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
            My name is Mohamed Abdelghany, and I work as a front-end developer
          </h3>

          <div className="about-info-p">
            <p data-aos="fade-left">
              I have extensive experience in React.js, allowing me to create
              modern, interactive, and user-friendly websites. I have successfully
              worked on various projects, including e-commerce platforms, book
              stores, and safari stores.
            </p>
            <p data-aos="fade-right">
              I am committed to delivering high-quality work within agreed
              timelines, ensuring that your project meets all your expectations. I
              am always open to new projects and collaborations. Feel free to
              reach out to discuss your next web development project. You can
              contact me anytime.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
