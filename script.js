const STUDIO_EMAIL = "saharrraad2000@gmail.com";

// Mobile menu
const toggle = document.querySelector(".nav-toggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close" : "Menu";
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.textContent = "Menu";
  }
});

// Header turns solid once past the hero
const header = document.querySelector(".site-header");
const onScroll = () => header.classList.toggle("is-solid", window.scrollY > window.innerHeight * 0.85);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Lightbox for collection looks
const box = document.getElementById("lightbox");
const boxImg = box.querySelector("img");
const boxCap = box.querySelector("figcaption");
document.querySelectorAll(".look-open").forEach((btn) => {
  btn.addEventListener("click", () => {
    boxImg.src = btn.dataset.full;
    boxImg.alt = btn.dataset.caption;
    boxCap.textContent = btn.dataset.caption;
    box.showModal();
  });
});
box.querySelector(".lightbox-close").addEventListener("click", () => box.close());
box.addEventListener("click", (e) => { if (e.target === box) box.close(); });

// Appointment form: no backend yet, so open the visitor's mail app pre-filled.
const form = document.getElementById("appt-form");
const status = form.querySelector(".form-status");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let firstBad = null;
  form.querySelectorAll("[required]").forEach((el) => {
    const bad = !el.value.trim() || (el.type === "email" && !el.checkValidity());
    el.setAttribute("aria-invalid", String(bad));
    if (bad && !firstBad) firstBad = el;
  });
  if (firstBad) {
    status.textContent = "Please fill in your name, a valid email and a short message.";
    firstBad.focus();
    return;
  }
  const d = Object.fromEntries(new FormData(form));
  const subject = `Appointment request: ${d.type} (${d.name})`;
  const body = [
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Enquiry: ${d.type}`,
    d.date ? `Event date: ${d.date}` : null,
    "",
    d.message,
  ].filter((l) => l !== null).join("\n");
  window.location.href = `mailto:${STUDIO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  status.textContent = "Opening your email app. If nothing happens, write to " + STUDIO_EMAIL + ".";
});

document.getElementById("year").textContent = new Date().getFullYear();


// Collection films play only while on screen
const lazyVideos = document.querySelectorAll("video[data-autoplay]");
if ("IntersectionObserver" in window) {
  const vio = new IntersectionObserver((entries) => {
    entries.forEach(({ target, isIntersecting }) => {
      if (isIntersecting) { target.preload = "auto"; target.play().catch(() => {}); } else { target.pause(); }
    });
  }, { threshold: 0.25 });
  lazyVideos.forEach((v) => vio.observe(v));
} else {
  lazyVideos.forEach((v) => { v.autoplay = true; });
}
