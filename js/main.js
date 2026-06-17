/* ===========================================
          Splide Js Member Slider 
=========================================== */
window.addEventListener('load', function () {
  var splide = new Splide('.member-slider', {
    type: 'loop',

    autoWidth: true,
    autoplay: true,
    interval: 3000,
    speed: 600,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    gap: 24,
    padding: 0,
    drag: true,
    trimSpace: false,
  }).mount();

  document.querySelector('.member-slide-prev-arrow').addEventListener('click', function () {
    splide.go('<');
  });
  document.querySelector('.member-slide-next-arrow').addEventListener('click', function () {
    splide.go('>');
  });
});


/* ===========================================
          Splide Js Project  Slider 
=========================================== */
window.addEventListener('load', function () {
  var splide = new Splide('.project-slider', {
    type: 'loop',

    autoWidth: true,
    autoplay: false,
    interval: 3000,
    speed: 600,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    gap: 24,
    padding: 0,
    drag: true,
    trimSpace: false,
  }).mount();

  document.querySelector('.project-slider-prev-arrow').addEventListener('click', function () {
    splide.go('<');
  });
  document.querySelector('.project-slider-next-arrow').addEventListener('click', function () {
    splide.go('>');
  });
});


/* ===========================================
        Splide Js  Behind Project  Slider 
=========================================== */
window.addEventListener('load', function () {
  var splide = new Splide('.behind-project-slider', {
    type: 'loop',

    autoWidth: true,
    autoplay: false,
    interval: 3000,
    speed: 600,
    easing: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
    pauseOnHover: true,
    arrows: false,
    pagination: false,
    gap: 24,
    padding: 0,
    drag: true,
    trimSpace: false,
  }).mount();

  document.querySelector('.behind-project-slider-prev-arrow').addEventListener('click', function () {
    splide.go('<');
  });
  document.querySelector('.behind-project-slider-next-arrow').addEventListener('click', function () {
    splide.go('>');
  });
});