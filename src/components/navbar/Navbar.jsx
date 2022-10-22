import "./navbar.scss";
import React from "react";
import { navigation } from "../header/data";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="navbar-desktop">
      <ul className="navbar-desktop__ul">
        {navigation.map((item, idx) => {
          return (
            <li key={idx} className="navbar-desktop__ul__li">
              {item.redirect === pathname ? (
                <span className={`navbar-desktop__ul__li__select`}>{item.name}</span>
              ) : (
                <Link
                  className={`navbar-desktop__ul__li__redirect`}
                  to={item.redirect}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
