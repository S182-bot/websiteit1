document.addEventListener("DOMContentLoaded", function () {
  // Smooth Scrolling
  const navLinks = document.querySelectorAll('nav a[href^="#"]');
  navLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: "smooth",
        });

        const nav = document.querySelector(".nav-links");
        const burger = document.querySelector(".burger");
        if (nav.classList.contains("active")) {
          nav.classList.remove("active");
          burger.classList.remove("active");
        }
      }
    });
  });

  // Mobile Menu Toggle
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  burger.addEventListener("click", function () {
    nav.classList.toggle("active");
    this.classList.toggle("active");
  });

  // Sticky Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  // Scroll Animations
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(
      ".section-title, .about-text, .gallery, .skill-item, .section-member, .adviser-image, .adviser-info"
    );
    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;
      if (elementPosition < screenPosition) {
        element.style.opacity = "1";
        element.style.transform = "translateY(0)";
      }
    });
  };

  document
    .querySelectorAll(
      ".section-title, .about-text, .gallery, .skill-item, .section-member, .adviser-image, .adviser-info"
    )
    .forEach((element) => {
      element.style.opacity = "0";
      element.style.transform = "translateY(20px)";
      element.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    });

  animateOnScroll();
  window.addEventListener("scroll", animateOnScroll);

  // Image Hover Effects
  document
    .querySelectorAll(".gallery img, .skill-item img, .section-member img")
    .forEach((img) => {
      img.addEventListener("mouseenter", function () {
        this.style.transition = "transform 0.3s ease";
        this.style.transform = "scale(1.05)";
      });
      img.addEventListener("mouseleave", function () {
        this.style.transform = "scale(1)";
      });
    });

  // Logo Animation
  const logo = document.querySelector(".circle-logo");
  if (logo) {
    logo.addEventListener("mouseenter", function () {
      this.style.animation = "pulse 0.5s ease";
      setTimeout(() => {
        this.style.animation = "";
      }, 500);
    });
  }

  // Modal for Gallery Images
  const imageModal = document.getElementById("modalOverlay");
  const modalImage = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close-btn");

  document.querySelectorAll(".clickable-image").forEach((img) => {
    img.addEventListener("click", function () {
      modalImage.src = this.src;
      imageModal.style.display = "flex";
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      imageModal.style.display = "none";
    });
  }

  window.addEventListener("click", function (event) {
    if (event.target == imageModal) {
      imageModal.style.display = "none";
    }
  });

  // Modal for Login Form
  const loginModal = document.getElementById("loginModal");
  const loginBtn = document.getElementById("loginBtn");
  const closeLogin = loginModal.querySelector(".close");

  loginBtn.addEventListener("click", function (e) {
    e.preventDefault();
    loginModal.style.display = "block";
  });

  closeLogin.addEventListener("click", function () {
    loginModal.style.display = "none";
  });

  window.addEventListener("click", function (e) {
    if (e.target == loginModal) {
      loginModal.style.display = "none";
    }
  });
});
