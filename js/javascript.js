burger = document.querySelector(".burger");
navBar = document.querySelector(".navbar");
navList = document.querySelector(".nav-list");
rightNav = document.querySelector(".rightNav");

burger.addEventListener("click", () => {
  rightNav.classList.toggle("visibility");
  navList.classList.toggle("visibility");
  navBar.classList.toggle("h-nav");
});
