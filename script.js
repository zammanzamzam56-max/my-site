// ===============================
// Mobile Menu Toggle
// ===============================

// Find toggle button + menu
const btn = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

// Toggle dropdown
if (btn && menu) {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', (!expanded).toString());

    // Toggle .open on menu
    menu.classList.toggle('open');
  });
}

// ===============================
// Footer Year
// ===============================
const y = document.getElementById('year');
if (y) {
  y.textContent = new Date().getFullYear();
}
