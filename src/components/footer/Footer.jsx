import React from "react";
import moment from "moment";
import { social } from "../../data";
import logo from "../../assets/img/logo/logo-higueron.png";
import "./footer.scss";
import { useTranslation } from "react-i18next";
export const Footer = () => {
  const { t } = useTranslation("global");
  return (
    <footer className="container-main-footer">
      <div className="container-custom container-sub-main-footer">
        <div className="container-social">
          <div className="container-sub-social">
            {social.map((item, index) => {
              const { href, icon } = item;
              return (
                <a className="social-redirect" href={href} key={index}>
                  {icon}
                </a>
              );
            })}
          </div>
          <div className="wp-block-image">
            <figure className="figure-img">
              <img src={logo} alt="" />
            </figure>
          </div>
          <p className="parrafo">
            &copy; {`${moment().format("YYYY")} `}Sergio Cano.{" "}
            {t("footer.all-reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};
