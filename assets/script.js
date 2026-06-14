const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your message has been submitted.");
  contactForm.reset();
});


const revealItems = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        } else {
            entry.target.classList.remove('active');
        }

    });
}, {
    threshold: 0.3
});

revealItems.forEach(item => {
    revealObserver.observe(item);
});



