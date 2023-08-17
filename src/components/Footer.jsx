import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaPhoneSquareAlt,
  FaRegEnvelope,
  FaFacebook,
  FaTiktok,
  FaArrowCircleRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
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
  // console.log("t=", i18n.resolvedLanguage);
  function handleChange(e) {
    i18n.changeLanguage(e.target.value);
  }
  return (
    <section id="title" className="mt-3 mb-3 pt-4 pb-4">
      <h3>{t("brand-text")}</h3>
      <address className="d-flex justify-content-start align-items-center">
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
            value="en"
            onChange={handleChange}
            checked={i18n.resolvedLanguage === "en" ? "checked" : ""}
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
            value="fr"
            id="flexRadioDefault2"
            onChange={handleChange}
            checked={i18n.resolvedLanguage === "fr" ? "checked" : ""}
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
      <div className="col-md-3 fma">
        <NavLink to="/atayee-electric/" className="footer-nav">
          <FaArrowCircleRight />
          &nbsp; {t("title-home")}
        </NavLink>
        <br />
        <NavLink to="/atayee-electric/about" className="footer-nav">
          <FaArrowCircleRight />
          &nbsp; {t("title-about")}
        </NavLink>
        <br />
        <NavLink to="/atayee-electric/services" className="footer-nav">
          <FaArrowCircleRight />
          &nbsp; {t("title-services")}
        </NavLink>
        <br />
        <NavLink to="/atayee-electric/contact" className="footer-nav">
          <FaArrowCircleRight />
          &nbsp; {t("title-contact")}
        </NavLink>
      </div>
      <div className="col-md-5 fma">
        <a href="tel:+33753937431" className="links">
          <FaPhoneSquareAlt />
          <span> &nbsp;+33 7 53 93 74 31</span>
        </a>
        <a href="mailto:thunderrepairs69@gmail.com" className="links">
          <FaRegEnvelope />
          <span>&nbsp;thunderrepairs69@gmail.com</span>
        </a>

        <span className="hstack gap-3">
          <a
            href="https://www.facebook.com/profile.php?id=100093047394271"
            target="_blank"
            rel="noreferrer"
            className="socialMedia"
          >
            <FaFacebook />
          </a>
          <span className="vr"></span>
          <a
            href="https://www.tiktok.com/@hussainhamid02?_t=8eb4Ilb5CLI&_r=1"
            target="_blank"
            rel="noreferrer"
            className="socialMedia"
          >
            <FaTiktok />
          </a>
        </span>
      </div>
      <div className="col-md-4 fma">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22278.790331798307!2d4.849294924720369!3d45.734127153802895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1e2d5b30b85%3A0x1c08ab2e41e47c80!2s69008%20Lyon%2C%20France!5e0!3m2!1sen!2sde!4v1690854052918!5m2!1sen!2sde"
          style={{ border: "0", width: "100%", height: "100%" }}
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
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
        </a>
        <a href="#" className="rules-link">
          {t("data-protection")}
        </a>
        <a href="#" className="rules-link">
          {t("imprint")}
        </a>
      </div>
      <div className="p-3" id="devep">
        <p className="fs-5">
          &nbsp;designed and developed by ~ <span>Ahmadi</span>{" "}
        </p>
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
