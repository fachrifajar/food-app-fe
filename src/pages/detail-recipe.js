import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/detail-recipe.css";
import "../styles/mobile-detail-recipe.css";

const DetailRecipe = () => {
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

    // detail-recipe (add alert to comment input)
    const sendButton = document.getElementById("send-button");
    const textarea = document.querySelector("textarea");
    sendButton.addEventListener("click", (event) => {
      if (textarea.value.length > 1) {
        alert("Your comments have been submitted!");
      } else {
        alert("Comments can't be empty!");
      }
      // Clear the comment input text
      textarea.value = "";
    });
    // End of detail-recipe (add alert to comment input)
  }, []);
  return (
    <div className="detail-recipe-page">
      <Helmet>
        <title>Detail Recipe</title>
      </Helmet>

      <section id="detail-recipe-desktop-version">
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

        {/* <!-- ! MAIN IMAGE --> */}
        <section id="selected-recipe">
          <div className="container">
            <div className="title text-center">Salted Brown Butter Pancake</div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="selected-image mb-1">
                  <img
                    src="../images/detail-recipe/pancake.jpg"
                    alt="pancake"
                  />
                  <div className="icon-container">
                    <Link to="#" className="icon-link">
                      <i className="fas fa-heart"></i>
                    </Link>
                    <Link to="#" className="icon-link">
                      <i className="fas fa-save"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! MAIN DESCRIPTIONS --> */}
        <section id="main-descriptions">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="ingredients-title mt-5">Ingredients</h2>
                <ul className="ingredients mt-3">
                  <li>
                    <b>Butter:</b> 3 tablespoons salted butter
                  </li>
                  <li>
                    <b>Egg:</b> 1 egg, at room temperature (very important)
                  </li>
                  <li>
                    <b>Brown sugar:</b> 2 tablespoons brown sugar (or sub
                    coconut sugar)
                  </li>
                  <li>
                    <b>Milk:</b> 1 cup milk of choice
                  </li>
                  <li>
                    <b>Flour:</b> 1 cup all purpose flour
                  </li>
                  <li>
                    <b>Baking staples:</b> ½ tablespoon vanilla extract, 1
                    tablespoon baking powder, ¼ teaspoon salt
                  </li>
                </ul>
                <h2 className="video-step mt-5">
                  Video Step <br />
                  <br />
                  <Link to="/detail-vid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      data-toggle="modal"
                      data-target="#videoModal">
                      <i className="fas fa-play"></i>
                    </button>
                    <br />
                    <br />
                  </Link>
                  <Link to="/detail-vid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      data-toggle="modal"
                      data-target="#videoModal">
                      <i className="fas fa-play"></i>
                    </button>
                    <br />
                    <br />
                  </Link>
                  <Link to="/detail-vid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      data-toggle="modal"
                      data-target="#videoModal">
                      <i className="fas fa-play"></i>
                    </button>
                    <br />
                    <br />
                  </Link>
                  <Link to="/detail-vid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      data-toggle="modal"
                      data-target="#videoModal">
                      <i className="fas fa-play"></i>
                    </button>
                    <br />
                    <br />
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! COMMENTS --> */}
        <section id="comments">
          <div className="container">
            <div className="row mt-5">
              <div className="col-12 mt-5">
                <form className="text-center">
                  <textarea
                    className="input-form"
                    placeholder="Comments :"
                    rows="5"
                    cols="100"></textarea>
                </form>
                <div className="text-center mt-3">
                  <button
                    id="send-button"
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="button">
                    Send
                  </button>
                </div>
                <h2 className="comment-user mt-5">Comment</h2>
              </div>
              <div className="col-1">
                <img
                  src="/images/detail-recipe/dafault-pp.jpg"
                  alt="default-pp"
                  className="user-picture mt-4"
                />
                <img
                  src="/images/detail-recipe/dafault-pp.jpg"
                  alt="default-pp"
                  className="user-picture mt-4"
                />
              </div>
              <div className="col-4">
                <p>
                  <br />
                  <b>Suparmoyo</b> <br />
                  Superb tutorial, and the food looks awesome!
                </p>
                <p>
                  <br />
                  <b>Ruslan</b> <br />
                  This tutorial is newbie friendly!. So clear
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! footer--> */}
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2 className="font-weight-bold">Eat, Cook, Repeat</h2>
                <p className="my-4">
                  Share your best recipe by uploading here!
                </p>
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
        {/* <!--! end of footer --> */}
      </section>

      <section id="mobile-version">
        <header>
          <Link to="/" className="arrow-icon">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <span className="header-text">
            Salted Brown <br />
            Butter Pancake
          </span>
          <div className="header-icons">
            <Link href="/detail-recipe">
              <i className="fas fa-bookmark"></i>
            </Link>
            <Link href="/detail-recipe">
              <i className="fas fa-thumbs-up"></i>
            </Link>
          </div>
        </header>

        <section id="recipe-details">
          <div className="container">
            <div className="row">
              <div className="col-4 text-center">
                <a href="#ingredients" className="section-link">
                  <p>Ingredients</p>
                </a>
              </div>
              <div className="col-4 text-center">
                <a href="#video-steps" className="section-link">
                  <p>Video Steps</p>
                </a>
              </div>
            </div>
          </div>
          <div id="ingredients" className="section">
            <div className="ingredient-container mt-3 mb-5">
              <div className="ingredient">
                <span className="ingredient-name">Flour</span>
                <span className="ingredient-amount">1 cup</span>
              </div>
              <div className="ingredient">
                <span className="ingredient-name">Sugar</span>
                <span className="ingredient-amount">1/2 cup</span>
              </div>
              <div className="ingredient">
                <span className="ingredient-name">Eggs</span>
                <span className="ingredient-amount">2</span>
              </div>
              <div className="ingredient">
                <span className="ingredient-name">Milk</span>
                <span className="ingredient-amount">1 cup</span>
              </div>
              <div className="ingredient">
                <span className="ingredient-name">Baking Powder</span>
                <span className="ingredient-amount">1 tsp</span>
              </div>
            </div>
          </div>
          <div id="video-steps" className="section">
            <div className="video-container">
              <iframe
                title="a video about cooking"
                src="https://www.youtube.com/embed/xTgU7XtVcC8?controls=1"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"></iframe>
            </div>
          </div>
        </section>
        <footer id="mobile-footer">
          <Link to="/">
            <i className="fas fa-home"></i>
          </Link>
          <Link to="/add-recipe">
            <i className="fas fa-plus-square"></i>
          </Link>
          <Link to="/comments">
            <i className="fas fa-comments"></i>
          </Link>
          <Link to="/profile">
            <i className="fas fa-user"></i>
          </Link>
        </footer>
      </section>
    </div>
  );
};

export default DetailRecipe;
