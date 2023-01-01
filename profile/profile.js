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


// ! Change image container when desired content clicked
const activeClass = "active";
let currentSection = null;

function changeImage(n) {
  const images = {
    1: ["/images/home/pancake.jpg", "/images/home/new-recipe-1.jpg"],
    2: [
      "/images/home/banana-smoothie-pop.jpg",
      "/images/home/caramel-white-cake.jpg",
    ],
    3: ["/images/home/bomb-chicken.jpg", "/images/home/chicken-kare.jpg"],
  };
  currentSection = n;
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
  const clickedElement = document.querySelector(`.col-2[data-section="${n}"]`);
  clickedElement.classList.add(activeClass);
}
// ! end of change image container when desired content clicked