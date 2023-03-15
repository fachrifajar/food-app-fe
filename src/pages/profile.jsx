import React from "react";
import Helmet from "react-helmet";
import "../styles/profile.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import Spinner from "../components/molecules/spinner";
//MUI
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import {
  Card,
  CardContent,
  Modal,
  Button,
  Typography,
  Alert,
  Checkbox,
  TextField,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  Stack,
  TextareaAutosize,
} from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";
import { styled } from "@mui/material/styles";

const MyCard = styled(Card)({
  margin: "auto",
  marginTop: "10%",
  width: 500,
  textAlign: "center",
  borderRadius: "20px",
  // padding: "100px",
  // borderColor: "red",
  // backgroundColor: "red"
});

const MyModal = styled(Modal)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const MyButton = styled(Button)({
  borderRadius: "20px",
  marginTop: "20px",
  background: "#DB3022",
  color: "white",
  "&:hover": {
    background: "#DB2522",
    border: "none",
  },
});

const ButtonCheckout = styled(Button)({
  borderRadius: "40px",
  width: "100%",
  fontSize: "14px",
  padding: "8px 30px",
  color: "white",
  fontWeight: 500,
  background: "#DB3022",
  "&:hover": {
    background: "#DB2522",
    border: "none",
  },
});

const MyTextField = styled(TextField)({
  "& label": {
    // color: "#46505c",
    // marginTop: "-6px",
  },
  "& label.Mui-focused": {
    color: "#5e50a1",
  },
  "& .MuiOutlinedInput-root": {
    // height: "40px",
    "& fieldset": {
      borderColor: "#8692a6",
    },
    "&:hover fieldset": {
      borderColor: "#5e50a1",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#5e50a1",
    },
  },
});

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const isAuth = user?.isLogin;

  const getId = user?.data?.accounts_id;
  const getToken = user?.data?.accessToken;
  const [getUserData, setGetUserData] = React.useState(null);
  const [myRecipe, setMyRecipe] = React.useState(null);
  const [isLoadingPagination, setIsLoadingPagination] = React.useState(false);
  React.useEffect(() => {
    const getData = async () => {
      try {
        setIsLoadingPagination(true);
        const response = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/users/${getId}`,
          {
            headers: {
              Authorization: `Bearer ${getToken}`,
            },
          }
        );

        setGetUserData(response?.data?.data?.[0]);

        const response2 = await axios.get(
          `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/myrecipe/${getId}?page=1&limit=3&sort=DESC`
        );

        setMyRecipe(response2?.data?.data);
        setIsLoadingPagination(false);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);
  console.log("getMyRecipe=>", myRecipe);

  const [selectedTab, setSelectedTab] = React.useState("myRecipe");

  const [showModalCreate, setShowModalCreate] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const [fullname, setFullname] = React.useState(null);
  const [isErrFullname, setIsErrFullname] = React.useState(null);
  const [errMsgFullname, setErrMsgFullname] = React.useState(null);

  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isErrSelectedFile, setIsErrSelectedFile] = React.useState(null);
  const [errMsgSelectedFile, setErrMsgSelectedFile] = React.useState(null);

  const [isSubmitted, setIsSubmitted] = React.useState(false);

  let shownData;

  let isDisabled = true;

  if (fullname || isSubmitted) {
    isDisabled = false;
  }

  if (selectedTab == "myRecipe") {
    shownData = myRecipe;
  }

  const handleChangeUsername = (event) => {
    const usernames = event.target.value;
    const strRegex = /^(?=.*\S)[A-Za-z ]{5,20}$/;
    if (!strRegex.test(usernames)) {
      setErrMsgFullname(
        "Fullname must contain only letters and spaces, and be between 5-20 characters long."
      );
      setIsErrFullname(true);
      setFullname(null);
      return;
    }
    setIsErrFullname(false);
    setFullname(usernames);
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setIsSubmitted(true);
  };

  const handleCloseCreate = () => {
    setShowModalCreate(false);
  };

  const handleOpenCreate = () => {
    setShowModalCreate(true);
  };

  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [disablePagination, setDisablePagination] = React.useState(false);

  const fetchPagination = (pageParam) => {
    const offset = (pageParam - 1) * 3 + 1;
    setIsLoadingPagination(true);

    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/myrecipe/${getId}?page=${pageParam}&limit=3&offset=${offset}&sort=DESC`
      )
      .then(({ data }) => {
        setMyRecipe(data?.data);
        setTotalPage(parseInt(Math.ceil(data?.total / 3)));
        setCurrentPage(pageParam);
        setDisablePagination(false);
      })
      .catch((err) => console.log("err", err))
      .finally(() => setIsLoadingPagination(false));
  };

  React.useEffect(() => {
    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  const editProfile = async () => {
    try {
      setIsLoading(true);

      await axios.patch(
        `${process.env.REACT_APP_URL_BACKEND}/users/edit/${getId}`,
        {
          username: fullname,
          profile_picture: selectedFile,
        },
        // formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      const response = await axios.get(
        `${process.env.REACT_APP_URL_BACKEND}/users/${getId}`,
        {
          headers: {
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      setGetUserData(response?.data?.data?.[0]);
      console.log("response?.data?.data?.[0]", response?.data?.data?.[0]);
      setIsLoading(false);
    } catch (error) {
      console.log("ERROR---", error);
      setIsLoading(false);
    }
  };

  const [isLoadingRecipe, setIsLoadingRecipe] = React.useState(false);

  const [title, setTitle] = React.useState(null);
  const [isErrTitle, setIsErrTitle] = React.useState(null);
  const [errMsgTitle, setErrMsgTitle] = React.useState(null);

  const [ingredients, setIngredients] = React.useState(null);
  const [isErrIngredients, setIsErrIngredients] = React.useState(null);

  const [photo, setPhoto] = React.useState(null);

  const [showModalEdit, setShowModalEdit] = React.useState(false);
  const [showModalOption, setShowModalOption] = React.useState(false);

  const [selectedRecipesId, setSelectedRecipesId] = React.useState(null);

  const [isSubmitedEdit, setIsSubmitedEdit] = React.useState(false);

  let isDisabledEdit = true;

  if (title || ingredients || photo) {
    isDisabledEdit = false;
  }

  console.log("selectedRecipesId=>", selectedRecipesId);

  const handleCloseEdit = () => {
    setShowModalEdit(false);
  };

  const handleOpenEdit = () => {
    setShowModalEdit(true);
  };

  const handleCloseOption = () => {
    setShowModalOption(false);
  };

  const handleOpenOption = () => {
    setShowModalOption(true);
  };

  const handleChangeTitle = (event) => {
    const titles = event.target.value;
    const strRegex = /^(?=.*\S)[A-Za-z ]{5,50}$/;
    if (!strRegex.test(titles)) {
      setErrMsgTitle(
        "Title must contain only letters and spaces, and be between 5-50 characters long."
      );
      setIsErrTitle(true);
      setTitle(null);
      return;
    }
    setIsErrTitle(false);
    setTitle(titles);
  };

  const handleChangeIngredients = (event) => {
    const ingredientsText = event.target.value;
    const formattedIngredients = ingredientsText
      .split("\n")
      .map((line) => `--${line.trim()}`)
      .join("\n");

    setIngredients(formattedIngredients);
  };

  const handleFileChanges = (event) => {
    setPhoto(event.target.files[0]);
    setIsSubmitedEdit(true);
  };

  console.log("photo=>", photo);

  const editRecipe = async () => {
    try {
      setIsLoadingRecipe(true);
      const offset = (currentPage - 1) * 3 + 1;

      await axios.patch(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/edit/${selectedRecipesId}`,
        {
          title,
          ingredients,
          photo,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      const response = await axios.get(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/myrecipe/${getId}?page=${currentPage}&limit=3&offset=${offset}&sort=DESC`
      );

      setMyRecipe(response?.data?.data);
      setIsLoadingRecipe(false);
    } catch (error) {
      console.log("ERROR---", error);
      setIsLoadingRecipe(false);
    }
  };

  const [isLoadingDelete, setIsLoadingDelete] = React.useState(false);

  const deleteRecipe = async () => {
    try {
      setIsLoadingDelete(true);
      const offset = (currentPage - 1) * 3 + 1;

      await axios.delete(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/delete/recipes/${selectedRecipesId}`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${getToken}`,
          },
        }
      );

      const response = await axios.get(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/myrecipe/${getId}?page=${currentPage}&limit=3&offset=${offset}&sort=DESC`
      );

      setMyRecipe(response?.data?.data);

      setIsLoadingDelete(false);
    } catch (error) {
      console.log("ERROR---", error);
      setIsLoadingDelete(false);
    }
  };

  return (
    <div className="profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {/* <!-- ! Navbar --> */}
      <Navbar />

      <MyModal open={showModalCreate} onClose={handleCloseCreate}>
        <MyCard>
          <CardContent>
            <Typography variant="h5" sx={{ mb: 2 }}>
              <strong>Edit your Profile</strong>
            </Typography>

            {isErrFullname ? (
              <MyTextField
                error
                id="standard-error-helper-text"
                helperText={errMsgFullname}
                label="Fullname"
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Enter your Fullname"
                value={fullname}
                onChange={handleChangeUsername}
                InputProps={{
                  inputProps: {
                    maxLength: 20,
                  },
                }}
              />
            ) : (
              <MyTextField
                label="Fullname"
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Enter your Fullname"
                value={fullname}
                onChange={handleChangeUsername}
                InputProps={{
                  inputProps: {
                    maxLength: 20,
                  },
                }}
              />
            )}

            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}>
              {isSubmitted ? (
                <Button variant="contained" color="success">
                  Success
                </Button>
              ) : (
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    backgroundColor: "#46505c",
                    "&:hover": {
                      backgroundColor: "gray",
                    },
                  }}>
                  Change Picture
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={handleFileChange}
                  />
                </Button>
              )}
            </Stack>

            <div style={{ display: "flex", justifyContent: "center" }}>
              {isDisabled ? (
                <MyButton
                  disabled
                  variant="contained"
                  color="primary"
                  // fullWidth
                  onClick={editProfile}>
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
                  onClick={editProfile}>
                  {isLoading ? "Loading..." : "Submit"}
                </LoadingButton>
              ) : (
                <MyButton
                  variant="contained"
                  color="primary"
                  // fullWidth
                  onClick={editProfile}>
                  Submit
                </MyButton>
              )}
            </div>
          </CardContent>
        </MyCard>
      </MyModal>

      <MyModal open={showModalOption} onClose={handleCloseOption}>
        <MyCard>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              So, what your choice ?
            </Typography>
            <Stack
              direction="row"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "center",
                }}>
                <MyButton
                  variant="contained"
                  color="primary"
                  sx={{
                    width: "100px",
                    height: "50px",
                    background: "#5e50a1",
                    color: "white",
                    "&:hover": {
                      background: "#5e50f9",
                      border: "none",
                    },
                  }}
                  onClick={() => {
                    handleCloseOption();
                    handleOpenEdit();
                  }}>
                  Edit
                </MyButton>

                {isLoadingDelete ? (
                  <LoadingButton
                    loading={isLoadingDelete}
                    variant="contained"
                    color="primary"
                    // fullWidth
                    sx={{
                      borderRadius: "20px",
                      marginTop: "20px",
                      background: "#5e50a1",
                      color: "black",
                    }}
                    onClick={deleteRecipe}>
                    {isLoadingDelete ? "Loading..." : "Delete"}
                  </LoadingButton>
                ) : (
                  <MyButton
                    variant="contained"
                    color="error"
                    // fullWidth
                    onClick={deleteRecipe}
                    sx={{ width: "100px", height: "50px" }}>
                    Delete
                  </MyButton>
                )}
              </div>
            </Stack>
          </CardContent>
        </MyCard>
      </MyModal>

      <MyModal open={showModalEdit} onClose={handleCloseEdit}>
        <MyCard>
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2 }}>
              xxx
            </Typography>

            <Stack
              direction="row"
              alignItems="center"
              spacing={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                marginTop: "10px",
              }}>
              {isSubmitedEdit ? (
                <Button variant="contained" color="success">
                  Success
                </Button>
              ) : (
                <Button
                  variant="contained"
                  component="label"
                  sx={{
                    backgroundColor: "#46505c",
                    "&:hover": {
                      backgroundColor: "gray",
                    },
                  }}>
                  Change Picture
                  <input
                    hidden
                    accept="image/*"
                    multiple
                    type="file"
                    onChange={handleFileChanges}
                  />
                </Button>
              )}
            </Stack>

            {isErrTitle ? (
              <MyTextField
                error
                id="standard-error-helper-text"
                helperText={errMsgTitle}
                label="Title"
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Enter your Title"
                value={title}
                onChange={handleChangeTitle}
                InputProps={{
                  inputProps: {
                    maxLength: 50,
                  },
                }}
              />
            ) : (
              <MyTextField
                label="Title"
                fullWidth
                margin="normal"
                variant="outlined"
                placeholder="Enter your Title"
                value={title}
                onChange={handleChangeTitle}
                InputProps={{
                  inputProps: {
                    maxLength: 50,
                  },
                }}
              />
            )}

            {isErrIngredients ? (
              <div>
                {/* <label htmlFor="ingredients">Ingredients</label> */}
                <TextareaAutosize
                  id="ingredients"
                  rows={4}
                  placeholder="Enter your Ingredients"
                  // value={ingredients}
                  onChange={handleChangeIngredients}
                  maxRows={4}
                  minRows={4}
                  style={{ width: "100%", padding: "10px" }}
                />
                {/* <div className="MuiFormHelperText-root Mui-error">
                  {errMsgIngredients}
                </div> */}
              </div>
            ) : (
              <div>
                {/* <label htmlFor="ingredients">Ingredients</label> */}
                <TextareaAutosize
                  id="ingredients"
                  rows={4}
                  placeholder="Enter your Ingredients"
                  // value={ingredients}
                  onChange={handleChangeIngredients}
                  maxRows={4}
                  minRows={4}
                  style={{ width: "100%", padding: "10px" }}
                />
              </div>
            )}

            <div style={{ display: "flex", justifyContent: "center" }}>
              {isDisabledEdit ? (
                <MyButton
                  disabled
                  variant="contained"
                  color="primary"
                  // fullWidth
                  onClick={editRecipe}>
                  Submit
                </MyButton>
              ) : isLoadingRecipe ? (
                <LoadingButton
                  loading={isLoadingRecipe}
                  variant="contained"
                  color="primary"
                  // fullWidth
                  sx={{
                    borderRadius: "20px",
                    marginTop: "20px",
                    background: "#5e50a1",
                    color: "black",
                  }}
                  onClick={editRecipe}>
                  {isLoadingRecipe ? "Loading..." : "Submit"}
                </LoadingButton>
              ) : (
                <MyButton
                  variant="contained"
                  color="primary"
                  // fullWidth
                  onClick={editRecipe}>
                  Submit
                </MyButton>
              )}
            </div>
          </CardContent>
        </MyCard>
      </MyModal>

      <section id="profile">
        <div className="container">
          <div className="row clearfix">
            <div className="col-12 text-center mb-5">
              <img
                src={
                  getUserData?.profile_picture.includes("https")
                    ? getUserData?.profile_picture
                    : `https://res.cloudinary.com/daouvimjz/image/upload/${getUserData?.profile_picture}`
                }
                alt="userPhoto"
                className="user-photo"
              />
              <span
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <p className="mt-4">{getUserData?.username}</p>{" "}
                <ModeEditIcon
                  sx={{
                    marginLeft: "10px",
                    marginTop: "10px",
                    "&:hover": {
                      cursor: "pointer",
                      color: "#efc81a",
                    },
                  }}
                  onClick={handleOpenCreate}
                />
              </span>
            </div>

            <div
              className={`col-2 ${
                selectedTab === "myRecipe" ? "active" : ""
              } my-recipe`}
              onClick={() => setSelectedTab("myRecipe")}
              data-section="1">
              <p>My Recipe</p>
            </div>
            <div
              className={`col-2 ${
                selectedTab === "savedRecipe" ? "active" : ""
              } saved-recipe`}
              onClick={() => setSelectedTab("savedRecipe")}
              data-section="2">
              <p>Saved Recipe</p>
            </div>
            <div
              className={`col-2 ${
                selectedTab === "likedRecipe" ? "active" : ""
              } liked-recipe`}
              onClick={() => setSelectedTab("likedRecipe")}
              data-section="3">
              <p>Liked Recipe</p>
            </div>
          </div>

          <div style={{ marginTop: "50px" }}>
            {isLoadingPagination ? <Spinner /> : ""}
            {!shownData && !isLoadingPagination ? (
              <h2 className="text-center">Recipe not found</h2>
            ) : null}
          </div>

          <div className="row mt-4">
            <div className="image-container" style={{ cursor: "pointer" }}>
              {!isLoadingPagination &&
                shownData?.map((image, index) => (
                  <img
                    key={index}
                    src={`https://res.cloudinary.com/daouvimjz/image/upload/${image?.photo}`}
                    alt="Recipe"
                    onClick={() => {
                      setSelectedRecipesId(image?.recipes_id);
                      handleOpenOption();
                    }}
                  />
                ))}
            </div>
            {!isLoadingPagination && !disablePagination && shownData && (
              <div className="container d-flex align-items-center justify-content-center mt-4 paginations">
                <nav aria-label="Page navigation example">
                  <ul className="pagination">
                    <li className="page-item">
                      <btn
                        className={`page-link ${
                          currentPage === 1 ? "disabled" : ""
                        }`}
                        onClick={() => {
                          if (currentPage > 1) fetchPagination(currentPage - 1);
                        }}>
                        Previous
                      </btn>
                    </li>
                    {[...new Array(totalPage)].map((item, key) => {
                      let position = ++key;
                      return (
                        <li className="page-item" key={key}>
                          <btn
                            className={`page-link ${
                              currentPage === position ? "active" : ""
                            }`}
                            onClick={() => {
                              fetchPagination(position);
                            }}>
                            {position}
                          </btn>
                        </li>
                      );
                    })}
                    <li className="page-item">
                      <btn
                        className={`page-link ${
                          currentPage === totalPage ? "disabled" : ""
                        }`}
                        onClick={() => {
                          if (currentPage < totalPage) {
                            fetchPagination(currentPage + 1);
                          }
                        }}>
                        Next
                      </btn>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* <!-- ! footer --> */}
      <Footer />
    </div>
  );
}

export default Profile;
