// ===== Mobile Navigation Toggle =====
const navToggle = document.getElementById("navToggle")
const navMenu = document.getElementById("navMenu")

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll(".nav-link")
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active")
    navMenu.classList.remove("active")
  })
})

// ===== Active Navigation Link on Scroll =====
const sections = document.querySelectorAll("section[id]")

function updateActiveLink() {
  const scrollY = window.pageYOffset

  sections.forEach((section) => {
    const sectionHeight = section.offsetHeight
    const sectionTop = section.offsetTop - 100
    const sectionId = section.getAttribute("id")

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add("active")
    } else {
      document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove("active")
    }
  })
}

window.addEventListener("scroll", updateActiveLink)

// ===== Smooth Scroll with Offset =====
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const targetId = this.getAttribute("href")

    if (targetId === "#" || targetId === "#home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    } else {
      const target = document.querySelector(targetId)
      if (target) {
        const offsetTop = target.offsetTop - 80
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        })
      }
    }
  })
})

// ===== Scroll Animations =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -100px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
    }
  })
}, observerOptions)

// Observe all cards and sections for scroll animations
const animateElements = document.querySelectorAll(".project-card, .skill-category, .contact-card, .highlight-item")
animateElements.forEach((el) => {
  el.style.opacity = "0"
  el.style.transform = "translateY(30px)"
  el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out"
  observer.observe(el)
})

// ===== Header Background on Scroll =====
const header = document.getElementById("header")

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.backgroundColor = "rgba(10, 10, 10, 0.95)"
    header.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)"
  } else {
    header.style.backgroundColor = "rgba(10, 10, 10, 0.9)"
    header.style.boxShadow = "none"
  }
})

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", () => {
  updateActiveLink()
  console.log("Portfolio loaded successfully!")
})
