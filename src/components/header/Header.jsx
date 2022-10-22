import React, { useState, useEffect } from "react";
import { IconDarkMode } from "../icons-dark-mode/IconDarkMode";
// import logo from "../../assets/img/logo/logo-higueron.png";
import { NavBarMobile } from "../navbar-mobile/NavBarMobile";
import { Navbar } from "../navbar/Navbar";
import Socials from "../social/Socials";
import "./header.scss";

export const Header = () => {
  const [bg, setBg] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      return window.scrollY > 50 ? setBg(true) : setBg(false);
    });
  });
  return (
    <header className={`container-header${bg ? "__opacity" : "__not-opacity"}`}>
      <div className="container-header__main">
        <div className="container-header__main__icon">
          <IconDarkMode />
        </div>
        {/* <div className="container-header__main__image-container">
          <figure className="container-header__main__image-container__figure">
            <img className="container-header__main__image-container__figure__img" src='https://th.bing.com/th/id/OIP.79XkCOoiX3q6XopFaGxkRAHaEK?w=329&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' />
          </figure>
        </div> */}
        <div className="container-header__main__desktop">
          <Navbar />
        </div>
        <div className="container-header__main__social">
          <Socials />
        </div>
        <div className="container-header__main__mobile">
          <NavBarMobile />
        </div>
      </div>
    </header>
  );
};
