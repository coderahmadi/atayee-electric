import Heading from "./subComponents/ComponentHeading";
import { useTranslation } from "react-i18next";
import s1 from "../assets/images/service1.jpg";
import s2 from "../assets/images/service2.jpg";
import s3 from "../assets/images/service3.jpg";
const services = [
  {
    id: 1,
    pic: s1,
    textValue: "All brands of Electric Scooters",
  },
  {
    id: 2,
    pic: s2,
    textValue: "Lithium batteries",
  },
  {
    id: 3,
    pic: s3,
    textValue: "Electronic components",
  },
];
const styleCard = {
  width: "28rem",
  height: "32rem",
};
const styleImg = {
  width: "100%",
  height: "21rem",
  objectFit: "cover",
  objectPosition: "right",
};
const showServices = services.map((service) => {
  return (
    <div key={service.id} className="col-md-6">
      <div className="card" style={styleCard}>
        <img
          src={service.pic}
          className="card-img-top"
          style={styleImg}
          alt="Service Image"
        />
        <div className="card-body">
          <h3 className="card-title text-center">{service.textValue}</h3>
        </div>
      </div>
    </div>
  );
});

const Services = () => {
  const { t } = useTranslation();
  return (
    <div id="services" className="row">
      <Heading>{t("title-services")}</Heading>
      {showServices}
    </div>
  );
};

export default Services;
