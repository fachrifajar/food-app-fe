import { React, useEffect } from "react";
import Helmet from "react-helmet";
import "../styles/add-recipe.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function AddRecipe() {
  useEffect(() => {
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
      <Footer />
    </div>
  );
}

export default AddRecipe;
