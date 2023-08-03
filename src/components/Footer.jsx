import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaPhoneSquareAlt,
  FaRegEnvelope,
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaArrowCircleRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import frImgFlag from "../assets/images/svg/flags/fr.svg";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
const LinkToTop = () => {
  return (
    <a href="#main" id="link-top-top" className="d-flex justify-content-center">
      <FontAwesomeIcon icon={faAnglesUp} fixedWidth size="xl" />
    </a>
  );
};

const FooterTitleSetting = () => {
  const { t, i18n } = useTranslation();
  const links = {
    textDecoration: "none",
    color: "white",
    fontSize: "1.3rem",
    padding: "0.1rem 0.7rem",
  };
  // console.log("t=", i18n.resolvedLanguage);
  // function handleClick(lang) {
  //   i18n.changeLanguage(lang);
  // }
  return (
    <section id="title" className="mt-3 mb-3 pt-4 pb-4">
      <h3>{t("brand-text")}</h3>
      <address
        style={links}
        className="d-flex justify-content-start align-items-center"
      >
        <FaMapMarkerAlt />
        <span>&nbsp;Lyon - France</span>
        {/* <img
          src={frImgFlag}
          style={{ width: "25px", height: "13px", marginLeft: "0px" }}
          alt="French Logo"
        /> */}
      </address>

      <div className="changLang">
        <span className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault1"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            English
          </label>
        </span>
        <span className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="flexRadioDefault2"
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            French
          </label>
        </span>
      </div>
    </section>
  );
};
const FooterMenuAccess = () => {
  const { t } = useTranslation();
  return (
    <section id="footer-menu" className="row mt-2 mb-2 pt-4 pb-4">
      <div className="col-md-6">
        <NavLink to="/" className="footer-nav">
          <FaArrowCircleRight />
          &nbsp; {t("title-home")}
        </NavLink>
        <br />
        <NavLink to="/about" className="footer-nav">
          <FaArrowCircleRight />
          &nbsp; {t("title-about")}
        </NavLink>
        <br />
        <NavLink to="/services" className="footer-nav">
          <FaArrowCircleRight />
          &nbsp; {t("title-services")}
        </NavLink>
        <br />
        <NavLink to="/contact" className="footer-nav">
          <FaArrowCircleRight />
          &nbsp; {t("title-contact")}
        </NavLink>
      </div>
      <div className="col-md-6">
        <a href="tel:+33753937431" className="links">
          <FaPhoneSquareAlt />
          <span> &nbsp;+33 7 53 93 74 31</span>
        </a>
        <a href="mailto:thunderrepairs69@gmail.com" className="links">
          <FaRegEnvelope />
          <span>&nbsp;thunderrepairs69@gmail.com</span>
        </a>

        <a
          href="http://"
          target="_blank"
          rel="noreferrer"
          className="socialMedia"
        >
          <FaFacebook />
        </a>

        <a
          href="http://"
          target="_blank"
          rel="noreferrer"
          className="socialMedia"
        >
          <FaInstagram />
        </a>

        <a
          href="http://"
          target="_blank"
          rel="noreferrer"
          className="socialMedia"
        >
          <FaTiktok />
        </a>
      </div>
    </section>
  );
};

const FooterTermsAndPolicies = () => {
  const { t } = useTranslation();
  return (
    <section className="terms-policies">
      <div className="rules text-light d-flex flex-wrap gap-3 fs-5">
        <a href="#" className="rules-link">
          {t("terms-and-condition")}
        </a>{" "}
        <a href="#" className="rules-link">
          {t("data-protection")}
        </a>
        <a href="#" className="rules-link">
          {t("imprint")}
        </a>
      </div>
    </section>
  );
};

function Footer() {
  return (
    <footer className="">
      <LinkToTop />
      <div className="container text-light d-flex flex-column">
        <FooterTitleSetting />
        <FooterMenuAccess />
        <FooterTermsAndPolicies />
      </div>
    </footer>
  );
}

export default Footer;
