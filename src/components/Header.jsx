import brandIcon from "../assets/images/svg/energy-icon.svg";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          {/* Atayee's  Electric */}
          <img src={brandIcon} className="brand-logo" alt="Brand-Logo" />
        </NavLink>
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
                Home
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
                About
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
                Services
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
                Contact
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
                FAQ
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
