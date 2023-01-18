import React, { useState } from "react";
import Helmet from "react-helmet";
import "../styles/profile.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// function ImageContainer({ images }) {
//   return (
//     <div className="image-container">
//       {images.map((image, index) => (
//         <img key={index} src={image} alt="Recipe" />
//       ))}
//     </div>
//   );
// }

function Profile() {
  const navigate = useNavigate();
  const user = useSelector((state) => state.auth);
  const isAuth = user?.isLogin;
  const profPict = user?.data?.profilePicture;
  const username = user?.data?.username;

  const [selectedTab, setSelectedTab] = useState("myRecipe");

  const images = {
    myRecipe: ["/images/home/pancake.jpg", "/images/home/new-recipe-1.jpg"],
    savedRecipe: [
      "/images/home/banana-smoothie-pop.jpg",
      "/images/home/caramel-white-cake.jpg",
    ],
    likedRecipe: [
      "/images/home/bomb-chicken.jpg",
      "/images/home/chicken-kare.jpg",
    ],
  };

  React.useEffect(() => {
    // const isLogin = localStorage.getItem("isLogin");
    // const token = localStorage.getItem("token");

    if (!isAuth) {
      navigate("/");
    }
  }, [isAuth, navigate]);

  return (
    <div className="profile">
      <Helmet>
        <title>Profile</title>
      </Helmet>
      {/* <!-- ! Navbar --> */}
      <Navbar />

      <section id="profile">
        <div className="container">
          <div className="row clearfix">
            <div className="col-12 text-center mb-5">
              <img
                src={
                  profPict.includes("https")
                    ? profPict
                    : `https://res.cloudinary.com/daouvimjz/image/upload/${profPict}`
                }
                alt="userPhoto"
                className="user-photo"
              />
              <p className="mt-4">{username}</p>
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
          <div className="row mt-4">
            <div className="image-container">
              {images[selectedTab].map((image, index) => (
                <img key={index} src={image} alt="Recipe" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ! footer --> */}
      <Footer />
    </div>
  );
}

export default Profile;
