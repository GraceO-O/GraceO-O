const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Thank you! Your message has been submitted.");
        contactForm.reset();
    });
}


/* Reveal Animation */
const revealItems = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
}, {
    threshold: 0.3
});

revealItems.forEach(item => {
    revealObserver.observe(item);
});


/* Active Navbar Link */
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll("#navbarPortfolio .nav-link");
const learningLink = document.getElementById("learningLink");

function setActiveNavLink() {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 180;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {
        link.classList.remove("active");
    });

    navLinks.forEach(link => {
        const href = link.getAttribute("href");

        if (href === `#${current}`) {
            link.classList.add("active");
        }
    });

    if (
        current === "education" ||
        current === "technologies" ||
        current === "projects"
    ) {
        learningLink.classList.add("active");
    }
}

window.addEventListener("scroll", setActiveNavLink);
window.addEventListener("load", setActiveNavLink);