// //---------------SMOOTH SCROLLING FUNCTION---------------------------
function smoothScroll(target) {
  const targetElement = document.querySelector(target);
  window.scrollTo({
    top: targetElement.offsetTop,
    behavior: 'smooth'
  });
}

// Attach click event listeners to menu items
const menuItems = document.querySelectorAll('nav a');
menuItems.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent default anchor link behavior
    const target = this.getAttribute('href');
    smoothScroll(target);
  });
});

//---------------CHANGE BIOGRAPHY BY CLICKING MY FACE---------------------------
// Get references to the divs and the paragraph
const violinBiographyDiv = document.querySelector(".originalBiography");
const aboutMeDiv = document.querySelector(".newBiography");
const bioToggle = document.getElementById("bioToggle");


// Hide the original biography initially
violinBiographyDiv.style.display = "none";
let clicked = false;

// Add a click event listener to the "Toggle Biography" paragraph
bioToggle.addEventListener("click", function() {
  // Toggle the visibility of the original and new biographies based on the 'clicked' variable
  if (clicked) {
    // If clicked is true, show the original biography and hide the new one
    violinBiographyDiv.style.display = "block";
    aboutMeDiv.style.display = "none";

    
  } else {
    // If clicked is false, hide the original biography and show the new one
    violinBiographyDiv.style.display = "none";
    aboutMeDiv.style.display = "block";

  }
  
  // Toggle the 'clicked' variable for the next click
  clicked = !clicked;
});

//---------------GALLERY---------------------------
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

