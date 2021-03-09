const menuIcon = document.getElementById("menu-icon");
const slideoutMenu = document.getElementById("slideout-menu");
const slides = document.getElementsByClassName("mySlides");
const dots = document.getElementsByClassName("dot");

menuIcon.addEventListener('click', function () {
  if (slideoutMenu.style.opacity == "1") {
    slideoutMenu.style.opacity = '0';
    slideoutMenu.style.pointerEvents = 'none';
  } else {
    slideoutMenu.style.opacity = '1';
    slideoutMenu.style.pointerEvents = 'auto';
  }
})

/////////////////////////////////////////

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activedot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " activedot";
  setTimeout(showSlides, 2500); // Change image every 2 seconds
}