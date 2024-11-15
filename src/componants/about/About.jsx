import React, { useEffect } from "react";
import "./About.css";
import "../Skills/Skills.css";
import Title from "../title-head/Title";
import me from "../../image/front-end.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد CSS

function About() {

  const clickOpenPdf = () => {
    const urlGoogleDrive = "https://docs.google.com/document/d/1cJxT28Yb7Dcg9x26vlFGC8VAT8Q9qEutZmGWv-6At_c/edit?usp=sharing";
    window.open(urlGoogleDrive, '_blank')
  }

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

            <div className="info-links" data-aos="fade-right">
                  <div className="info-img">
                    <img src={me} alt="my logo" className="logo-head"/>
                    <div className="icon-buttom">
                      <div className="icons">
                        <a
                          href="https://www.facebook.com/profile.php?id=100064105302365"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-facebook"></i>
                        </a>
                        <a
                          href="https://www.linkedin.com/in/mohamed-abd-elghany-b6b74a281"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-linkedin"></i>
                        </a>
                        <a
                          href="https://github.com/3fhs"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-github"></i>
                        </a>
                        <a
                          href="https://wa.me/01023853105"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="bi bi-whatsapp"></i>
                        </a>
                      </div>

                      <button className="btn" onClick={clickOpenPdf}>
                        <i className="bi bi-filetype-pdf"></i> Download Cv
                      </button>
                    </div>
                  </div>
            </div>


            <div className="about-info-p">
              <p data-aos="fade-down">
                front-end developer with a self-taught background in modern web technologies,
              </p>
              <p data-aos="fade-down">
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
