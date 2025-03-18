// 69. Image Slider

const slides = document.querySelectorAll(".slide");
let slideIndex = 0;
let intervalId = null;

// Wait for the dom content to load, after call init..
document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider(){

    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}
function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length -1;
    }

    console.log(`Inner: ${slideIndex}`);
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
}
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
    
}
function nextSlide(){
    console.log(`Outer: ${slideIndex}`);
    slideIndex++;
    showSlide(slideIndex);
}