// Side Menu Icon
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

    const elementsToObserve = document.querySelectorAll('.card-container, .heading-style-2, .para-img-sec, .competency-areas, .images, .about-us-sec1, .sliding-sec-slide, .popup-content');
    elementsToObserve.forEach(element => {
    observer.observe(element);
  });
});

// Pop Up section
document.addEventListener('DOMContentLoaded', () => {
const popup = document.getElementById('popup');
const popupHeading = document.getElementById('popup-heading');
const popupImg = document.getElementById('popup-img');
const popupDesc = document.getElementById('popup-desc');
const closeBtn = document.getElementById('closePopUp');
const popupContent = document.querySelector('.popup-content');

const popupData = {
  "wr-rop": {
    heading: "Flat Water Rafting",
    img: "../Assets/Images/cards/wr-rop.jpg",
    desc: "Flat water rafting is all about smooth rides and stunning views. It’s a laid-back adventure where you paddle through calm waters, enjoy the fresh air, and take in the beauty around you. No wild waves—just a peaceful, fun way to spend time with friends or family out in nature."
  },
   "hight-rope": {
    heading: "High Rope",
    img: "../Assets/Images/adventure/hight-rope.jpg",
    desc: "High rope adventures are all about testing your balance, courage, and coordination—high up in the air! Set among tall trees or poles, these obstacle courses include rope bridges, zip lines, and swinging elements that challenge you in the best way. It’s a thrilling experience that’s perfect for team building, building confidence, and having a whole lot of fun."
  },
   "paint-ball": {
    heading: "Paint Ball",
    img: "../Assets/Images/adventure/paint-ball.jpg",
    desc: "Paintball is an action-packed game where you gear up, grab a paintball marker, and dive into fast-paced battles with friends. It’s all about strategy, teamwork, and quick moves as you try to tag opponents with colorful paintballs. Whether you’re competing or just playing for fun, it’s a thrilling way to get your adrenaline pumping!"
  },
   "archery": {
    heading: "Archery",
    img: "../Assets/Images/adventure/archery.jpg",
    desc: "Archery is the art of shooting arrows at a target using a bow. It’s a fun mix of focus, skill, and patience—whether you’re aiming for bullseyes or just trying it out for the first time. Great for building concentration and enjoying a calm but exciting challenge outdoors!"
  },
   "shoot-bot": {
    heading: "Target Shooting",
    img: "../Assets/Images/cards/shoot-bot.jpg",
    desc: "Target shooting is a thrilling activity that tests your aim, focus, and steady hand. Using air rifles or similar gear, you take aim at fixed targets to see how accurate you can be. It’s a fun way to challenge yourself, build precision, and enjoy a bit of friendly competition in a safe and controlled setting."
  },
   "activity1": {
    heading: "Fun Activity",
    img: "../Assets/Images/adventure/activity1.jpg",
    desc: "Fun games are all about laughing till your stomach hurts, friendly chaos, and just having the best time ever! Whether it’s silly relays, wacky challenges, or team games that get everyone moving, these activities are perfect for breaking the ice and creating pure, unforgettable fun. No pressure—just play, cheer, and enjoy every moment!"
  },
   "activity2": {
    heading: "Fun Activity",
    img: "../Assets/Images/adventure/activity2.jpg",
    desc: "Fun games are all about laughing till your stomach hurts, friendly chaos, and just having the best time ever! Whether it’s silly relays, wacky challenges, or team games that get everyone moving, these activities are perfect for breaking the ice and creating pure, unforgettable fun. No pressure—just play, cheer, and enjoy every moment!"
  },
   "low-rope": {
    heading: "Low Rope",
    img: "../Assets/Images/adventure/low-rope.jpg",
    desc: "Low rope activities offer a fun and hands-on challenge that brings people together. Set just above the ground, these tasks involve balancing, swinging, and problem-solving as a team. It’s all about trust, communication, and a lot of laughs—perfect for building connections and enjoying some lighthearted adventure!"
  },
   "burma1": {
    heading: "Burma Bridge",
    img: "../Assets/Images/adventure/burma1.jpg",
    desc: "Burma Bridge is a thrilling rope challenge that tests your balance and nerves! Made of two side ropes to hold and one to walk on, it stretches high above the ground and wobbles with every step. It’s a fun mix of adventure, focus, and excitement—perfect for those who love a bit of height and a lot of challenge!"
  },
   "img-slide-2": {
    heading: "Fun Activity",
    img: "../Assets/Images/img-slide-2.jpg",
    desc: "Fun games are all about laughing till your stomach hurts, friendly chaos, and just having the best time ever! Whether it’s silly relays, wacky challenges, or team games that get everyone moving, these activities are perfect for breaking the ice and creating pure, unforgettable fun. No pressure—just play, cheer, and enjoy every moment!"
  },
   "img-slide-8": {
    heading: "Aerial Rope",
    img: "../Assets/Images/img-slide-8.jpg",
    desc: "Aerial rope activities take adventure to new heights—literally! Suspended above the ground, these rope challenges test your strength, balance, and bravery as you climb, swing, or cross obstacles in the air. It’s a fun and energizing experience that gives you a real taste of adventure while pushing your limits in the best way!"
  },
   "activity3": {
    heading: "Fun Activity",
    img: "../Assets/Images/adventure/activity3.jpg",
    desc: "Fun games are all about laughing till your stomach hurts, friendly chaos, and just having the best time ever! Whether it’s silly relays, wacky challenges, or team games that get everyone moving, these activities are perfect for breaking the ice and creating pure, unforgettable fun. No pressure—just play, cheer, and enjoy every moment!"
  }
}

document.querySelectorAll('.ad-img-wrapper button').forEach((btn) => {
  btn.addEventListener('click', () => {
    const parentImg = btn.closest('.ad-img-wrapper').querySelector('img');
    const key = parentImg.src.split('/').pop().split('.')[0];

    if (popupData[key]) {
      popupHeading.textContent = popupData[key].heading;
      popupImg.src = popupData[key].img;
      popupDesc.textContent = popupData[key].desc;
      popup.classList.remove('hidden');

      popupContent.classList.remove('animate'); 
      void popupContent.offsetWidth;
      popupContent.classList.add('animate');
    }
  });
});
if (closeBtn) {
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
  });
}

  if (popup) {
  popup.addEventListener('click', (e) => {
    if (e.target === popup) popup.classList.add('hidden');
  });
}
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

