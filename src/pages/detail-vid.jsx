import React from "react";
import { Helmet } from "react-helmet";
import "../styles/detail-vid.css";
import Navbar from "../components/navbar";

const DetailVid = () => {
  return (
    <div className="detail-vid-page">
      <Helmet>
        <title>Detail Video</title>
      </Helmet>
      {/* <!-- ! Navbar --> */}
      <Navbar />

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
