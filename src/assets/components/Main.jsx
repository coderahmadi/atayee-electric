import s1 from "../images/service1.jpg";
import s2 from "../images/service2.jpg";
import s3 from "../images/service3.jpg";
const services = [
  {
    id:1,
    pic: s1,
    textValue: "All brands of Electric Scooters",
  },
  {
    id:2,
    pic: s2,
    textValue: "Lithium batteries",
  },
  {
    id:3,
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
          <h3 className="card-title text-center">
            {service.textValue}
          </h3>
        </div>
      </div>
    </div>
  );
});



const Home = () => {
  return <div id="home">Home</div>;
};
const About = () => {
  return <div id="about">About</div>;
};
const Services = () => {
  return (
    <div id="services" className="row">
      {showServices}
    </div>
  );
};
const Contact = () => {
  return <div id="contact">Contact</div>;
};

function Main() {
  return (
    <main>
      <div className="container">
        <Home />
        <About />
        <Services />
        <Contact />
      </div>
    </main>
  );
}

export default Main;
