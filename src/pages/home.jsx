import React from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";
import "../styles/mobile-home.css";
import Helmet from "react-helmet";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
// import RecipeCard from "../components/recipe-card";
import PopularCard from "../components/popular-card";
import Spinner from "../components/molecules/spinner";
import axios from "axios";

function Home() {
  const [recipeCardContainers, SetRecipeCardContainers] = React.useState([]); //menu
  const [newRecipes, setNewRecipes] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [totalPage, setTotalPage] = React.useState(1);
  const [titlez, setTitlez] = React.useState("Search Recipes...");

  React.useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/?sort=DESC`
      )
      .then(({ data }) => {
        console.log(data?.data?.[0]);
        setNewRecipes(data?.data?.[0]);
      })
      .catch((err) => setNewRecipes([]));

    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/?page=1&limit=6&sort=DESC`
      )
      .then(({ data }) => {
        SetRecipeCardContainers(data?.data);
        setTotalPage(parseInt(Math.ceil(data?.total / 6)));
      })
      .catch((err) => SetRecipeCardContainers([]))
      .finally(() => setIsLoading(false));
  }, []);

  const fetchPagination = (pageParam) => {
    const offset = (pageParam - 1) * 6 + 1;
    setIsLoading(true);
    SetRecipeCardContainers([]);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/?page=${pageParam}&limit=6&offset=${offset}&sort=DESC`
      )
      .then(({ data }) => {
        SetRecipeCardContainers(data?.data);
        setTotalPage(parseInt(Math.ceil(data?.total / 6)));
        setCurrentPage(pageParam);
      })
      .catch((err) => SetRecipeCardContainers([]))
      .finally(() => setIsLoading(false));
  };

  const fetchByTitle = () => {
    setIsLoading(true);
    SetRecipeCardContainers([]);
    axios
      .get(
        `${process.env.REACT_APP_URL_BACKEND}/users/recipes/search/${
          titlez ? titlez : ""
        }`
      )
      .then(({ data }) => {
        SetRecipeCardContainers(data?.data);
        console.log("bytitle atas");
        console.log(data?.data);
        console.log("bytitle bawah");
      })
      .catch((err) => SetRecipeCardContainers([]))
      .finally(() => setIsLoading(false));
  };

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
                        onChange={(event) => {
                          setTitlez(event.target.value);
                        }}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            window.location.href = "/#popular-recipe";
                            fetchByTitle();
                          }
                        }}
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
                  src={
                    "https://res.cloudinary.com/daouvimjz/image/upload/" +
                    newRecipes?.photo
                  }
                  className="main-image"
                  id="new-recipe-image-id"
                  alt={newRecipes?.title}
                />
              </div>

              {/* <!-- ! right side --> */}
              <div className="col-5 offset-1">
                <h2 id="new-recipe-title-id">
                  {newRecipes?.title} <br />
                </h2>
                <h4>(Quick & Easy)</h4>
                <span className="line-under-title"></span>
                <p id="new-recipe-description-id">
                  Quick + Easy Healthy {newRecipes?.title}? That’s right!
                </p>
                <p>
                  <Link to={"/detail-recipe/" + newRecipes?.slug}>
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
          {isLoading ? <Spinner /> : ""}
          {recipeCardContainers.length === 0 && !isLoading ? (
            <h2 className="text-center">Recipe not found</h2>
          ) : null}

          <div className="container">
            <div className="row">
              {!isLoading &&
                recipeCardContainers.map((item, key) => (
                  <div className="col-4" key={key}>
                    <PopularCard
                      src={
                        "https://res.cloudinary.com/daouvimjz/image/upload/" +
                        item?.photo
                      }
                      name={item?.title}
                      url={item?.slug}
                    />
                  </div>
                ))}
            </div>
          </div>
          {isLoading ? null : (
            <div className="container d-flex align-items-center justify-content-center">
              <nav aria-label="Page navigation example">
                <ul className="pagination">
                  <li className="page-item">
                    <btn
                      class={`page-link ${currentPage === 1 ? "disabled" : ""}`}
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
                  <li class="page-item">
                    <btn
                      class={`page-link ${
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
