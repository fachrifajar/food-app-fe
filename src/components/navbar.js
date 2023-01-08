import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  React.useEffect(() => {
    // Add animations to navbar (disappear while scroll & show while stop and scrolling to top)
    let previousScrollPosition = window.scrollY;

    window.addEventListener("scroll", function () {
      const navbar = document.querySelector("#navbar-desktop");
      const currentScrollPosition = window.scrollY;
      if (currentScrollPosition > previousScrollPosition) {
        // User is scrolling down
        navbar.classList.add("hidden");
      } else {
        // User is scrolling up
        navbar.classList.remove("hidden");
      }
      previousScrollPosition = currentScrollPosition;

      if (currentScrollPosition === 0) {
        // User has scrolled to the top of the page
        navbar.style.backgroundColor = "transparent";
        navbar.style.backdropFilter = "none";
        navbar.style.boxShadow = "none";
      } else {
        // overridden css function
        navbar.style.backgroundColor = "rgba(255,255,255,0.8)";
        navbar.style.backdropFilter = "blur(5px)";
      }

      setTimeout(function () {
        navbar.classList.remove("hidden");
      }, 1500);
    });
    // End of animations to navbar (disappear while scroll & show while stop and scrolling to top)
  }, []);
  return (
    <div>
      <nav className="navbar navbar-expand-md fixed-top" id="navbar-desktop">
        <div className="container">
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="nav">
            <ul className="navbar-nav">
              <li className="nav-item me-5">
                <Link to="/" className="nav-link active" aria-current="page">
                  Home
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/add-recipe" className="nav-link">
                  Add Recipe
                </Link>
              </li>
              <li className="nav-item me-5">
                <Link to="/profile" className="nav-link">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
          <div id="login-button">
            <Link to="/login">
              <button type="button" className="btn btn-outline-light">
                Log In
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
