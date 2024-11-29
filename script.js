document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-controls .prev');
  const nextBtn = document.querySelector('.hero-controls .next');
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.classList.remove('active');
          if (i === index) {
              slide.classList.add('active');
          }
      });
  }

  prevBtn.addEventListener('click', () => {
      currentSlide = (currentSlide === 0) ? slides.length - 1 : currentSlide - 1;
      showSlide(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      showSlide(currentSlide);
  });

  // 슬라이드 자동 전환
  setInterval(() => {
      currentSlide = (currentSlide === slides.length - 1) ? 0 : currentSlide + 1;
      showSlide(currentSlide);
  }, 5000); // 5초마다 슬라이드 전환
});
