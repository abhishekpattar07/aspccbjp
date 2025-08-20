// A S Patil College Website JavaScript

// Contact form submission
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      const firstName = document.getElementById("firstName").value
      const lastName = document.getElementById("lastName").value
      const email = document.getElementById("email").value
      const phone = document.getElementById("phone").value
      const message = document.getElementById("message").value

      const subject = `Contact Form Submission from ${firstName} ${lastName}`
      const body = `Name: ${firstName} ${lastName}%0D%0AEmail: ${email}%0D%0APhone: ${phone}%0D%0A%0D%0AMessage:%0D%0A${message}`

      window.location.href = `mailto:abhishekpattar075@gmail.com?subject=${subject}&body=${body}`
    })
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Add loading animation to sections
  const sections = document.querySelectorAll("section")
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("loading")
      }
    })
  }, observerOptions)

  sections.forEach((section) => {
    observer.observe(section)
  })

  // Mobile menu toggle (if needed in future)
  const mobileMenuButton = document.getElementById("mobile-menu-button")
  const mobileMenu = document.getElementById("mobile-menu")

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden")
    })
  }

  // Form validation
  const inputs = document.querySelectorAll("input, textarea")
  inputs.forEach((input) => {
    input.addEventListener("blur", function () {
      if (this.hasAttribute("required") && !this.value.trim()) {
        this.classList.add("border-red-500")
        this.classList.remove("border-gray-300")
      } else {
        this.classList.remove("border-red-500")
        this.classList.add("border-gray-300")
      }
    })
  })

  // Navbar scroll effect
  window.addEventListener("scroll", () => {
    const navbar = document.querySelector("nav")
    if (window.scrollY > 100) {
      navbar.classList.add("shadow-xl")
    } else {
      navbar.classList.remove("shadow-xl")
    }
  })
})

// Statistics counter animation
function animateCounters() {
  const counters = document.querySelectorAll(".text-3xl, .text-4xl")

  counters.forEach((counter) => {
    const target = Number.parseInt(counter.textContent)
    if (target && target > 0) {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          counter.textContent =
            target + (counter.textContent.includes("+") ? "+" : "") + (counter.textContent.includes("%") ? "%" : "")
          clearInterval(timer)
        } else {
          counter.textContent =
            Math.floor(current) +
            (counter.textContent.includes("+") ? "+" : "") +
            (counter.textContent.includes("%") ? "%" : "")
        }
      }, 50)
    }
  })
}

// Trigger counter animation when hero section is visible
const heroSection = document.getElementById("home")
if (heroSection) {
  const heroObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(animateCounters, 1000)
          heroObserver.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.5 },
  )

  heroObserver.observe(heroSection)
}