// Image Carousel 
const dots = document.querySelectorAll(".dot");
  const images = document.getElementById("images");
  const totalSlides = dots.length;

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const index = parseInt(dot.getAttribute("data-index"));

      images.style.transform = `translateX(-${index * 34}%)`;

      dots.forEach(d => d.classList.remove("active"));
      dot.classList.add("active");
    });
  });

// Paragraph Slider
let currentSlide = 0;
  const track = document.querySelector(".image-list");
  const slides = document.querySelectorAll(".sliding-sec-slide");
  const nextSlide = document.getElementById("nextPara")
  const prevSlide = document.getElementById("prevPara")
  const paraSlides = slides.length;

  function showSlide(index) {
    if (index >= paraSlides) index = 0;
    if (index < 0) index = paraSlides - 1;
    track.style.transform = `translateX(-${index * 50}%)`;
    currentSlide = index;
  }

  if (nextSlide) {
  nextSlide.addEventListener("click", () => {
      showSlide(currentSlide + 1);
  });
 }

  if (prevSlide) {
  prevSlide.addEventListener("click", () => {
      showSlide(currentSlide - 1);
  });
}
  setInterval(() => {
    showSlide(currentSlide + 1);
  }, 7000);

// Image Model
document.addEventListener("DOMContentLoaded", () => {
  imageModel = document.getElementById("imageModel");
  modelImage = document.getElementById("modelImage");
  closeIcon  = document.getElementById("closeModel");

  document.querySelectorAll(".thumbnail").forEach(img => {
    img.addEventListener('click' , () => {
      imageModel.style.display = "block";
      modelImage.src = img.src;
    });
  });

  closeIcon.addEventListener('click', () => {
    imageModel.style.display = "none";
  })

  window.onclick = (e) => {
    if (e.target === imageModel) imageModel.style.display = "none";
  }
})




  