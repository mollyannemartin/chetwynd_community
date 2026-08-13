
// javascript copied temporarily while I get it ready to release - learn how it works later

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});