import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/detail-vid.css";

const DetailVid = () => {
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
    <div className="detail-vid-page">
      <Helmet>
        <title>Detail Video</title>
      </Helmet>
      {/* <!-- ! Navbar --> */}
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
                <Link to="/" className="nav-link" aria-current="page">
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
        </div>
      </nav>

      {/* <!-- ! MAIN VIDEO --> */}
      <section id="recipe-vid">
        <div className="line-background"></div>
        <div className="container">
          <div className="row">
            <div className="col-9">
              <div className="selected-vid mb-1">
                <div className="vid-1">
                  <iframe
                    src="https://www.youtube.com/embed/xTgU7XtVcC8?controls=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="a video recipe"></iframe>
                  <h5>
                    <b>Salted Butter Pancake - [Step 1]</b>
                    <br />
                    Prepare the Ingredients
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="other-vid mb-1">
                <h3>Next</h3>
                <div className="vid-2">
                  <iframe
                    src="https://www.youtube.com/embed/xTgU7XtVcC8?controls=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="a video recipe"></iframe>
                  <h6>
                    <b>Salted Butter Pancake - [Step 2]</b>
                    <br />
                    Whisk together the flour, baking powder and salt.
                  </h6>
                </div>
                <div className="vid-3">
                  <iframe
                    src="https://www.youtube.com/embed/xTgU7XtVcC8?controls=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="a video recipe"></iframe>
                  <h6>
                    <b>Salted Butter Pancake - [Step 3]</b>
                    <br />
                    Whisk together brown butter, egg, brown sugar and vanilla.
                  </h6>
                </div>
                <div className="vid-4">
                  <iframe
                    src="https://www.youtube.com/embed/xTgU7XtVcC8?controls=1"
                    frameborder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                    title="a video recipe"></iframe>
                  <h6>
                    <b>Salted Butter Pancake - [Step 4]</b>
                    <br />
                    Add the dry ingredients to the wet ingredients and mix until
                    a batter forms.
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <script src="/detail-recipe/detail-vid.js"></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
        crossorigin="anonymous"></script>
    </div>
  );
};

export default DetailVid;
