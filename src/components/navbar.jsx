import React from "react";
import { useLocation } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import "../styles/navbar.css";
import * as authReducer from "../store/auth/index";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth);
  
  const isAuth = user?.isLogin;
  const profPict = user?.data?.profilePicture;
  // console.log(user?.request?.status);
  // const isLogin = localStorage.getItem("isLogin");
  // const token = localStorage.getItem("token");
  // const isAuth = (isLogin && token) !== null;
  // console.log(isAuth);

  // const profPict = localStorage.getItem("profPict");

  const location = useLocation();
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
  }, []);

  // const handleLogout = () => {
  //   localStorage.removeItem("isLogin");
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("profPict");
  // };

  const [showModal, setShowModal] = React.useState(false);

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
                <Link
                  to="/"
                  className={`nav-link ${
                    location.pathname === "/" ? "active" : ""
                  }`}
                  aria-current="page">
                  Home
                </Link>
              </li>

              <li className="nav-item me-5">
                <Link
                  to="/add-recipe"
                  className={`nav-link ${
                    location.pathname === "/add-recipe" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    if (!isAuth) {
                      e.preventDefault();
                      setShowModal(true);
                    }
                  }}>
                  Add Recipe
                </Link>
              </li>

              <li className="nav-item me-5">
                <Link
                  to="/profile"
                  className={`nav-link ${
                    location.pathname === "/profile" ? "active" : ""
                  }`}
                  onClick={(e) => {
                    if (!isAuth) {
                      e.preventDefault();
                      setShowModal(true);
                    }
                  }}>
                  Profile
                </Link>
              </li>
            </ul>
          </div>

          {!isAuth ? (
            <div id="login-button">
              <Link to="/login">
                <button type="button" className="btn btn-outline-light">
                  Log In
                </button>
              </Link>
            </div>
          ) : (
            <div id="logout-button">
              <Link to="/">
                <button
                  type="button"
                  className="btn btn-outline-light"
                  onClick={() => {
                    dispatch(
                      authReducer.setAuth({
                        data: null,
                      })
                    );
                    navigate("/");
                  }}>
                  Log Out
                </button>
              </Link>
            </div>
          )}

          {isAuth ? (
            profPict.includes("https") ? (
              <div className="navbar-profile-picture">
                <img src={profPict} alt="default user pp" />
              </div>
            ) : (
              <div className="navbar-profile-picture">
                <img
                  src={`https://res.cloudinary.com/daouvimjz/image/upload/${profPict}`}
                  alt="user pp"
                />
              </div>
            )
          ) : null}

          {/* {isAuth !== null ? (
            profPict !== null ? (
              <div className="navbar-profile-picture">
                <img
                  src={`https://res.cloudinary.com/daouvimjz/image/upload/${profPict}`}
                  alt="user pp"
                />
              </div>
            ) : (
              <div className="navbar-profile-picture">
                <img
                  src={`https://res.cloudinary.com/daouvimjz/image/upload/v1671522875/Instagram_default_profile_kynrq6.jpg`}
                  alt="default user pp"
                />
              </div>
            )
          ) : (
            null()
          )} */}
        </div>
      </nav>
      <div className="navbar-modal">
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Please log in first</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You must log in first to access this feature.</p>
          </Modal.Body>
          <Modal.Footer>
            <Link to="/login">
              <Button variant="primary" className="custom-button">
                Log in
              </Button>
            </Link>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  );
};

export default Navbar;
