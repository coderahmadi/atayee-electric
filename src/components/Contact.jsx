import Heading from "./subComponents/ComponentHeading";
import {
  FaPhoneSquareAlt,
  FaRegEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const links = {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    textDecoration: "none",
    color: "#eea47f",
    fontSize: "1.3rem",
  };
  return (
    <section id="contact" className="">
      <Heading>Contact</Heading>
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
                  Name, First name
                </label>
                <input type="email" className="form-control" id="fullName" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
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
              </div>
              <div className="mb-3">
                <label htmlFor="yourMessage" className="form-label">
                  Your Message
                </label>
                <textarea
                  className="form-control"
                  id="yourMessage"
                  rows="3"
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
            <h5>Reach out us:</h5>
            <p>
              <a href="tel:+33753937431" style={links}>
                <FaPhoneSquareAlt />
                <span> &nbsp;&nbsp;+33 7 53 93 74 31</span>
              </a>
            </p>
            <hr />
            <h5>Write us:</h5>
            <p>
              <a href="mailto:thunderrepairs69@gmail.com" style={links}>
                <FaRegEnvelope />
                <span>&nbsp;thunderrepairs69@gmail.com</span>
              </a>
            </p>
            <hr />
            <h5>Meet us at:</h5>
            <p>
              <address style={links}>
                <FaMapMarkerAlt />
                <span>&nbsp;Lyon, France</span>
              </address>
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d89077.18515740987!2d4.7525577999814015!3d45.75792096045803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516ae88797%3A0x408ab2ae4bb21f0!2sLyon%2C%20France!5e0!3m2!1sen!2sde!4v1689636833940!5m2!1sen!2sde"
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
