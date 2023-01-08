import React from "react";
import Helmet from "react-helmet";
import "../styles/profile.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Profile() {
  // ! Change image container when desired content clicked
  const activeClass = "active";
  const images = {
    1: ["/images/home/pancake.jpg", "/images/home/new-recipe-1.jpg"],
    2: [
      "/images/home/banana-smoothie-pop.jpg",
      "/images/home/caramel-white-cake.jpg",
    ],
    3: ["/images/home/bomb-chicken.jpg", "/images/home/chicken-kare.jpg"],
  };

  const changeImage = (n) => {
    const imageContainers = document.querySelectorAll(".image-container");
    imageContainers.forEach((container) => (container.innerHTML = ""));
    images[n].forEach((imageUrl) => {
      const image = document.createElement("img");
      image.src = imageUrl;
      image.classList.add("recipe-1");
      imageContainers[0].appendChild(image);
    });

    const col2Elements = document.querySelectorAll(".col-2");
    col2Elements.forEach((element) => {
      element.classList.remove(activeClass);
    });
    const clickedElement = document.querySelector(
      `.col-2[data-section="${n}"]`
    );
    clickedElement.classList.add(activeClass);
  };
  // ! end of change image container when desired content clicked

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
                src="/images/profile/karyo.jpg"
                alt="userPhoto"
                className="user-photo"
              />
              <p className="mt-4">Karyo Subiatmono</p>
            </div>
            <div
              className="col-2 my-recipe"
              onClick={() => changeImage(1)}
              data-section="1">
              <p>My Recipe</p>
            </div>
            <div
              className="col-2 saved-recipe"
              onClick={() => changeImage(2)}
              data-section="2">
              <p>Saved Recipe</p>
            </div>
            <div
              className="col-2 liked-recipe"
              onClick={() => changeImage(3)}
              data-section="3">
              <p>Liked Recipe</p>
            </div>
          </div>
          <div className="row mt-4">
            <div className="image-container"></div>
          </div>
        </div>
      </section>

      {/* <!-- ! footer --> */}
      <Footer />
    </div>
  );
}

export default Profile;
