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

////////////////////

document.getElementById("title").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

document
  .getElementById("ingredients")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  });

document.getElementById("video").addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
  }
});

document
  .getElementById("add-recipe-form")
  .addEventListener("submit", function (event) {
    var title = document.getElementById("title").value;
    var ingredients = document.getElementById("ingredients").value;
    var video = document.getElementById("video").value;

    if (!title) {
      alert("Please enter a title for the recipe");
      return;
    }
    if (!ingredients) {
      alert("Please enter the ingredients for the recipe");
      return;
    }

    var file = document.getElementById("file-input").value;

    if (file.length < 1) {
      alert("Please add photo");
    }

    if (file.length > 1) {
      alert("Recipe added successfully");
    }
  });
