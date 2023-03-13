import { React, useEffect, useRef, useState } from "react";
import Helmet from "react-helmet";
import "../styles/add-recipe.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  Modal,
  Typography,
  Alert,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuidv4 } from "uuid";

const MyModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderColor: "red",
});

const MyCard = styled(Card)({
  margin: "auto",
  marginTop: "10%",
  maxWidth: 500,
  textAlign: "center",
  borderRadius: "20px",
  padding: "25px",
  borderColor: "red",
});

function AddRecipe() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const isAuth = user?.isLogin;
  const [isLoading, setIsLoading] = useState(false);
  const [photo, setPhoto] = useState("");
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [video, setVideo] = useState("");

  const [showModal, setShowModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  console.log("user---", user);

  console.log("photo===", photo);
  // console.log("photo===", `${photo.name}/${uuidv4()}`);
  console.log("title===", title);
  console.log("ingredients===", ingredients);
  console.log("video===", video);

  const handleFileChange = (event) => {
    let temp = event.target.files[0];
    // setPhoto(`${temp.name}/${uuidv4()}`);
    setPhoto(temp);
  };

  useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  // useEffect(() => {
  //   document
  //     .getElementById("title")
  //     .addEventListener("keydown", function (event) {
  //       if (event.key === "Enter") {
  //         event.preventDefault();
  //       }
  //     });

  //   document
  //     .getElementById("video")
  //     .addEventListener("keydown", function (event) {
  //       if (event.key === "Enter") {
  //         event.preventDefault();
  //       }
  //     });

  //   document
  //     .getElementById("add-recipe-form")
  //     .addEventListener("submit", function (event) {
  //       var title = document.getElementById("title").value;
  //       var ingredients = document.getElementById("ingredients").value;

  //       if (!title) {
  //         alert("Please enter a title for the recipe");
  //         return;
  //       }
  //       if (!ingredients) {
  //         alert("Please enter the ingredients for the recipe");
  //         return;
  //       }

  //       var file = document.getElementById("file-input").value;

  //       if (file.length < 1) {
  //         alert("Please add photo");
  //       }

  //       if (file.length > 1) {
  //         alert("Recipe added successfully");
  //       }
  //     });
  // }, [navigate]);

  const fileInput = useRef(null);

  const handleAddRecipes = async (event) => {
    event.preventDefault();
    try {
      const { title, ingredients, video } = event.target.elements;
      const formData = new FormData();
      formData.append("file", fileInput.current.files[0]); //photo

      setIsLoading(true);
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${user.token}`,
        },
      };

      let data = new FormData();
      data.append("photo", photo);
      data.append("title", title);
      data.append("ingredients", ingredients);
      data.append("video", video);

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

  const handleAddRecipe = async () => {
    try {
      if (!photo || !ingredients || !title || !video) {
        setErrMsg("Please fill all requirement");
        setShowModal(true);
        return;
      } else {
        // setIsErr(false);
      }

      // const formData = new FormData();
      // formData.append("title", title);
      // formData.append("ingredients", ingredients);
      // formData.append("photo", photo);
      // formData.append("video", video);

      await axios.post(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/add`,
        {
          title,
          ingredients,
          photo,
          video,
        },
        // formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
    } catch (error) {
      console.log("ERROR---", error);
    }
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="add-recipe">
      <Helmet>
        <title>Add Recipe</title>
      </Helmet>

      {/* <!-- ! Navbar --> */}
      <Navbar />

      <section id="add-recipe">
        <MyModal open={showModal} onClose={handleClose}>
          <MyCard>
            <CardContent>
              {/* <Typography variant="h4">Verification email sent!</Typography>
               */}
              <Alert
                variant="filled"
                severity="error"
                sx={{ justifyContent: "center" }}>
                <strong style={{ fontSize: "16px" }}>{errMsg}</strong>
              </Alert>

              <Typography variant="body1" sx={{ margin: "20px" }}>
                Please complete required fields{" "}
              </Typography>

              <div style={{ display: "flex", flexDirection: "column" }}></div>
            </CardContent>
          </MyCard>
        </MyModal>

        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <form id="add-recipe-form">
                <div className="add-photo">
                  <div
                    id="drop-zone"
                    onDragOver={"onDragOver(event)"}
                    onDrop={"onDrop(event)"}>
                    <div id="photo-icon"></div>
                    <img src="/images/add-photo/icon-image.png" alt="icon" />
                    <p>Add Photo</p>
                    <input
                      type="file"
                      id="file-input"
                      multiple
                      onChange={handleFileChange}
                    />
                    <div id="loading-animation"></div>
                    <div id="notification"></div>
                  </div>
                </div>

                {/* <div className="add-photo">
                  <Button variant="contained" component="label">
                    Upload Photo
                    <input
                      hidden
                      accept="image/*"
                      multiple
                      type="file"
                      onChange={handleFileChange}
                    />
                  </Button>
                </div> */}

                {/* <!-- Input field for the title --> */}
                <div className="form-group">
                  <label for="title"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>

                {/* <!-- Input field for the ingredients --> */}
                <div className="form-group">
                  <label for="ingredients"></label>
                  <textarea
                    className="form-control"
                    id="ingredients"
                    rows="3"
                    placeholder="Ingredients"
                    onChange={(e) => setIngredients(e.target.value)}></textarea>
                </div>

                {/* <!-- Input field for the video --> */}
                <div className="form-group">
                  <label for="video"></label>
                  <input
                    type="text"
                    className="form-control"
                    id="video"
                    placeholder="Video"
                    onChange={(e) => setVideo(e.target.value)}
                  />
                </div>
                {/* <!-- Submit button --> */}
                <button
                  // type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddRecipe();
                  }}>
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
