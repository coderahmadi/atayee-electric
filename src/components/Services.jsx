import Heading from "./subComponents/ComponentHeading";
import { useTranslation } from "react-i18next";
import s1 from "../assets/images/services/service1.jpg";
import s2 from "../assets/images/services/service2.jpg";
import s3 from "../assets/images/services/service3.jpg";

const styleCard = {};
const styleImg = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  objectPosition: "right",
};

const Services = () => {
  const { t } = useTranslation();
  return (
    <div id="services" className="row mb-5 pb-5">
      <Heading>{t("title-services")}</Heading>
      <div id="service-content" className="mt-5 mb-5">
        <h1 className="display-6 text-center mt-5 mb-5 lead">
          "&nbsp;{t("service-title-page")}&nbsp;"
        </h1>
        <hr className="border border-1 opacity-50 mb-5"></hr>
        <div id="services-items">
          <div className="service-item shadow mb-5 bg-body-tertiary rounded">
            <img
              src={s1}
              className="rounded mx-auto d-block"
              style={styleImg}
              alt="Service Image"
            />
            <div className="pt-3">
              <h5 className="text-center">{t("service-cart-text1")}</h5>
            </div>
          </div>
          <div className="service-item shadow mb-5 bg-body-tertiary rounded">
            <img
              src={s2}
              className="rounded mx-auto d-block"
              style={styleImg}
              alt="Service Image"
            />
            <div className="pt-3">
              <h5 className="text-center">{t("service-cart-text2")}</h5>
            </div>
          </div>
          <div className="service-item shadow mb-5 bg-body-tertiary rounded">
            <img
              src={s3}
              className="rounded mx-auto d-block"
              style={styleImg}
              alt="Service Image"
            />
            <div className="pt-3">
              <h5 className="text-center">{t("service-cart-text3")}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
