import React, { useState } from "react";
import "./NavBar.css";
import folder from "../../image/folder.webp";
import { Link } from "react-scroll";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <span className="logo"> MHM </span>
        <div className="navmenu">
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menu"
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menu"
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menu"
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projectes"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="menu"
          >
            Projects
          </Link>
        </div>
        <button
          className="navbuttom"
          onClick={() => {
            document
              .getElementById("contact")
              .scrollIntoView({ behavior: "smooth" });
          }}
        >
          <img src={folder} alt="my cv" className="navcontact" /> Cotact Me
        </button>
        {/* i make a buttom to use in small screen */}
        <FontAwesomeIcon
          className="icon-menu"
          icon={faBars}
          onClick={() => setShowMenu(!showMenu)}
        />
        <div
          className="small-navmenu"
          style={{ display: showMenu ? "flex" : "none" }}
        >
          <Link
            activeClass="active"
            to="intro"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="small-menu"
            onClick={() => setShowMenu(false)}
          >
            Home
          </Link>
          <Link
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="small-menu"
            onClick={() => setShowMenu(false)}
          >
            About
          </Link>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="small-menu"
            onClick={() => setShowMenu(false)}
          >
            Skills
          </Link>
          <Link
            activeClass="active"
            to="projectes"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="small-menu"
            onClick={() => setShowMenu(false)}
          >
            Projectes
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="small-menu"
            onClick={() => setShowMenu(false)}
          >
            Cotact Me
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
