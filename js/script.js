// Minimal JS to handle the contact form submission and some small enhancements
document.addEventListener("DOMContentLoaded", function () {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      status.classList.remove("sr-only");
      status.textContent = "Sending...";

      // Simple client-side validation (HTML5 does most of it)
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();

      if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        return;
      }

      // Simulate sending
      setTimeout(() => {
        status.textContent = "Message sent! Thank you.";
        form.reset();
      }, 800);
    });
  }
});
