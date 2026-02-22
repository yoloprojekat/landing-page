document.addEventListener("DOMContentLoaded", () => {
  // --- DOM Elements ---
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
  const navItems = document.querySelectorAll(".nav-item");

  // --- State ---
  let isMenuOpen = false;
  let currentTheme = htmlEl.getAttribute("data-theme") || "dark";

  // --- Icons ---
  const iconSun =
    '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
  const iconMoon =
    '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';

  // --- Theme Logic ---
  function updateThemeIcon() {
    themeIcon.innerHTML = currentTheme === "dark" ? iconSun : iconMoon;
  }

  function toggleTheme() {
    currentTheme = currentTheme === "dark" ? "light" : "dark";
    htmlEl.setAttribute("data-theme", currentTheme);
    localStorage.setItem("theme", currentTheme);
    updateThemeIcon();
  }

  themeToggle.addEventListener("click", toggleTheme);
  updateThemeIcon(); // Init icon on load

  // --- Navigation Logic ---
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

  // Smooth Scroll routing
  logoBtn.addEventListener("click", () =>
    window.scrollTo({ top: 0, behavior: "smooth" }),
  );

  navItems.forEach((item) => {
    item.addEventListener("click", (e) => {
      const targetId = e.target.getAttribute("data-target");
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        window.scrollTo({ top: targetEl.offsetTop - 90, behavior: "smooth" });
      }
      if (window.innerWidth <= 1024) closeMenu();
    });
  });

  // --- Scroll Styling (Throttled) ---
  let ticking = false;
  window.addEventListener(
    "scroll",
    () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (window.scrollY > 20) {
            navbar.classList.add("scrolled");
          } else {
            navbar.classList.remove("scrolled");
          }
          ticking = false;
        });
        ticking = true;
      }
    },
    { passive: true },
  );

  // --- Intersection Observer for Animations ---
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target); // Memory efficiency: Stop tracking once revealed
        }
      });
    },
    { threshold: 0.15, rootMargin: "50px" },
  );

  // Select all elements designated for animation
  document
    .querySelectorAll(
      ".animate-fade-up, .animate-fade-left, .animate-fade-right",
    )
    .forEach((el) => {
      observer.observe(el);
    });
});
