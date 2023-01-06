import React from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "../styles/profile.css";

function Profile() {
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

    // ! Change image container when desired content clicked
    const activeClass = "active";
    // let currentSection = null;

    const changeImage = function (n) {
      const images = {
        1: ["/images/home/pancake.jpg", "/images/home/new-recipe-1.jpg"],
        2: [
          "/images/home/banana-smoothie-pop.jpg",
          "/images/home/caramel-white-cake.jpg",
        ],
        3: ["/images/home/bomb-chicken.jpg", "/images/home/chicken-kare.jpg"],
      };
      // currentSection = n;
      const imageContainers = document.querySelectorAll(".image-container");
      imageContainers.forEach((container) => (container.innerHTML = ""));
      images[n].forEach((imageUrl) => {
        const image = document.createElement("img");
        image.src = imageUrl;
        image.classList.add("recipe-1");
        imageContainers[0].appendChild(image);
      });

      const col2Elements = document.querySelectorAll(".col-2");
      col2Elements.forEach((element) => {
        element.classList.remove(activeClass);
      });
      const clickedElement = document.querySelector(
        `.col-2[data-section="${n}"]`
      );
      clickedElement.classList.add(activeClass);
    };
    // ! end of change image container when desired content clicked
  }, []);
  return (
    <div className="profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {/* <!-- ! Navbar --> */}
      <nav class="navbar navbar-expand-md fixed-top" id="navbar-desktop">
        <div class="container">
          <button
            class="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#nav"
            aria-controls="nav"
            aria-label="Expand Navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="nav">
            <ul class="navbar-nav">
              <li class="nav-item me-5">
                <Link to="/" class="nav-link" aria-current="page">
                  Home
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/add-recipe" class="nav-link">
                  Add Recipe
                </Link>
              </li>
              <li class="nav-item me-5">
                <Link to="/profile" class="nav-link active">
                  Profile
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="profile">
        <div className="container">
          <div className="row clearfix">
            <div className="col-12 text-center mb-5">
              <img
                src="/images/profile/karyo.jpg"
                alt="userPhoto"
                className="user-photo"
              />
              <p className="mt-4">Karyo Subiatmono</p>
            </div>
            <div
              className="col-2 my-recipe"
              onClick={() => `{changeImage}`(1)}
              data-section="1">
              <p>My Recipe</p>
            </div>
            <div
              className="col-2 saved-recipe"
              onClick={() => `{changeImage}`(2)}
              data-section="2">
              <p>Saved Recipe</p>
            </div>
            <div
              className="col-2 liked-recipe"
              onClick={() => `{changeImage}`(3)}
              data-section="3">
              <p>Liked Recipe</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="image-container"></div>
          </div>
        </div>
      </section>

      {/* <!-- ! footer --> */}
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h2 className="font-weight-bold">Eat, Cook, Repeat</h2>
              <p className="my-4">Share your best recipe by uploading here!</p>
              <div className="d-flex justify-content-center social-links">
                <a
                  href="https://www.linkedin.com/in/fachri-fajar/"
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer noopener">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://www.instagram.com/fachrifajar/?hl=id"
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer noopener">
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/fachri-fajar/"
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer noopener">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/fachri-fajar/"
                  className="mx-2"
                  target="_blank"
                  rel="noreferrer noopener">
                  <i className="fab fa-facebook"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Profile;
