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
  }, 1500);
});
// !End of animations to navbar (disappear while scroll & show while stop and scrolling to top)

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

// const ingredientsLink = document.querySelector("#ingredients .section-link");
// const videoStepsLink = document.querySelector("#video-steps .section-link");
// const ingredientsSection = document.querySelector("#ingredients");
// const videoStepsSection = document.querySelector("#video-steps");

// ingredientsLink.addEventListener("click", (event) => {
//   event.preventDefault();
//   ingredientsSection.classList.remove("hidden");
//   videoStepsSection.classList.add("hidden");
// });

// videoStepsLink.addEventListener("click", (event) => {
//   event.preventDefault();
//   ingredientsSection.classList.add("hidden");
//   videoStepsSection.classList.remove("hidden");
// });
