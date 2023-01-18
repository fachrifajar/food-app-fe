import { React, useEffect, useRef } from "react";
import Helmet from "react-helmet";
import "../styles/add-recipe.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

function AddRecipe() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const isAuth = user?.isLogin;

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  useEffect(() => {
    document
      .getElementById("title")
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
  }, [navigate]); //delete navigate if error happens

  const fileInput = useRef(null);

  const handleAddRecipe = async (event) => {
    event.preventDefault();
    try {
      const { title, ingredients, video } = event.target.elements;
      const formData = new FormData();
      formData.append("file", fileInput.current.files[0]); //photo

      // send photo to recipe_photos db
      await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/add/photos`,
        formData
      );

      // send title & ingredients to recipes db
      await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/add`,
        { title: title.value, ingredients: ingredients.value }
      );

      // send video to recipe_videos db
      await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/add/videos`,
        { video: video.value }
      );

      navigate("/");
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while trying to add recipe. Please try again later."
      );
    }
  };

  return (
    <div className="add-recipe">
      <Helmet>
        <title>Add Recipe</title>
      </Helmet>

      {/* <!-- ! Navbar --> */}
      <Navbar />

      <section id="add-recipe">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <form id="add-recipe-form">
                <div className="add-photo">
                  {/* <!-- Create the input element and set the event handlers --> */}
                  <div
                    id="drop-zone"
                    onDragOver={"onDragOver(event)"}
                    onDrop={"onDrop(event)"}>
                    {/* <!-- Add the photo icon and the input button --> */}
                    <div id="photo-icon"></div>
                    <img src="/images/add-photo/icon-image.png" alt="icon" />
                    <p>Add Photo</p>
                    <input
                      type="file"
                      id="file-input"
                      multiple
                      onChange={"onFileSelected(event)"}
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
      <Footer />
    </div>
  );
}

export default AddRecipe;
