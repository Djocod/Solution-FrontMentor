const btn = document.getElementById("btn");
const sideBar = document.querySelector("#side-bar > ul");
const stoped = document.querySelector(".close");
const arrow = document.getElementById("arrow");

btn.addEventListener("click", (e) => {
  if (e.target) {
    btn.classList.toggle("active");
    sideBar.classList.toggle("active");
  } else {
    btn.classList.remove("active");
    sideBar.classList.remove("active");
  }
});

stoped.addEventListener("click", () => {
  btn.classList.remove("active");
  sideBar.classList.remove("active");
});

arrow.addEventListener("click", () => {
  window.scroll({
    top: 800,
    behavior: "smooth",
  });
});
