"use strict";

// Toggle mobile menu
document.getElementById("menu-toggle").addEventListener("click", () => {
  document.getElementById("nav-menu").classList.toggle("show");
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      document.getElementById("nav-menu").classList.remove("show");
    }
  });
});

// Fake form handler
document.getElementById("contact-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("Paldies par vēstuli, mēs to saņēmām!");
});
