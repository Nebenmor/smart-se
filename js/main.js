// Gallery section
var swiper = new Swiper(".gallery", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// Testimonial Section
var swiper = new Swiper(".testimonial", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  pagination: {
    el: ".testimonial-pagination",
    clickable: true,
  },
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
});

// Date
const date = document.getElementById("date");
newDate = new Date().getFullYear();
date.innerHTML = newDate;