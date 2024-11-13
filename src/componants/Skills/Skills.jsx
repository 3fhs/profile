import React, { useEffect } from "react";
import "./Skills.css";
import Title from "../title-head/Title";
import AOS from 'aos';
import 'aos/dist/aos.css'; // استيراد CSS
import Star from "./Star";
import { skills } from "../../Data";

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
      <div className="intro-conainer">

        <Title title="my skills"/>
        
        <div className="section-content">
          {skills.map(item => 
            <div data-aos="fade-right" className="card" key={item.id}>
              <div className="cart-text">
                <img src={item.image} alt="it is skills" />
                <div style={{display:'flex',flexDirection:'column'}}>
                  <div className="star" style={{ display: "flex", alignItems: "center", justifyContent: "right", gap: "2px"}}>
                    <Star star={item.star}/>
                  </div>
                  <h3>{item.skill}</h3>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}

export default Skills;
