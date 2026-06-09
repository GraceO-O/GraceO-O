const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Thank you! Your message has been submitted.");
  contactForm.reset();
});