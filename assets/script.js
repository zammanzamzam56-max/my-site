<script>
  // Mobile Menu Toggle
  const btn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', !expanded);
      menu.classList.toggle('open');
    });
  }

  // Footer Year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();

  // About Page Animations
  const animatedEls = document.querySelectorAll(
    '.fade-up, .slide-in-left, .slide-in-right, .scale-up'
  );

  function animateOnScroll() {
    animatedEls.forEach(el => {
      const position = el.getBoundingClientRect().top;
      if (position < window.innerHeight - 120) {
        el.classList.add('visible');
      }
    });
  }

  window.addEventListener('scroll', animateOnScroll);
  window.addEventListener('load', animateOnScroll);
</script>
