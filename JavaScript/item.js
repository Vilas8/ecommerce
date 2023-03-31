let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const showSlides = () =>{
  let i = slideIndex;
  for (i; i <= slides.length; i++){
    if (i == 0){
      slides[i].classList.add('active');
      break;
    }
    else if (i > 0 && i <= slides.length - 1){
      slides[i].classList.add("active");
      slides[i-1].classList.remove("active");
      break;
    }
    else {
      slides[i-1].classList.remove("active");
      slides[0].classList.add("active");
      slideIndex = 0;
      break;
    }
    
  }
  console.log(slideIndex);
  slideIndex++;
  setTimeout(showSlides, 5000);
}


// Execution
slides[slideIndex].classList.add("active");
showSlides();