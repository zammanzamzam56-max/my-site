// FINAL FIXED SCRIPT — WORKS ON ALL PAGES

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.menu');

  if (btn && menu) {
    btn.addEventListener('click', () => {
      const expanded = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', (!expanded).toString());
      menu.classList.toggle('open');
    });
  }

  const y = document.getElementById('year');
  if (y) {
    y.textContent = new Date().getFullYear();
  }
});
