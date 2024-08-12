import React from "react";
import "./Portofolio.css";
import "../Skills/Skills.css";
import { data } from "../../Data";
import { Link } from "react-router-dom";

function Portofolio() {
  // const imgTest = data.image;
  console.log(data);
  return (
    <section id="projectes">
      <div className="head-section">
        <h2>My Projects</h2>
        <p>
          I created this website as my portfolio. I used React.js, JSX, React
          FontAwesome, CSS, EmailJS, and React Scroll.
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
