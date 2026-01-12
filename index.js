// Navigation scroll effect
const navbar = document.getElementById("navbar")

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled")
    } else {
        navbar.classList.remove("scrolled")
    }
})

// --- NIEUW: Spotlight effect met muisbeweging ---
document.addEventListener('mousemove', (e) => {
    // Werkt de CSS variabelen --mouse-x en --mouse-y bij
    document.documentElement.style.setProperty('--mouse-x', `${e.clientX}px`);
    document.documentElement.style.setProperty('--mouse-y', `${e.clientY}px`);
});
// --- EINDE NIEUW ---


// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const target = document.querySelector(this.getAttribute("href"))
        if (target) {
            const offsetTop = target.offsetTop - 64 // 64px for navbar height
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth",
            })
        }
    })
})

// Add fade-in animation on scroll
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

// Observe skill cards
document.querySelectorAll(".skill-card").forEach((card) => {
    card.style.opacity = "0"
    card.style.transform = "translateY(20px)"
    card.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(card)
})
