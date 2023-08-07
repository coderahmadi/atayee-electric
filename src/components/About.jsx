import Heading from "./subComponents/ComponentHeading";
import ProfilePicture from "../assets/images/ProfilePic.jpg";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const profile = {
    width: "22rem",
    height: "22rem",
  };
  const aboutTitle = {
    // fontSize: "2.5rem",
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
          <figure className="figure shadow-lg">
            <img
              src={ProfilePicture}
              className="figure-img rounded mx-auto d-block p-1 bg-body-tertiary"
              alt="Profile Picture"
              style={profile}
            />
            <figcaption className="figure-caption text-end pb-2 pe-3">
              Photo of ~ <cite>Hamid Atayee</cite>
            </figcaption>
          </figure>
        </div>
        <div className="col-sm-12 col-lg-7 p-4">
          <h1 className="display-5" style={aboutTitle}>
            {t("about-title")}
          </h1>
          <br />
          <figure>
            <blockquote className="blockquote">
              <p style={aboutDesc} className="robot-font">
                {t("about-description")}
              </p>
            </blockquote>
            <br />
            <figcaption className="blockquote-footer fs-5">
              {t("regard")},&nbsp;<cite title="Source Title">Hamid Atayee</cite>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default About;
