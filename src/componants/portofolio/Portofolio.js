import React from "react";
import "./Portofolio.css";
import "../Skills/Skills.css";
import { data } from "../../Data";
import { Link } from "react-router-dom";

function Portofolio() {
  return (
    <section id="projectes">
      <div className="head-section">
        <h2>My Projects</h2>
        <p>
          I created this website as my portfolio to showcase some projects I've
          worked on using the skills I've learned. Every day, I'm learning
          something new to improve the quality of my work and provide better
          service.
        </p>
      </div>
      <div className="port-cart">
        {data.map((item) => (
          <Link
            to={item.location}
            target="_blank"
            className="cart"
            key={item.id}
          >
            <img src={item.image} alt={item.title} />
            <div className="cart-inf">
              <h3>{item.title}</h3>
              <p>{item.info}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Portofolio;
