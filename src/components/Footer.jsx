import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesUp } from "@fortawesome/free-solid-svg-icons";
import frImgFlag from "../assets/images/svg/flags/fr.svg";
import { useTranslation } from "react-i18next";
const LinkToTop = () => {
  return (
    <a href="#main" id="link-top-top" className="d-flex justify-content-center">
      <FontAwesomeIcon icon={faAnglesUp} fixedWidth size="xl" />
    </a>
  );
};

const FooterMenuAccess = () => {
  const { t, i18n } = useTranslation();
  // console.log("t=", i18n.resolvedLanguage);
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <section id="title" className="mt-3 mb-3 pt-3 pb-3">
      <h3>Atayee's Electric</h3>
      <span
        className="d-flex justify-content-center align-items-center"
        style={{ outline: "1px solid white", padding: "0.1rem 0.7rem" }}
      >
        <img
          src={frImgFlag}
          style={{ width: "25px", height: "13px", marginLeft: "0px" }}
          alt="French Logo"
        />
        <span>French</span>
      </span>
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

const FooterTermsAndPolicies = () => {
  return (
    <section className="">
      <div className="rules text-light d-flex gap-3 fs-5">
        <a href="#" className="rules-link">
          imprint
        </a>
        <a href="#" className="rules-link">
          data protection
        </a>
        <a href="#" className="rules-link">
          terms and condition
        </a>
      </div>
      <div className="social-medial"></div>
    </section>
  );
};

function Footer() {
  return (
    <footer className="">
      <LinkToTop />
      <div className="container text-light d-flex flex-column">
        <FooterMenuAccess />
        <FooterTermsAndPolicies />
      </div>
    </footer>
  );
}

export default Footer;
