let slidePositon = 0;           /*starting slide as 0 starts here*/
const slides = document.getElementsByClassName('carousel_item');
const totalSlides = slides.length;

document.
  getElementById('carousel_button--next')
  .addEventListener("click", function() {
    moveToNextSlide();
 });

 document.
  getElementById('carousel_button--prev')
  .addEventListener("click", function() {
    moveToPrevSlide();
 });

 function updateSlidePosition() {
  for (let slide of slides){
    slide.classList.remove('carousel_item--visible');
    slide.classList.add('carousel_item--hidden');
  }
  slides[slidePositon].classList.add('carousel_item--visible')
}


 function moveToNextSlide(){            /*slide position starts as 0, totalSlides goes from 1-3, so need to fix count*/
   if (slidePositon == totalSlides -1){   /*updating slide position*/
    slidePositon = 0;
  } else{
    slidePositon++;
  }
  updateSlidePosition();
}

 function moveToPrevSlide(){
  if (slidePositon == 0){
    slidePositon = totalSlides -1;     /*updating slide position*/
  } else {
    slidePositon--;
  }
  updateSlidePosition();
}