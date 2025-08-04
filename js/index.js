const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-item");
const contactButton = document.querySelector(".cotact");
const body = document.body;

// Toggle hamburger menu and scrollbar on click
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
});

// Close hamburger menu and show scrollbar when a nav link is clicked
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("no-scroll");
  });
});

// Close hamburger menu, show scrollbar, and scroll to Contact section when Contact button is clicked
contactButton.addEventListener("click", () => {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
  body.classList.remove("no-scroll");
  document.querySelector("#con_tbg").scrollIntoView({ behavior: "smooth" });
});