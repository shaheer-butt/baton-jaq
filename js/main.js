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



/* ===========================================
   Finition Tabs — Toggle Logic (scoped per section)
=========================================== */
document.querySelectorAll('.finition-tabs').forEach(function (section) {
  var tabButtons = section.querySelectorAll(':scope > .finition-tabs-wrapper .finition-tab-btn, :scope .finition-tab-btn');
  var tabPanels = section.querySelectorAll('.finition-tab-panel');

  if (!tabButtons.length || !tabPanels.length) return;

  tabButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.getAttribute('data-tab');

      tabButtons.forEach(function (b) { b.classList.remove('is-active'); });
      tabPanels.forEach(function (p) { p.classList.remove('is-active'); });

      btn.classList.add('is-active');
      section.querySelector('#' + target).classList.add('is-active');
    });
  });
});



/* ===========================================
      Splide Js  Carrier Gallery  Slider 
=========================================== */

window.addEventListener('load', function () {
  var splide = new Splide('.carrier-gallery-slider', {
    type: 'loop',
    fixedWidth: '40%',
    arrows: false,
    pagination: false,
    gap: 24,
    padding: 0,
    drag: true,
    trimSpace: false,
    autoScroll: {
      speed: 1.5, 
      pauseOnHover: true,
      pauseOnFocus: false,
    },
  });

  splide.mount(window.splide.Extensions);
});



/* ===========================================
            Job Application Popup
=========================================== */
(function () {
  var overlay = document.querySelector('.job-popup-overlay');
  var popupTitle = document.querySelector('.job-popup-title');
  var closeBtn = document.querySelector('.job-popup-close');
  var applyButtons = document.querySelectorAll('.carrier-job-btn .btn-devis');

  if (!overlay || !applyButtons.length) return;

  applyButtons.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      e.preventDefault();

      var jobItem = btn.closest('.carrier-jobs-item');
      if (!jobItem) return;

      var title = jobItem.querySelector('.carrier-jobs-title');

      popupTitle.textContent = title ? title.textContent : '';

      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
  });

  closeBtn.addEventListener('click', function () {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  });

  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();