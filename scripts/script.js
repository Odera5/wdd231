const nav = document.querySelector("#nav");

const hamburger = document.querySelector("#hamburger");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

const date = new Date().getFullYear();
document.querySelector(".fullyear").textContent = date;
document.querySelector("#last-modified").textContent = document.lastModified;
