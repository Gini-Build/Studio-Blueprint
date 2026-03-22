const intro = document.getElementById("intro");
const typingElement = document.getElementById("typing");

const text = "studio blueprint";
let index = 0;

// session control
if (sessionStorage.getItem("introPlayed")) {
  if (intro) intro.style.display = "none";
} else {
  document.body.style.overflow = "hidden";
}

// typing effect
function type() {
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(type, 60);
  } else {
    // add yellow dot at end
    typingElement.innerHTML += '<span class="dot">.</span>';

    // fade out
    setTimeout(() => {
      intro.style.opacity = "0";
      intro.style.transition = "opacity 0.8s ease";

      setTimeout(() => {
        intro.style.display = "none";
        document.body.style.overflow = "auto";
        sessionStorage.setItem("introPlayed", "true");
      }, 600);
    }, 800);
  }
}

// start animation
window.addEventListener("load", type);
