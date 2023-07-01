const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark text-light">
      <div className="container">
        <a className="navbar-brand" href="#">
          {/* Atayee's  Electric */}
          <img src="/energy-icon.svg" className="brand-logo" alt="Brand-Logo" />
        </a>
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
              <a className="nav-link" aria-current="page" href="#home">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#services">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li> */}
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
