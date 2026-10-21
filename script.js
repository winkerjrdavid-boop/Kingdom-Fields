// Replace this with the email address where you want to receive inquiries.
const CONTACT_EMAIL = "YOUR_EMAIL_HERE";

const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".primary-nav");

menuToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
  });
});

document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.getElementById("form-status");
  if (!CONTACT_EMAIL || CONTACT_EMAIL === "YOUR_EMAIL_HERE" || !CONTACT_EMAIL.includes("@")) {
    status.textContent = "Before this form can prepare an email, replace YOUR_EMAIL_HERE in script.js with your real email address.";
    return;
  }

  const form = new FormData(event.currentTarget);
  const subject = `Website inquiry: ${form.get("topic")}`;
  const body = [
    `Name: ${form.get("name")}`,
    `Email: ${form.get("email")}`,
    `Interest: ${form.get("topic")}`,
    "",
    "Message:",
    form.get("message")
  ].join("\n");

  status.textContent = "Your email app should open with your message ready to send.";
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});
