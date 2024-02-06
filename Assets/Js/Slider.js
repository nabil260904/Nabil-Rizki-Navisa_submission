document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".slides img");
  const totalSlides = slides.length;
  let currentIndex = 0;
  let slideInterval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      if (i === index) {
        slide.style.display = "block";
      } else {
        slide.style.display = "none";
      }
    });
  }

  function nextSlide() {
    currentIndex++;
    if (currentIndex >= totalSlides) {
      currentIndex = 0;
    }
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex--;
    if (currentIndex < 0) {
      currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
  }

  function startSlideShow() {
    slideInterval = setInterval(nextSlide, 1500); // Change slide every 3 seconds (3000 milliseconds)
  }

  function stopSlideShow() {
    clearInterval(slideInterval);
  }

  // Show the first slide initially
  showSlide(currentIndex);

  // Start the slideshow
  startSlideShow();

  // Add event listeners to buttons
});
