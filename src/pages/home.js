import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/mobile-home.css";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

function Home() {
  React.useEffect(() => {
    // Add animations to new-recipe (auto-change content)
    const content = [
      {
        image: "/images/home/new-recipe-1.jpg",
        title: "Healthy Juicy Chicken Burger (Quick & Easy)",
        description:
          "Quick + Easy Juicy Chicken Burger- Healthy Chicken Burger? That’s right!",
        buttonText: "Learn More",
      },
      {
        image: "/images/home/pancake.jpg",
        title: "Salted Brown Butter Pancake",
        description:
          "Delicious, fluffy salted brown butter pancakes with hints of warm, caramel-like flavor in every bite.",
        buttonText: "Learn More",
      },
      // add more objects here for additional content
    ];

    let currentContentIndex = 0;

    function updateContent() {
      // update the main image
      document.getElementById("new-recipe-image-id").src =
        content[currentContentIndex].image;

      // update the title
      document.getElementById("new-recipe-title-id").innerHTML =
        content[currentContentIndex].title;

      // update the description
      document.getElementById("new-recipe-description-id").innerHTML =
        content[currentContentIndex].description;

      // update the button text
      document.getElementById("new-recipe-button-id").innerHTML =
        content[currentContentIndex].buttonText;

      // increment the index for the next update
      currentContentIndex = (currentContentIndex + 1) % content.length;
    }

    setInterval(updateContent, 3000); // update the content every 3 seconds

    // ! End of animations to new-recipe (auto-change content)
  }, []);

  return (
    <div>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <section id="home-desktop-version">
        {/* <!-- ! Navbar --> */}
        <Navbar />
        {/* <!-- ! header --> */}
        <section id="header">
          {/* <!-- ! yellow right background --> */}
          <div className="line-background"></div>
          <div className="container">
            <div className="row align-items-center">
              {/* <!-- ! left side --> */}
              <div className="col-xxl-5 col-xl-4 col-lg-3 col-md-12 col-sm-2">
                <h1>Discover Recipe & Delicious Food</h1>
                <div className="mt-4">
                  <form>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-search"></i>
                      </span>
                      <input
                        className="form-control form-control-lg"
                        type="search"
                        placeholder="Search Recipe..."
                        aria-label="Search"
                        autocomplete="off"
                      />
                    </div>
                  </form>
                </div>
              </div>
              {/* <!-- ! right side --> */}
              <div className="col-6 offset-1">
                <img
                  src="/images/home/header-2.png"
                  className="background-1"
                  width="450px"
                  alt="food on plate"
                />
                <img
                  src="/images/home/background-header-2.png"
                  className="background-2"
                  width="260px"
                  alt="dotted pattern"
                />
                <img
                  src="/images/home/background-header-2.png"
                  className="background-2 clone"
                  width="260px"
                  alt="dotted pattern"
                />
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! new-recipe / content-1 --> */}
        <section id="new-recipe">
          {/* <!-- ! title --> */}
          <div className="container">
            <div className="title">New Recipe</div>
          </div>

          {/* <!-- ! background --> */}
          <div className="main-image-background"></div>
          {/* <!-- ! content --> */}
          <div className="container">
            <div className="row align-items-center">
              {/* <!-- ! left side --> */}
              <div className="col-6">
                <img
                  src="/images/home/new-recipe-1.jpg"
                  className="main-image"
                  id="new-recipe-image-id"
                  alt="burger"
                />
              </div>
              {/* <!-- ! right side --> */}
              <div className="col-5 offset-1">
                <h2 id="new-recipe-title-id">
                  Healthy Juicy Chicken Burger <br />
                  (Quick & Easy)
                </h2>
                <span className="line-under-title"></span>
                <p id="new-recipe-description-id">
                  Quick + Easy Juicy Chicken Burger- Healthy Chicken Burger?
                  That’s right!
                </p>
                <p>
                  <Link to="/detail-recipe">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      id="new-recipe-button-id">
                      Learn More
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! popular-recipe /content-2 --> */}
        <section id="popular-recipe">
          <div className="container">
            <div className="title">Popular Recipe</div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-4">
                <div className="clickable-image mb-4">
                  <img
                    src="/images/home/chicken-kare.jpg"
                    height="100%"
                    width="100%"
                    loading="lazy"
                    alt="chicken kare"
                  />
                  <h2 className="image-title">Chicken Curry</h2>
                </div>
              </div>
              <div className="col-4">
                <div className="clickable-image mb-4">
                  <img
                    src="/images/home/bomb-chicken.jpg"
                    height="100%"
                    width="100%"
                    loading="lazy"
                    alt="bomb chicken"
                  />
                  <h2 className="image-title">Bomb Chicken</h2>
                </div>
              </div>
              <div className="col-4">
                <div className="clickable-image mb-4">
                  <img
                    src="/images/home/banana-smoothie-pop.jpg"
                    height="100%"
                    width="100%"
                    loading="lazy"
                    alt="banana smoothie pop"
                  />
                  <h2 className="image-title">Banana Smoothie Pop</h2>
                </div>
              </div>
              <div className="col-4">
                <div className="clickable-image mb-4">
                  <img
                    src="/images/home/caramel-white-cake.jpg"
                    height="100%"
                    width="100%"
                    loading="lazy"
                    alt="caramel white cake"
                  />
                  <h2 className="image-title">Caramel White Cake</h2>
                </div>
              </div>
              <div className="col-4">
                <div className="clickable-image mb-4">
                  <img
                    src="/images/home/grilled-salmon.jpg"
                    height="100%"
                    width="100%"
                    loading="lazy"
                    alt="grilled salmon"
                  />
                  <h2 className="image-title">Grilled Salmon</h2>
                </div>
              </div>
              <div className="col-4">
                <div className="clickable-image mb-4">
                  <img
                    src="/images/home/special-biryani.jpg"
                    height="100%"
                    width="100%"
                    loading="lazy"
                    alt="special biryani"
                  />
                  <h2 className="image-title">Special Biryani</h2>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! footer--> */}
        <Footer />
        {/* <-- end of footer --> */}
      </section>

      <section id="mobile-version">
        <section id="mobile-header">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="mobile-search-input">
                  <form>
                    <div className="input-group">
                      <span className="input-group-text" id="basic-addon1">
                        <i className="fa fa-search"></i>
                      </span>
                      <input
                        className="form-control form-control-lg"
                        type="search"
                        placeholder="Search Pasta, Bread, etc"
                        aria-label="Search"
                        autocomplete="off"
                      />
                    </div>
                  </form>
                </div>
                <h2 className="mobile-popular-recipe mt-4">Popular for you</h2>
                <div className="mobile-popular-for-you text-center">
                  <img
                    src="/images/home/Group 48.jpg"
                    className="img-pfy mt-3"
                    alt="icon"
                  />
                  <img
                    src="/images/home/Group 49.jpg"
                    className="img-pfy mt-3"
                    alt="icon"
                  />
                  <img
                    src="/images/home/Group 50.jpg"
                    className="img-pfy mt-3"
                    alt="icon"
                  />
                  <img
                    src="/images/home/Group 49.jpg"
                    className="img-pfy mt-3"
                    alt="icon"
                  />
                </div>
                <div className="mobile-popular-for-you-text text-center">
                  <p className="w-100 mx-3">
                    <b>Soup</b>
                  </p>
                  <p className="w-100 mx-3">
                    <b>Chicken</b>
                  </p>
                  <p className="w-100 mx-3">
                    <b>Seafood</b>
                  </p>
                  <p className="w-100 mx-3">
                    <b>Dessert</b>
                  </p>
                </div>

                <h2 className="mobile-header-title mt-4 mb-3">New Recipes</h2>

                <div id="carouselExampleIndicators" className="carousel slide">
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="2"
                      aria-label="Slide 3"></button>
                    <button
                      type="button"
                      data-bs-target="#carouselExampleIndicators"
                      data-bs-slide-to="3"
                      aria-label="Slide 4"></button>
                  </div>
                  <div
                    className="carousel-inner carousel-multi-item"
                    data-bs-items="4">
                    <div className="carousel-item active">
                      <img
                        src="/images/home/banana-smoothie-pop.jpg"
                        className="d-block w-100"
                        alt="banana smoothie pop"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/home/caramel-white-cake.jpg"
                        className="d-block w-100"
                        alt="caramel white cake"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/home/bomb-chicken.jpg"
                        className="d-block w-100"
                        alt="bomb chicken"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/home/special-biryani.jpg"
                        className="d-block w-100"
                        alt="special biryani"
                      />
                    </div>
                  </div>
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev">
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next">
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>

                <h2 className="mobile-popular-recipe mt-4 mb-3">
                  Popular Recipes
                </h2>
                <div className="mobile-popular-recipe">
                  <div className="popular-recipe-img">
                    <img
                      src="/images/home/Rectangle 10.jpg"
                      className="mt-3"
                      alt="margherita"
                    />
                    <p>
                      Margherita <br />
                      <br />
                      <img
                        src="/images/home/star.jpg"
                        width="100%"
                        height="100%"
                        alt="star icon"
                      />
                      4.6
                    </p>
                  </div>
                  <div className="popular-recipe-img">
                    <img
                      src="/images/home/Rectangle 11.jpg"
                      className="mt-3"
                      alt="cheese pizza"
                    />
                    <p>
                      Cheese Pizza <br />
                      <br />
                      <img
                        src="/images/home/star.jpg"
                        width="100%"
                        height="100%"
                        alt="star icon"
                      />
                      4.8
                    </p>
                  </div>
                  <div className="popular-recipe-img">
                    <img
                      src="/images/home/Rectangle 12.jpg"
                      className="mt-3"
                      alt="vegan pizza"
                    />
                    <p>
                      Vegan Pizza <br />
                      <br />
                      <img
                        src="/images/home/star.jpg"
                        width="100%"
                        height="100%"
                        alt="star icon"
                      />
                      4.2
                    </p>
                  </div>
                </div>
              </div>
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
}

export default Home;
