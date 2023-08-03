import Heading from "./subComponents/ComponentHeading";
import ProfilePicture from "../assets/images/ProfilePic.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const profile = {
    width: "22rem",
    height: "21rem",
  };
  const aboutTitle = {
    fontSize: "2.5rem",
    color: "#565656",
  };

  const aboutDesc = {
    fontSize: "1.6rem",
    textAlign: "justify",
    textJustify: "inter-word",
  };
  return (
    <div id="about">
      <Heading>{t("title-about")}</Heading>
      <div className="row mt-5 d-flex align-items-center justify-content-center">
        <div className="col-sm-12 col-lg-5">
          <img
            src={ProfilePicture}
            className="rounded mx-auto d-block shadow-lg p-1 bg-body-tertiary"
            alt="Profile Picture"
            style={profile}
          />
        </div>
        <div className="col-sm-12 col-lg-7 p-4">
          <h2 style={aboutTitle}>{t("about-title")}</h2>
          <br />
          <p style={aboutDesc} className="robot-font">
            {t("about-description")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
