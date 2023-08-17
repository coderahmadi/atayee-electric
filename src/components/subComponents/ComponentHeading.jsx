import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import CompHeading from "./CompHeading";
const Heading = ({ children }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <NavLink
        id="back-btn"
        to="/atayee-electric/"
        style={{ color: "#00539c", fontSize: "1.5rem", fontWeight: "bolder" }}
      >
        <FaArrowLeftLong />
      </NavLink>
      <span>
        <CompHeading>{children}</CompHeading>
      </span>
      <span></span>
    </div>
  );
};

export default Heading;
