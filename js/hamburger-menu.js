/* ===========================================
   RESPONSIVE — Mobile Hamburger Menu Toggle
=========================================== */
(function () {
  var hamburger = document.querySelector('.nav-hamburger');
  var overlay   = document.querySelector('.nav-overlay');

  if (!hamburger || !overlay) return;

  /* Open / close on hamburger click */
  hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('is-active');
    overlay.classList.toggle('open');

    /* Lock body scroll while menu is open */
    document.body.style.overflow = overlay.classList.contains('open') ? 'hidden' : '';
  });

  /* Close menu when any overlay link is tapped */
  overlay.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      hamburger.classList.remove('is-active');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  /* Close menu on Escape key */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('open')) {
      hamburger.classList.remove('is-active');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });

  /* Close menu if user resizes back to desktop width */
  window.addEventListener('resize', function () {
    if (window.innerWidth > 1024) {
      hamburger.classList.remove('is-active');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
})();