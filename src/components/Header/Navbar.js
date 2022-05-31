import React, { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <nav>
      <a href="/" id="volley_logo">
        <h2>VOLLEY</h2>
      </a>
      {(toggleMenu || screenWidth > 1013) && (
        <ul className="list">
          <li className="items">
            <a href="/">Accueil</a>
          </li>
          <li className="items">
            <a href="./infos-utiles">Infos utiles</a>
          </li>
          <li className="items">
            <a href="./membres">Membres</a>
          </li>
          <li className="items">
            <a href="./notre-histoire">Notre histoire</a>
          </li>
          <li className="items">
            <a href="./contact">Contact</a>
          </li>
        </ul>
      )}

      <div
        onClick={toggleNav}
        id="menuToggle"
        className={!toggleMenu ? "burger" : "burger burger_open"}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
