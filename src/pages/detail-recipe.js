import React from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import "../styles/detail-recipe.css";
import "../styles/mobile-detail-recipe.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import IngredientsList from "../components/ingredients";

const DetailRecipe = () => {
  const { title } = useParams();
  const popularRecipes = [
    {
      title: "chicken-curry",
      name: "Chicken Curry",
      image: "/images/home/chicken-kare.jpg",
      ingredients: [
        "Sunflower oil (2 tbsp)",
        "Onion (1 pcs)",
        "Garlic cloves (2 pcs)",
        "Ginger (Thumb Size)",
        "Chicken Thights / Breasts (6 pcs)",
        "Medium spice paste (3 tbsp)",
        "Chopped tomatoes (400 g)",
      ],
      descriptions: [
        "Use the Fresh Sunflower Oil / Palm Oil",
        "Thinly sliced",
        "Crushed",
        "Grated",
        "Boneless and Skinless OR you can use any chicken that you like",
        "Tikka spices works well",
        "Cut dices Tomatoes",
      ],
    },
    {
      title: "bomb-chicken",
      name: "Bomb Chicken",
      image: "/images/home/bomb-chicken.jpg",
      ingredients: [
        "Ground Chicken",
        "Vegetables",
        "Seasonings",
        "Round dumpling wrappers",
        "Vegetable oil and water",
        "Black sesame seeds",
      ],
      descriptions: [
        "2 pcs of Ground Chicken",
        "green onions, carrots, corn, and peas. Feel free to substitute with different vegetables such as cabbage, green beans, bok choy or chives",
        "fresh ginger, rice cooking wine, soy sauce, sesame oil, white pepper, sugar, and salt",
        "we love making our own Homemade Dumpling Wrappers, but feel free to use store-bought for convenience",
        `for "steam-frying"`,
        "for garnish",
      ],
    },
    {
      title: "salted-brown-butter-pancake",
      name: "Salted Brown Butter Pancake",
      image: "/images/home/pancake.jpg",
      ingredients: [
        "Butter",
        "Egg",
        "Brown Sugar",
        "Milk",
        "Flour",
        "Baking Staples",
      ],
      descriptions: [
        "3 tablespoons salted butter",
        "1 egg, at room temperature (very important)",
        "tablespoons brown sugar (or sub coconut sugar)",
        "1 cup milk of choice",
        "1 cup all purpose flour",
        "½ tablespoon vanilla extract, 1 tablespoon baking powder, ¼ teaspoon salt",
      ],
    },
    {
      title: "banana-smoothie-pop",
      name: "Banana Smoothie Pop",
      image: "/images/home/banana-smoothie-pop.jpg",
      ingredients: [
        "Banana",
        "Half an orange",
        "Plain or Greek yogurt ",
        "Water or milk",
      ],
      descriptions: [
        "I use one banana to make one large or two smaller (kid-size) smoothies. For the best tasting smoothie, use a ripe banana. For the creamiest banana smoothie, use frozen banana slices. I’ve shared how I freeze bananas for smoothies below.",
        "When I have oranges in the house, I love adding them to my morning smoothie. It adds extra vitamin C and tropical flavor. If you don’t have oranges on hand, don’t worry, you can substitute other fruits like mango, pineapple, and berries.",
        "I don’t always add yogurt to my smoothies, but when I do have it in the fridge, adding a spoonful ensures a protein-packed and creamy smoothie. For a smoothie without yogurt, add a little extra fruit or include veggies like spinach or kale.",
        "To help the ingredients blend, I like adding a splash of liquid to the blender. For a smoothie without milk, use water. It still tastes amazing. For more creaminess add milk (dairy or non-dairy both work).",
      ],
    },
    {
      title: "caramel-white-cake",
      name: "Caramel White Cake",
      image: "/images/home/caramel-white-cake.jpg",
      ingredients: [
        "Softened Salted Butter",
        "Golden caster sugar",
        "Light brown soft sugar",
        "Vanilla extract",
        "Eggs",
        "Self raising flour",
        "Milk",
        "toffee",
      ],
      descriptions: [
        "225 g",
        "125 g",
        "100 g",
        "1 tsp",
        "4 pcs",
        "225 g",
        "2 tbsp",
        "chocolate or caramel pieces, to decorate",
      ],
    },
    {
      title: "grilled-salmon",
      name: "Grilled Salmon",
      image: "/images/home/grilled-salmon.jpg",
      ingredients: [
        "Lemon",
        "Wholegrain mustard",
        "Clear honey",
        "Skinless salmon fillets",
        "Rapeseed oil",
        "Spring onions",
        "Cooked beetroot",
        "Pack ready-to-eat puy lentils",
        "Basil leaves",
        "Big handful rocket",
      ],
      descriptions: [
        "1 (zested and juiced)",
        "2 tsp",
        "1 tbsp",
        "2 pcs",
        "2 tsp",
        "5 pcs",
        "175 g (not in vinegar) diced",
        "250 g",
        "10 pcs",
        "2",
      ],
    },
    {
      title: "special-biryani",
      name: "Special Biryani",
      image: "/images/home/special-biryani.jpg",
      ingredients: [
        "Basmati rice",
        "Butter",
        "Onion",
        "Bay leaf",
        "Cardamom pods",
        "Cinnamon stick",
        "Turmeric",
        "Skinless chicken breast",
        "Balti curry paste",
        "Raisins",
        "Chicken stock",
        "Coriander",
      ],
      descriptions: [
        "300 g",
        "25g",
        "1 pcs, Finely Sliced",
        "1 pcs",
        "3 pcs",
        "small",
        "1 tsp",
        "4 pcs",
        "4 tbsp",
        "85 g",
        "850 ml",
        "30 g",
      ],
    },
  ];
  const popularRecipe = popularRecipes.find((item) => item.title === title);

  React.useEffect(() => {
    // add alert to button icons
    const buttonIcons = document.querySelector(".icon-link");

    const alertBtn = () => {
      alert("Recipe added to Collections");
    };

    buttonIcons.addEventListener("click", alertBtn);
    // End of add alert to button icons

    // detail-recipe (add alert to comment input)
    const sendButton = document.getElementById("send-button");
    const textarea = document.querySelector("textarea");
    sendButton.addEventListener("click", (event) => {
      if (textarea.value.length > 1) {
        alert("Your comments have been submitted!");
      } else {
        alert("Comments can't be empty!");
      }
      // Clear the comment input text
      textarea.value = "";
    });
    // End of detail-recipe (add alert to comment input)
  }, []);

  if (!popularRecipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <div className="detail-recipe-page">
      <Helmet>
        <title>Detail Recipe</title>
      </Helmet>

      <section id="detail-recipe-desktop-version">
        {/* <!-- ! Navbar --> */}
        <Navbar />

        {/* <!-- ! MAIN IMAGE --> */}
        <section id="selected-recipe">
          <div className="container">
            <div className="title text-center">{popularRecipe.name}</div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="selected-image mb-1 d-flex align-items-center justify-content-center">
                  <img src={popularRecipe.image} alt={popularRecipe.name} />
                  <div className="icon-container">
                    <button className="btn btn-primary icon-link">
                      <i className="fas fa-bookmark"></i>
                    </button>
                    <btn className="btn btn-primary icon-link">
                      <i className="fas fa-thumbs-up"></i>
                    </btn>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! MAIN DESCRIPTIONS --> */}
        <section id="main-descriptions">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h2 className="ingredients-title mt-5">Ingredients</h2>
                <ul className="ingredients mt-3">
                  {popularRecipe.ingredients.map((ingredient, index) => (
                    <IngredientsList
                      key={index}
                      ingredients={ingredient}
                      descriptions={popularRecipe.descriptions[index]}
                    />
                  ))}
                </ul>
                <h2 className="video-step mt-5">
                  Video Step <br />
                  <br />
                  <Link to="/detail-vid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      data-toggle="modal"
                      data-target="#videoModal">
                      <i className="fas fa-play"></i>
                    </button>
                    <br />
                    <br />
                  </Link>
                  <Link to="/detail-vid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      data-toggle="modal"
                      data-target="#videoModal">
                      <i className="fas fa-play"></i>
                    </button>
                    <br />
                    <br />
                  </Link>
                  <Link to="/detail-vid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      data-toggle="modal"
                      data-target="#videoModal">
                      <i className="fas fa-play"></i>
                    </button>
                    <br />
                    <br />
                  </Link>
                  <Link to="/detail-vid">
                    <button
                      className="btn btn-primary btn-lg"
                      type="button"
                      data-toggle="modal"
                      data-target="#videoModal">
                      <i className="fas fa-play"></i>
                    </button>
                    <br />
                    <br />
                  </Link>
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! COMMENTS --> */}
        <section id="comments">
          <div className="container">
            <div className="row mt-5">
              <div className="col-12 mt-5">
                <form className="text-center">
                  <textarea
                    className="input-form"
                    placeholder="Comments :"
                    rows="5"
                    cols="100"></textarea>
                </form>
                <div className="text-center mt-3">
                  <button
                    id="send-button"
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="button">
                    Send
                  </button>
                </div>
                <h2 className="comment-user mt-5">Comment</h2>
              </div>
              <div className="col-1">
                <img
                  src="/images/detail-recipe/dafault-pp.jpg"
                  alt="default-pp"
                  className="user-picture mt-4"
                />
                <img
                  src="/images/detail-recipe/dafault-pp.jpg"
                  alt="default-pp"
                  className="user-picture mt-4"
                />
              </div>
              <div className="col-4">
                <p>
                  <br />
                  <b>Suparmoyo</b> <br />
                  Superb tutorial, and the food looks awesome!
                </p>
                <p>
                  <br />
                  <b>Ruslan</b> <br />
                  This tutorial is newbie friendly!. So clear
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- ! footer--> */}
        <Footer />
        {/* <!--! end of footer --> */}
      </section>
      <section id="mobile-version">
        <header>
          <Link to="/" className="arrow-icon">
            <i className="fas fa-arrow-left"></i>
          </Link>
          <span className="header-text">
            Salted Brown <br />
            Butter Pancake
          </span>
          <div className="header-icons">
            <Link href="/detail-recipe">
              <i className="fas fa-bookmark"></i>
            </Link>
            <Link href="/detail-recipe">
              <i className="fas fa-thumbs-up"></i>
            </Link>
          </div>
        </header>

        <section id="recipe-details">
          <div className="container">
            <div className="row">
              <div className="col-4 text-center">
                <a href="#ingredients" className="section-link">
                  <p>Ingredients</p>
                </a>
              </div>
              <div className="col-4 text-center">
                <a href="#video-steps" className="section-link">
                  <p>Video Steps</p>
                </a>
              </div>
            </div>
          </div>
          <div id="ingredients" className="section">
            <div className="ingredient-container mt-3 mb-5">
              <div className="ingredient">
                <span className="ingredient-name">Flour</span>
                <span className="ingredient-amount">1 cup</span>
              </div>
              <div className="ingredient">
                <span className="ingredient-name">Sugar</span>
                <span className="ingredient-amount">1/2 cup</span>
              </div>
              <div className="ingredient">
                <span className="ingredient-name">Eggs</span>
                <span className="ingredient-amount">2</span>
              </div>
              <div className="ingredient">
                <span className="ingredient-name">Milk</span>
                <span className="ingredient-amount">1 cup</span>
              </div>
              <div className="ingredient">
                <span className="ingredient-name">Baking Powder</span>
                <span className="ingredient-amount">1 tsp</span>
              </div>
            </div>
          </div>
          <div id="video-steps" className="section">
            <div className="video-container">
              <iframe
                title="a video about cooking"
                src="https://www.youtube.com/embed/xTgU7XtVcC8?controls=1"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
                loading="lazy"></iframe>
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
};

export default DetailRecipe;
