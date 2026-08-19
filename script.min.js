document.addEventListener("DOMContentLoaded", () => {
  const htmlEl = document.documentElement;
  const bodyEl = document.body;
  const navbar = document.getElementById("navbar");
  const navLinks = document.getElementById("main-nav");
  const mobileToggle = document.getElementById("mobile-toggle");
  const hamburger = document.getElementById("hamburger");
  const menuOverlay = document.getElementById("menu-overlay");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  const logoBtn = document.getElementById("logo-btn");

  let isMenuOpen = false;
  let currentTheme = htmlEl.getAttribute("data-theme") || "dark";

  const iconSun =
    '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  const iconMoon =
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

  function updateThemeIcon() {
    themeIcon.innerHTML = currentTheme === "dark" ? iconSun : iconMoon;
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", currentTheme);
    try {
      localStorage.setItem("theme", currentTheme);
    } catch (e) {}
    updateThemeIcon();
  }

  themeToggle.addEventListener("click", toggleTheme);
  updateThemeIcon();

  function openMenu() {
    isMenuOpen = true;
    navLinks.classList.add("open");
    hamburger.classList.add("active");
    menuOverlay.removeAttribute("hidden");
    mobileToggle.setAttribute("aria-expanded", "true");
    bodyEl.style.overflow = "hidden";
  }

  function closeMenu() {
    isMenuOpen = false;
    navLinks.classList.remove("open");
    hamburger.classList.remove("active");
    menuOverlay.setAttribute("hidden", "true");
    mobileToggle.setAttribute("aria-expanded", "false");
    bodyEl.style.overflow = "";
  }

  mobileToggle.addEventListener("click", () =>
    isMenuOpen ? closeMenu() : openMenu(),
  );
  menuOverlay.addEventListener("click", closeMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isMenuOpen) closeMenu();
  });

  logoBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  navLinks.addEventListener("click", (e) => {
    const navItem = e.target.closest(".nav-item");
    if (!navItem) return;

    const targetId = navItem.getAttribute("data-target");
    const targetEl = document.getElementById(targetId);

    if (targetEl) {
      const targetPosition =
        targetEl.getBoundingClientRect().top + window.scrollY - 90;
      window.scrollTo({ top: targetPosition, behavior: "smooth" });
    }

    if (window.innerWidth <= 1024) closeMenu();
  });

  navbar.classList.toggle("scrolled", window.scrollY > 20);

  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          navbar.classList.toggle("scrolled", window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );

  const animated = document.querySelectorAll(
    ".animate-fade-up, .animate-fade-left, .animate-fade-right",
  );

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    animated.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0, rootMargin: "80px 0px" },
  );

  animated.forEach((el) => {
    if (el.getBoundingClientRect().top < window.innerHeight) {
      el.classList.add("is-visible");
    } else {
      observer.observe(el);
    }
  });
});
