// Hamburger Menu
const btn = document.getElementById("menu-icon");
const nav = document.getElementById("menu");

btn.addEventListener("click", () => {
  btn.classList.toggle("open");
  nav.classList.toggle("flex");
  nav.classList.toggle("hidden");

  console.log("Hey, I got clicked!");
});

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
var swiper = new Swiper(".testimonialSwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});

// Blog Section
var swiper = new Swiper(".blogSwiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});

// Date
const footerDate = document.getElementById("date");
const newDate = new Date().getFullYear();
if (footerDate) {
  footerDate.innerHTML = newDate;
}

const blogDates = document.querySelectorAll(".blog-date");
blogDates.forEach((blogDate) => {
  blogDate.innerHTML = newDate;
});

console.log(newDate);

// Set up the Intersection Observer
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // If the element is in the viewport
      if (entry.isIntersecting) {
        // Add the animate class to trigger animation
        entry.target.classList.add("animate");
      }
    });
  },
  {
    // Options for the observer
    threshold: 0.2, // Trigger when at least 20% of the element is visible
  }
);

// Observe all elements with the slide-up class
document.querySelectorAll(".slideUp, .fadeIn").forEach((element) => {
  observer.observe(element);
});

// If you also want to observe sections containing slide-up elements
document.querySelectorAll(".animated-section").forEach((section) => {
  observer.observe(section);
});
