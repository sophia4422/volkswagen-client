const form = document.getElementById("form");
const title = document.getElementById("register-title");

const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  if (window.pageYOffset > 500) {
    nav.classList.add("bg-dark", "shadow");
  } else {
    nav.classList.remove("bg-dark", "shadow");
  }
});

form.addEventListener("submit", () => {
  title.innerText = "Thank you for registering!";
});
