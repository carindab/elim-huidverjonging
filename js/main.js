/**
 * Boeking: zet hier je definitieve URL (Cal.com, Typeform, …).
 * Leeg = knoppen blijven naar #reserveren op deze pagina scrollen.
 */
const BOOKING_URL = "";

/**
 * Zelfde videospeler-URL als op de oorspronkelijke landingspagina (Adilo).
 * Vervang door YouTube/Vimeo embed-URL als je wilt.
 */
const VIDEO_EMBED_URL = "https://adilo.bigcommand.com/watch/6GWRjnNU";

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

  const shell = document.getElementById("intro-video");
  const placeholder = document.getElementById("video-placeholder");
  const embed = VIDEO_EMBED_URL.trim();
  if (embed && shell) {
    placeholder?.setAttribute("hidden", "");
    const iframe = document.createElement("iframe");
    iframe.title = "Introductievideo Elim Huidherstel Behandeling";
    iframe.loading = "lazy";
    iframe.allow =
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.src = embed;
    shell.appendChild(iframe);
  }

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
