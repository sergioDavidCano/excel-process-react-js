import "./navbar_mobile.scss";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FiAlignRight, FiX } from "react-icons/fi";
import { motion } from "framer-motion";
import { navigation } from "../header/data";
import Socials from "../social/Socials";
export const NavBarMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();
  const circleVariants = {
    hidden: {
      scale: 0,
    },
    visible: {
      scale: 180,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 60,
      },
    },
  };
  const ulVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
      },
    },
  };
  return (
    <nav className="container">
      <div onClick={() => setIsOpen(true)} className="container__icon">
        <FiAlignRight className="container__icon__close" />
      </div>

      <motion.div
        variants={circleVariants}
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        className="container__motion-div"
      ></motion.div>

      <motion.ul
        variants={ulVariants}
        initial="hidden"
        animate={isOpen ? "visible" : ""}
        className={`${isOpen ? "container__right" : "container__right-full "} container__motion-ul`}
      >
        <div onClick={() => setIsOpen(false)} className="container__motion-ul__open">
          <FiX className="container__motion-ul__open__icon" />
        </div>
        {navigation.map((item, idx) => {
          return (
            <li className="container__motion-ul__li" key={idx}>
              {item.redirect === pathname ? (
                <span className={`container__motion-ul__li__select`}>{item.name}</span>
              ) : (
                <Link
                  className={`container__motion-ul__li__redirect`}
                  onClick={() => setIsOpen(false)}
                  to={item.redirect}
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
        <Socials />
      </motion.ul>
    </nav>
  );
};
