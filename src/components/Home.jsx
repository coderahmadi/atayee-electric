import Heading from "./subComponents/ComponentHeading";

import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  const { t, i18n } = useTranslation();
  // console.log("t=", i18n.resolvedLanguage);
  function handleClick(lang) {
    i18n.changeLanguage(lang);
  }
  return (
    <div id="home">
      <Heading>Home</Heading>
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          onClick={() => handleClick("en")}
          className={
            i18n.resolvedLanguage === "en"
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
        >
          English
        </button>
        <button
          type="button"
          onClick={() => handleClick("fr")}
          className={
            i18n.resolvedLanguage === "fr"
              ? "btn btn-primary"
              : "btn btn-outline-primary"
          }
        >
          French
        </button>
      </div>
      <br />
      <br />
      <p>{t("title")}</p>
      <FontAwesomeIcon icon={faSpinner} spin />
    </div>
  );
};

export default Home;
