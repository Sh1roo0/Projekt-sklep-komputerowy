const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalID = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {

    if (slides.length > 0) {

        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 5000);
    }


}
function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide() {
    clearInterval(intervalID);
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}




function Walidacja() {
    let newsletter = document.getElementById("newsletter").value;


    if (newsletter == "") {
        alert("Niepodano adresu e-mail");
        return;
    } else {
        alert("Dziękujemy za zapisanie się do naszego newslettera!");
    }

    document.getElementById("newsletter").value = "";
}

const loader = document.getElementById("loader");
const container = document.getElementById("container");

window.addEventListener("load", () => {
    loader.style.display = "none";
    container.style.display = "block";
})