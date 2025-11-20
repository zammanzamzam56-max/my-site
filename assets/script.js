document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.menu');
  if (btn && nav){
    btn.addEventListener('click', () => {
      const open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});
const y = document.getElementById('year');

if (y) { y.textContent = new Date().getFullYear(); }
const btn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.menu');   // <-- use .menu, not .nav
if (btn && nav){
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('open');
  });
}
<script>
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
  menu.classList.toggle('show');
});
</script>
</body>
</html>



