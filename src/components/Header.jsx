import brandIcon from "../assets/images/svg/energy-icon.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons";
import { faAddressBook } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <span id="icon" style={{ color: "white" }}>Atayee's Electric</span>
        {/* <img src={brandIcon}  alt="Brand-Logo" /> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: "#eea47f" } : undefined
                }
                className="nav-link"
                aria-current="page"
                to="/"
              >
                <FontAwesomeIcon icon={faHome} size="xs" />
                &nbsp;<span>Home</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: "#eea47f" } : undefined
                }
                className="nav-link"
                to="/about"
              >
                <FontAwesomeIcon icon={faAddressCard} size="sm" />
                &nbsp;<span>About</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: "#eea47f" } : undefined
                }
                className="nav-link"
                to="/services"
              >
                {/* <FontAwesomeIcon icon={faTools} size="xs"/><span>&nbsp;Services</span>  */}
                <FontAwesomeIcon icon={faHandHoldingHeart} size="xs" />
                <span>&nbsp;Services</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: "#eea47f" } : undefined
                }
                className="nav-link"
                to="/contact"
              >
                <FontAwesomeIcon icon={faAddressBook} size="xs" />
                <span>&nbsp;Contact</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                style={({ isActive }) =>
                  isActive ? { backgroundColor: "#eea47f" } : undefined
                }
                className="nav-link"
                to="/faq"
              >
                <FontAwesomeIcon icon={faComments} size="xs" /> FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

function Header() {
  return (
    <header>
      <Navbar />
    </header>
  );
}

export default Header;
