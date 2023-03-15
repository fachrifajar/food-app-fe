import { React, useEffect, useState } from "react";
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
import LoadingButton from "@mui/lab/LoadingButton";

const MyButton = styled(Button)({
  width: "200px",
  borderRadius: "10px",
  marginTop: "20px",
  background: "#efc81a",
  color: "white",
  "&:hover": {
    background: "rgba(239, 200, 26, 0.8);",
    border: "none",
  },
});

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
  const [showModalSuccess, setShowModalSuccess] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  let isDisabled = true;

  if (photo && title && ingredients && video) {
    isDisabled = false;
  }

  const handleCloseSuccess = () => {
    setShowModalSuccess(false);
  };

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

  const handleIngredientsChange = (event) => {
    const ingredientsText = event.target.value;
    const formattedIngredients = ingredientsText
      .split("\n")
      .map((line) => `--${line.trim()}`)
      .join("\n");

    setIngredients(formattedIngredients);
  };

  const handleAddRecipe = async () => {
    try {
      setIsLoading(true);
      if (!photo || !ingredients || !title || !video) {
        setErrMsg("Please fill all requirement");
        setShowModal(true);
        return;
      } else {
        // setIsErr(false);
      }

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
      setIsLoading(false);
      setShowModalSuccess(true);
    } catch (error) {
      console.log("ERROR---", error);
      setErrMsg(error?.response?.data?.message);
      setShowModal(true);

      setIsLoading(false);
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
        <MyModal open={showModalSuccess} onClose={handleCloseSuccess}>
          <MyCard>
            <CardContent>
              <Alert
                variant="filled"
                severity="success"
                sx={{ justifyContent: "center" }}>
                <strong style={{ fontSize: "16px" }}>
                  Success update data!
                </strong>
              </Alert>
            </CardContent>
          </MyCard>
        </MyModal>

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
                    onChange={handleIngredientsChange}></textarea>
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
                {/* <button
                  // type="submit"
                  className="btn btn-primary btn-lg"
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddRecipe();
                  }}>
                  Post
                </button> */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  {isDisabled ? (
                    <MyButton
                      disabled
                      variant="contained"
                      color="primary"
                      // fullWidth
                      onClick={handleAddRecipe}>
                      Submit
                    </MyButton>
                  ) : isLoading ? (
                    <LoadingButton
                      loading={isLoading}
                      variant="contained"
                      color="primary"
                      // fullWidth
                      sx={{
                        borderRadius: "20px",
                        marginTop: "20px",
                        background: "#5e50a1",
                        color: "black",
                      }}
                      onClick={handleAddRecipe}>
                      {isLoading ? "Loading..." : "Submit"}
                    </LoadingButton>
                  ) : (
                    <MyButton
                      variant="contained"
                      color="primary"
                      // fullWidth
                      onClick={handleAddRecipe}>
                      Submit
                    </MyButton>
                  )}
                </div>
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
