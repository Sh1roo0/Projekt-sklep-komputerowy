const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalID = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){

    if(slides.length > 0){

        slides[slideIndex].classList.add("displaySlide");
        intervalID = setInterval(nextSlide, 5000);
    }
   
    
}
function showSlide(index){

if(index >= slides.length){
    slideIndex = 0;
}
else if(index < 0){
    slideIndex = slides.length - 1;
}

slides.forEach(slide =>{
    slide.classList.remove("displaySlide");
});
slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
clearInterval(intervalID);
slideIndex--;
showSlide(slideIndex);
}
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}




function Walidacja(){
    let newsletter = document.getElementById("newsletter").value;


    if(newsletter == ""){
    alert("Niepodano adresu e-mail");
    return;
}else{
    alert("Dziękujemy za zapisanie się do naszego newslettera!");
}



document.getElementById("newsletter").value = "";
}



var icon = document.getElementById("icon");

  icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "img/techpoint.png";

    }else{
        icon.src = "img/techpoint.png";
    }
  }
  function Modes() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }
