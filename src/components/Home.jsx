import Heading from "./subComponents/ComponentHeading";
import { NavLink } from "react-router-dom";

import { FaInfoCircle } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import sliderImg1 from "../assets/images/sliders/sl1.jpg";
import sliderImg2 from "../assets/images/sliders/sl2.jpg";
import sliderImg3 from "../assets/images/sliders/sl3.jpg";
const Home = () => {
  const { t, i18n } = useTranslation();

  const sliderImgStyle = {
    height: "60vh",
    objectFit: "cover",
    objectPosition: "bottom",
  };

  // console.log("t=", i18n.resolvedLanguage);
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div id="home">
      <Heading>{t("title-home")}</Heading>

      {/* <FontAwesomeIcon icon={faSpinner} spin /> */}
      <div className="row mt-5 mb-5">
        <div className="col-md-9 lside">
          <div id="sliderE" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  style={sliderImgStyle}
                  src={sliderImg3}
                  className="d-block w-100"
                  alt="slider image one"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={sliderImgStyle}
                  src={sliderImg2}
                  className="d-block w-100"
                  alt="slider image one"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={sliderImgStyle}
                  src={sliderImg1}
                  className="d-block w-100"
                  alt="slider image one"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#sliderE"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#sliderE"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="col-md-3 rside">
          {/* <div className="alert alert-primary" role="alert">
            <h2 className="display-6 d-flex align-items-center">
              <FaInfoCircle size="1.3rem" />
              <span style={{ fontSize: "1.8rem" }}>&nbsp;navigate to</span>
            </h2>
          </div> */}
          <div className="p-2 mb-4 rounded">
            <NavLink to="/atayee-electric/about" className="fs-5 ps-2">
              <FontAwesomeIcon icon={faAnglesRight} fixedWidth size="sm" />
              <span className="linkText">&nbsp;{t("title-about")}</span>
            </NavLink>
          </div>
          <div className="p-2 mb-4 rounded">
            <NavLink to="/atayee-electric/services" className="fs-5 ps-2">
              <FontAwesomeIcon icon={faAnglesRight} fixedWidth size="sm" />
              <span className="linkText">&nbsp;{t("title-services")}</span>
            </NavLink>
          </div>
          <div className="p-2 mb-4 rounded">
            <NavLink to="/atayee-electric/contact" className="fs-5 ps-2">
              <FontAwesomeIcon icon={faAnglesRight} fixedWidth size="sm" />
              <span className="linkText">&nbsp;{t("title-contact")}</span>
            </NavLink>
          </div>
          <br />
          {/* <div className="shadow p-3 mb-5 bg-body-secondary rounded">
            Regular shadow
          </div>
           */}
        </div>
      </div>
    </div>
  );
};

export default Home;
