
// javascript copied temporarily while I get it ready to release - learn how it works later

const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", function() {
    navMenu.classList.toggle("show");
});

//Javascript for slider on facility page
document.querySelectorAll(".slider").forEach(function(slider) {

    const slides = slider.querySelector(".slides");
    const images = slider.querySelectorAll(".slides img");
    const previousButton = slider.querySelector(".previous");
    const nextButton = slider.querySelector(".next");
    const dots = slider.parentElement.querySelectorAll(".dot");

    let currentSlide = 0;


    function showSlide(slideNumber) {

        slides.style.transform = `translateX(-${slideNumber * 100}%)`;

        dots.forEach(function(dot) {
            dot.classList.remove("active");
        });

        dots[slideNumber].classList.add("active");
    }


    nextButton.addEventListener("click", function() {

        currentSlide++;

        if (currentSlide >= images.length) {
            currentSlide = 0;
        }

        showSlide(currentSlide);
    });


    previousButton.addEventListener("click", function() {

        currentSlide--;

        if (currentSlide < 0) {
            currentSlide = images.length - 1;
        }

        showSlide(currentSlide);
    });

});