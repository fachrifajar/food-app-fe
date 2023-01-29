import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/detail-recipe.css";
import "../styles/mobile-detail-recipe.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useSelector } from "react-redux";

const DetailRecipe = () => {
  const { recipe } = useSelector((state) => state);
  console.log(recipe);

  React.useEffect(() => {
    // add alert to button icons
    const buttonIcons = document.querySelector(".icon-link");

    const alertBtn = () => {
      alert("Recipe added to Collections");
    };

    buttonIcons.addEventListener("click", alertBtn);
    // End of add alert to button icons

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
        <Navbar />

        {/* <!-- ! MAIN IMAGE --> */}
        <section id="selected-recipe">
          <div className="container">
            <div className="title text-center">{recipe?.data?.title}</div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="selected-image mb-1 d-flex align-items-center justify-content-center">
                  <img
                    src={
                      "https://res.cloudinary.com/daouvimjz/image/upload/" +
                      recipe?.data?.photo
                    }
                    alt={recipe?.data?.title}
                  />
                  <div className="icon-container">
                    <btn className="btn btn-primary icon-link">
                      <i className="fas fa-bookmark"></i>
                    </btn>
                    <btn className="btn btn-primary icon-link">
                      <i className="fas fa-thumbs-up"></i>
                    </btn>
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
                  {recipe?.data?.ingredients
                    .split("--")
                    .slice(1)
                    .map((ingredient, i) => (
                      <li key={i}>{ingredient}</li>
                    ))}
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
                <div id="comments">
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

                  <div className="row">
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
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! COMMENTS --> */}
        <section id="comments">
          <div className="container">
            <div className="row mt-5"></div>
          </div>
        </section>

        {/* <!-- ! footer--> */}
        <Footer />
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
                allowfullscreen></iframe>
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
