// ==========================
// SESSION CONTROL (RUN FIRST)
// ==========================
const intro = document.getElementById("intro");

if (sessionStorage.getItem("introPlayed")) {
  if (intro) intro.style.display = "none";
} else {
  document.body.classList.add("intro-active");
  document.body.style.overflow = "hidden";
}

const root = document.documentElement;

const slideTL = gsap.timeline();
const maskTL = gsap.timeline();
const mainTL = gsap.timeline({
  repeat: -1,
  onRepeat: () => {
    gsap.set("#texttwo", { opacity: 0 });
    gsap.set("#bar", { scaleY: 0.1 });
    gsap.set("#textone h1", { opacity: 1 });
  },
});

gsap.set("#texttwo", { opacity: 0 });
gsap.set("#bar", { scaleY: 0.1 });

slideTL
  .to("#bar", 1, {
    y: 225,
    scaleY: 1,
    ease: "back.out",
  })
  .to("#slidebar", 1.5, {
    x: 600,
    delay: 0.5,
    ease: "back.inOut(0.8)",
  })
  .to("#slidebar", 1.5, {
    x: 0,
    delay: 0.5,
    ease: "back.inOut(0.8)",
  })
  .to("#slidebar", 1.5, {
    x: 600,
    delay: 0.5,
    ease: "back.inOut(0.8)",
  })
  .to("#bar", 1, {
    y: 500,
    scaleY: 0.1,
    ease: "back.in",
  });

maskTL
  .to("#textone", 1.5, {
    ease: "back.inOut(0.8)",
    "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)",
    onComplete: () => {
      gsap.set("#texttwo", { opacity: 1 });
    },
  })
  .to("#textone", 1.5, {
    delay: 0.5,
    ease: "back.inOut(0.8)",
    "clip-path": "polygon(0 0, 18% 0, 8% 100%, 0% 100%)",
    onComplete: () => {
      gsap.set("#textone h1", { opacity: 0 });
    },
  })
  .to("#textone", 1.5, {
    delay: 0.5,
    ease: "back.inOut(0.8)",
    "clip-path": "polygon(0 0, 91% 0, 81% 100%, 0% 100%)",
  });

mainTL.add(slideTL).add(maskTL, 1.5);
// ==========================
// CONTROL FLOW
// ==========================

// stop looping after first run
setTimeout(() => {
  mainTL.repeat(0);
}, 6000);

// fade out intro + reveal site
setTimeout(() => {
  if (!intro) return;

  gsap.to(intro, {
    opacity: 0,
    duration: 0.8,
    onComplete: () => {
      intro.style.display = "none";

      document.body.classList.remove("intro-active");
      document.body.style.overflow = "auto";

      sessionStorage.setItem("introPlayed", "true");
    },
  });
}, 7000);
