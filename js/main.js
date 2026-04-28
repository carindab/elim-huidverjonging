/**
 * Boeking: zet hier je definitieve URL (Cal.com, Typeform, …).
 * Leeg = knoppen blijven naar #reserveren op deze pagina scrollen.
 */
const BOOKING_URL = "";

/**
 * Optioneel: andere video-URL (YouTube embed, andere Adilo-url, …).
 * Leeg = gebruikt de src uit index.html op de hero-iframe.
 */
const HERO_VIDEO_URL = "";

(() => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const bookingTarget = BOOKING_URL.trim() || "#reserveren";
  document.querySelectorAll("[data-booking-cta]").forEach((el) => {
    el.setAttribute("href", bookingTarget);
    if (bookingTarget.startsWith("http")) {
      el.setAttribute("rel", "noopener noreferrer");
      el.setAttribute("target", "_blank");
    }
  });

  const v = HERO_VIDEO_URL.trim();
  const heroIframe = document.getElementById("hero-video-iframe");
  if (v && heroIframe) heroIframe.src = v;

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
    toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
  });

  nav?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      toggle?.setAttribute("aria-expanded", "false");
    });
  });
})();
