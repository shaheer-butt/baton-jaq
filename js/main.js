document.addEventListener("DOMContentLoaded", () => {
  const duration = 2000;

  const animate = (el) => {
    const target = +el.dataset.target;
    const suffix = el.dataset.suffix || "";
    const decimals = target % 1 !== 0 ? 1 : 0;
    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      el.textContent = (progress * target).toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll(".counter-item-number").forEach((c) => observer.observe(c));
});







