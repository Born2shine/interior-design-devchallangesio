var close_nav = document.getElementById("close_nav");
var toggle = document.getElementById("toggle");
var nav_links = document.getElementById("nav_links");

toggle.addEventListener("click", () => {
  nav_links.classList.remove("hideNav");
});
close_nav.addEventListener("click", () => {
  nav_links.classList.add("hideNav");
});
