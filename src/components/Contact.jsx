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
              style={{
                padding: "2rem",
                boxShadow: "1px 1px 3px 1px rgba(0, 0, 0, 0.2)",
              }}
            >
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Name, First Name
                </label>
                <input type="email" className="form-control" id="fullName" />
                <br />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Your Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="email"
                />
                <div id="email" className="form-text">
                  We will never share your email with third parties!
                </div>
                <br />
              </div>
              <div className="mb-3">
                <label htmlFor="yourMessage" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="yourMessage"
                  rows="4"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-5">
          <div className="pt-5 pb-5 w-100">
            <h5>Reach out us</h5>
            <p>
              <a href="tel:+33753937431" style={links}>
                <FaPhoneSquareAlt />
                <span> &nbsp;&nbsp;+33 7 53 93 74 31</span>
              </a>
            </p>
            <hr />
            <h5>Write us</h5>
            <p>
              <a href="mailto:thunderrepairs69@gmail.com" style={links}>
                <FaRegEnvelope />
                <span>&nbsp;thunderrepairs69@gmail.com</span>
              </a>
            </p>
            <hr />
            <h5>Social Media</h5>
            <p>
              <span>
                <a href="http://">
                  <FaFacebook style={socialMedia} />
                </a>
              </span>
              <span>
                <a href="http://">
                  <FaInstagram style={socialMedia} />
                </a>
              </span>
              <span>
                <a href="http://">
                  <FaTiktok style={socialMedia} />
                </a>
              </span>
            </p>
            <hr />
            <h5>Meet us at</h5>
            <p>
              <address style={links}>
                <FaMapMarkerAlt />
                <span>&nbsp;Lyon, France</span>
              </address>
            </p>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22278.790331798307!2d4.849294924720369!3d45.734127153802895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4c1e2d5b30b85%3A0x1c08ab2e41e47c80!2s69008%20Lyon%2C%20France!5e0!3m2!1sen!2sde!4v1690854052918!5m2!1sen!2sde"
              style={{ border: "0", width: "100%", height: "100%" }}
              allowfullscreen=""
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
