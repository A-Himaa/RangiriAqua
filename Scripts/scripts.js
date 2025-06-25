// Hover effect
  const navLinks = document.querySelectorAll('.nav-links ul li a');

  navLinks.forEach(link => {
    link.addEventListener('click', function(){
      navLinks.forEach(l => l.classList.remove('active'));
      this.classList.add('active');
    })
  })

// Menu Icons
  const menuIcon = document.getElementById('menuIcon');
  const navElements = document.getElementById('navLinks');

  menuIcon.addEventListener('click', () => {
    navElements.classList.toggle('active');
  });

// Image Slider
document.addEventListener("DOMContentLoaded", () => {
  const imgList = document.getElementById("img-list");
  if (imgList) {
    const images = imgList.children;
    const totalImages = images.length;
    let index = 0;

    setInterval(() => {
      index++;
      imgList.style.transition = "top 0.7s ease";
      imgList.style.top = `-${index * 120}vh`;

      if (index === totalImages - 1) {
        setTimeout(() => {
          imgList.style.transition = "none"; 
          imgList.style.top = "0";
          index = 0;
        }, 7000); 
      }

    }, 8000);
  }
});

// Text animation
const words = ["ADVENTURE", "LEISURE", "EDUCATION", "NATURE"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const textElement = document.querySelector(".font-animation1");
const typingSpeed = 150;
const deletingSpeed = 80;
const pauseBetweenWords = 1500;

function typeEffect(){
  if (!textElement) return;

  const currentWord = words[wordIndex];

  if (isDeleting){
    charIndex--;
    textElement.textContent = currentWord.substring(0, charIndex);
  } else {
    charIndex++;
    textElement.textContent = currentWord.substring(0, charIndex);
  }

  let currentSpeed = isDeleting ? deletingSpeed : typingSpeed;

  if (!isDeleting && charIndex === currentWord.length){
    currentSpeed = pauseBetweenWords;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0){
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    currentSpeed = 300;
  }

  setTimeout(typeEffect, currentSpeed);
}

window.onload = () => {
  if (textElement) typeEffect();
};

// Card animation
document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target); 
        }
      });
    }, { threshold: 0.2 });

    const elementsToObserve = document.querySelectorAll('.card-container, .heading-style-2, .para-img-sec, .competency-areas');
  elementsToObserve.forEach(element => {
    observer.observe(element);
  });
});



// Progress Bar animation
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      const value = bar.getAttribute("data-value");
      const fill = bar.querySelector(".progress-fill");

      fill.style.width =`${value}%`;

      observer.unobserve(bar);

    }
  });
},{
  threshold: 0.4});
window.addEventListener("DOMContentLoaded", () => {
  const bars = document.querySelectorAll(".progress");

  bars.forEach(bar => {
    const fill = bar.querySelector(".progress-fill");
    fill.style.width = "0"; 
    observer.observe(bar);  
  });
});


// Image slider 2









  

