/**
 * Zet je Calendly / Cal.com / andere boekingslink hier (optioneel).
 * Leeg laten = alle "Reserveer"-knoppen scrollen naar #reserveren op deze pagina.
 */
const BOOKING_URL = "";

/**
 * YouTube: https://www.youtube.com/embed/VIDEO_ID
 * Vimeo: https://player.vimeo.com/video/ID
 */
const VIDEO_EMBED_URL = "";

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
