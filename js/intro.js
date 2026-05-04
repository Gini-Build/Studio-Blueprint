const intro = document.getElementById("intro");
const typingElement = document.getElementById("typing");

const text = "studio blueprint";
let index = 0;

function closeIntro() {
  intro.style.transition = "opacity 0.8s ease";
  intro.style.opacity = "0";
  setTimeout(() => {
    intro.style.display = "none";
    document.body.style.overflow = "";
    sessionStorage.setItem("introPlayed", "true");
  }, 850);
}

// session control
if (sessionStorage.getItem("introPlayed")) {
  if (intro) intro.style.display = "none";
} else {
  document.body.style.overflow = "hidden";

  // safety net: force-close after 8s if something goes wrong
  const safetyTimer = setTimeout(closeIntro, 8000);

  function type() {
    if (index < text.length) {
      typingElement.textContent += text.charAt(index);
      index++;
      setTimeout(type, 60);
    } else {
      typingElement.innerHTML += '<span class="dot">.</span>';
      setTimeout(() => {
        clearTimeout(safetyTimer);
        closeIntro();
      }, 800);
    }
  }

  // DOMContentLoaded fires as soon as HTML is parsed — no waiting for images
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", type);
  } else {
    type();
  }
}
