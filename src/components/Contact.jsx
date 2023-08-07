import Heading from "./subComponents/ComponentHeading";
import {
  FaPhoneSquareAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  const links = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textDecoration: "none",
    color: "#eea47f",
    fontSize: "1.3rem",
  };

  const socialMedia = {
    color: "#eea47f",
    fontSize: "1.3rem",
    margin: "0.3rem",
  };
  return (
    <section id="contact" className="">
      <Heading>{t("title-contact")}</Heading>
      <div className="row text-left">
        <div className="col-md-7">
          <div className="pt-5 pb-5 w-100">
            <form
              className="shadow"
              style={{
                padding: "2.3rem 1.2rem",
              }}
            >
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  {t("contact-form-name-title")}
                </label>
                <input type="email" className="form-control" id="fullName" />
                <br />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  {t("contact-form-email-title")}
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                />
                <div id="email" className="form-text">
                  {t("contact-form-email-note")}
                </div>
                <br />
              </div>
              <div className="mb-3">
                <label htmlFor="yourMessage" className="form-label">
                  {t("contact-form-message-title")}
                </label>
                <textarea
                  className="form-control"
                  id="yourMessage"
                  rows="4"
                ></textarea>
              </div>
              <div className="hstack gap-3">
                <button type="button" className="btn btn-primary">
                  {t("contact-form-submit-btn")}
                </button>
                <div className="vr"></div>
                <button type="button" className="btn btn-outline-danger">
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="pt-5 pb-5 w-100">
            <h5>{t("contact-phone-title")}</h5>
            <p>
              <a href="tel:+33753937431" style={links}>
                <FaPhoneSquareAlt />
                <span> &nbsp;&nbsp;+33 7 53 93 74 31</span>
              </a>
            </p>
            <hr />
            <h5>{t("contact-email-title")}</h5>
            <p>
              <a href="mailto:thunderrepairs69@gmail.com" style={links}>
                <FaRegEnvelope />
                <span>&nbsp;thunderrepairs69@gmail.com</span>
              </a>
            </p>
            <hr />
            <h5>{t("contact-social-media")}</h5>
            <p className="d-flex align-items-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/profile.php?id=100093047394271"
              >
                <FaFacebook style={socialMedia} />
              </a>
              <span
                className="vr"
                style={{
                  height: "20px",
                  marginTop: "0.3rem",
                  marginLeft: "0.2rem",
                  marginRight: "0.2rem",
                }}
              ></span>

              <a href="http://">
                <FaInstagram style={socialMedia} />
              </a>

              <span
                className="vr"
                style={{
                  height: "20px",
                  marginTop: "0.3rem",
                  marginLeft: "0.2rem",
                  marginRight: "0.2rem",
                }}
              ></span>
              <span>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.tiktok.com/@hussainhamid02?_t=8eb4Ilb5CLI&_r=1"
                >
                  <FaTiktok style={socialMedia} />
                </a>
              </span>
            </p>
            <hr />
            <h5>{t("contact-map-title")}</h5>
            <address style={links}>
              <FaMapMarkerAlt />
              <span>&nbsp;Lyon, France</span>
            </address>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22278.790331798307!2d4.849294924720369!3d45.734127153802895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1e2d5b30b85%3A0x1c08ab2e41e47c80!2s69008%20Lyon%2C%20France!5e0!3m2!1sen!2sde!4v1690854052918!5m2!1sen!2sde"
              style={{ border: "0", width: "100%", height: "100%" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
