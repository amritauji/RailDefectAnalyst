// Initialize AOS Library
AOS.init();

// Initialize Particles.js
particlesJS.load("particles-js", "particles.json", function () {
  console.log("Particles.js loaded successfully!");
});

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});

AOS.init({
  duration: 1000,
  easing: "ease-in-out",
  once: true,
});
setTimeout(() => {
  document.getElementById('launchMessage').remove();
}, 5000); // Matches the animation duration