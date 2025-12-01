<script>
  // ----------- FIXED MOBILE MENU SYSTEM -----------
  const btn = document.querySelector(".menu-toggle");
  const menu = document.querySelector("header .menu"); // only header menu

  if (btn && menu) {
    // Ensure aria-expanded exists
    if (!btn.hasAttribute("aria-expanded")) {
      btn.setAttribute("aria-expanded", "false");
    }

    btn.addEventListener("click", () => {
      const isOpen = btn.getAttribute("aria-expanded") === "true";

      btn.setAttribute("aria-expanded", !isOpen);
      menu.classList.toggle("open");
    });
  }

  // ----------- FOOTER YEAR -----------
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----------- SCROLL ANIMATIONS -----------
  const animatedEls = document.querySelectorAll(
    ".fade-up, .slide-in-left, .slide-in-right, .scale-up"
  );

  function animateOnScroll() {
    animatedEls.forEach(el => {
      if (el.getBoundingClientRect().top < window.innerHeight - 120) {
        el.classList.add("visible");
      }
    });
  }

  window.addEventListener("scroll", animateOnScroll);
  window.addEventListener("load", animateOnScroll);

</script>
