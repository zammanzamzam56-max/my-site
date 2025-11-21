// Mobile menu toggle & year

const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

if (btn && nav) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true' || false;
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}

const y = document.getElementById('year');
if (y) {
  y.textContent = new Date().getFullYear();
}
