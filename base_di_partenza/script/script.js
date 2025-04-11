const navbar = document.getElementById("header");
const yellowSection = document.getElementById("yellowSection");
const headerbutton = document.getElementById("headerButton");

window.addEventListener("scroll", () => {
  if (window.scrollY > yellowSection.offsetHeight) {
    yellowSection.classList.add("scrolled");
    navbar.classList.add("scrolled");
    headerButton.classList.add("scrolled1");
  } else {
    yellowSection.classList.remove("scrolled");
    navbar.classList.remove("scrolled");
    headerButton.classList.remove("scrolled1");
  }
});
