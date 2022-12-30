// //  Redirect to Login Page from Home/index.html
// const loginButton = document.getElementById("login-button");
// loginButton.addEventListener("click", () => {
//   window.location.replace("login.html");
// });

// window.addEventListener("scroll", function () {
//   const navbar = document.querySelector("#navbar-desktop");
//   if (window.scrollY > 0) {
//     navbar.classList.add("scrolled");
//   } else {
//     navbar.classList.remove("scrolled");
//   }
// });

// !Add animations to navbar (disappear while scroll & show while stop and scrolling to top)
let previousScrollPosition = window.scrollY;

window.addEventListener("scroll", function () {
  const navbar = document.querySelector("#navbar-desktop");
  const currentScrollPosition = window.scrollY;
  if (currentScrollPosition > previousScrollPosition) {
    // User is scrolling down
    navbar.classList.add("hidden");
  } else {
    // User is scrolling up
    navbar.classList.remove("hidden");
  }
  previousScrollPosition = currentScrollPosition;

  if (currentScrollPosition === 0) {
    // User has scrolled to the top of the page
    navbar.style.backgroundColor = "transparent";
    navbar.style.backdropFilter = "none";
    navbar.style.boxShadow = "none";
  } else {
    // overridden css function
    navbar.style.backgroundColor = "rgba(255,255,255,0.8)";
    navbar.style.backdropFilter = "blur(5px)";
  }

  timeoutId = setTimeout(function () {
    navbar.classList.remove("hidden");
  }, 1000);
});
// !End of animations to navbar (disappear while scroll & show while stop and scrolling to top)

// !Add animations to new-recipe (auto-change content)
const content = [
  {
    image: "images/home/new-recipe-1.jpg",
    title: "Healthy Juicy Chicken Burger (Quick & Easy)",
    description:
      "Quick + Easy Juicy Chicken Burger- Healthy Chicken Burger? That’s right!",
    buttonText: "Learn More",
  },
  {
    image: "images/home/pancake.jpg",
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

//! detail-recipe (add alert to comment input)
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
//! End of detail-recipe (add alert to comment input)
