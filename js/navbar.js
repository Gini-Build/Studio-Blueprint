console.log("JS loaded");

const navbar = document.querySelector(".navbar");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar nav");

// ==========================
// SCROLL EFFECT
// ==========================
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// ==========================
// HAMBURGER TOGGLE
// ==========================
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("open");
  });
}

// ==========================
// CLOSE MENU ON CLICK
// ==========================
document.querySelectorAll(".navbar nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("open");
  });
});
