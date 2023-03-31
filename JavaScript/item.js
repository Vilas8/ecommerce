const carousal = document.querySelector(".carousel");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let timer;
let slideIndex = 0;
let slides = document.querySelectorAll('.slide');


const showSlides = () =>{
  let i;
  for (i = 0; i <  slides.length; i++){
    if(slides[i].classList.contains("active")){
        slides[i].classList.remove("active");
    }
  
  }
  if(slideIndex === slides.length){
    slideIndex = 0;
  }
  slides[slideIndex].classList.add("active");
  
  console.log(slideIndex);
  slideIndex++;
}

const prevSlide = () => {
    slideIndex -= 2;
    if(slideIndex < 0){
      slideIndex = slides.length - 1;
    }
    showSlides();
}

const nextSlide = () => {
    showSlides();
}


// Execution
showSlides();
timer  = setInterval(showSlides, 3000);
carousal.addEventListener("mouseenter", () => {
  clearInterval(timer);
})

carousal.addEventListener("mouseleave", () => {
  timer = setInterval(showSlides, 3000)
})

prev.addEventListener("click", prevSlide);
next.addEventListener("click", nextSlide);