import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import Helmet from "react-helmet";
import "../styles/add-recipe.css";

function AddRecipe() {
  useEffect(() => {
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

    document
      .getElementById("title")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });

    document
      .getElementById("ingredients")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });

    document
      .getElementById("video")
      .addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
          event.preventDefault();
        }
      });

    document
      .getElementById("add-recipe-form")
      .addEventListener("submit", function (event) {
        var title = document.getElementById("title").value;
        var ingredients = document.getElementById("ingredients").value;

        if (!title) {
          alert("Please enter a title for the recipe");
          return;
        }
        if (!ingredients) {
          alert("Please enter the ingredients for the recipe");
          return;
        }

        var file = document.getElementById("file-input").value;

        if (file.length < 1) {
          alert("Please add photo");
        }

        if (file.length > 1) {
          alert("Recipe added successfully");
        }
      });
  }, []);
  return (
    <div className="add-recipe">
      <Helmet>
        <title>Add Recipe</title>
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
                <Link to="/add-recipe" className="nav-link active">
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

      <section id="add-recipe">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <form id="add-recipe-form">
                <div className="add-photo">
                  {/* <!-- Create the input element and set the event handlers --> */}
                  <div
                    id="drop-zone"
                    ondragover="onDragOver(event)"
                    ondrop="onDrop(event)">
                    {/* <!-- Add the photo icon and the input button --> */}
                    <div id="photo-icon"></div>
                    <img src="/images/add-photo/icon-image.png" alt="icon" />
                    <p>Add Photo</p>
                    <input
                      type="file"
                      id="file-input"
                      multiple
                      onchange="onFileSelected(event)"
                    />
                    <div id="loading-animation"></div>
                    <div id="notification"></div>
                  </div>
                </div>

                {/* <!-- Input field for the title --> */}
                <div className="form-group">
                  <label for="title"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                  />
                </div>

                {/* <!-- Input field for the ingredients --> */}
                <div className="form-group">
                  <label for="ingredients"></label>
                  <textarea
                    className="form-control"
                    id="ingredients"
                    rows="3"
                    placeholder="Ingredients"></textarea>
                </div>

                {/* <!-- Input field for the video --> */}
                <div className="form-group">
                  <label for="video"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="video"
                    placeholder="Video"
                  />
                </div>
                {/* <!-- Submit button --> */}
                <button type="submit" className="btn btn-primary btn-lg">
                  Post
                </button>
              </form>
            </div>
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

export default AddRecipe;
