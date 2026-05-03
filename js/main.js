/**
 * Boeking: zet hier je definitieve URL (Cal.com, Typeform, …).
 * Leeg = "Reserveer"-knoppen openen de popup met het LeadConnector-formulier.
 */
const BOOKING_URL = "";

/** Zelfde formulier-ID als in React (`BookingDialogContext.tsx`). */
const FORM_ID = "x3PuzajO38FGDW2Guxet";

const FORM_IFRAME_ID = `inline-${FORM_ID}`;

function loadFormEmbedScript() {
  if (document.querySelector("script[data-elim-form-embed]")) return;
  const script = document.createElement("script");
  script.src = "https://link.msgsndr.com/js/form_embed.js";
  script.async = true;
  script.setAttribute("data-elim-form-embed", "true");
  document.body.appendChild(script);
}

/** Eerste paint niet blokkeren: embed laadt na idle (popup doet bij open alsnog direct load). */
function scheduleFormEmbedWhenIdle() {
  const go = () => loadFormEmbedScript();
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(go, { timeout: 2800 });
  } else {
    window.addEventListener("load", () => setTimeout(go, 400), { once: true });
  }
}

function loadClarityWhenIdle() {
  if (document.querySelector("script[data-elim-clarity]")) return;
  const inject = () => {
    (function (c, l, a, r, i, t, y) {
      c[a] =
        c[a] ||
        function () {
          (c[a].q = c[a].q || []).push(arguments);
        };
      t = l.createElement(r);
      t.async = 1;
      t.src = "https://www.clarity.ms/tag/" + i;
      t.setAttribute("data-elim-clarity", "true");
      y = l.getElementsByTagName(r)[0];
      y.parentNode.insertBefore(t, y);
    })(window, document, "clarity", "script", "wk1r4m0vtf");
  };
  if (typeof requestIdleCallback === "function") {
    requestIdleCallback(inject, { timeout: 3200 });
  } else {
    window.addEventListener("load", () => setTimeout(inject, 800), { once: true });
  }
}

function ensureIframeSrc(iframe) {
  if (!iframe || iframe.getAttribute("src")) return;
  const id = iframe.getAttribute("data-form-id") || FORM_ID;
  iframe.src = `https://api.leadconnectorhq.com/widget/form/${id}`;
  iframe.setAttribute("data-layout", "{'id':'INLINE'}");
  iframe.setAttribute("data-trigger-type", "alwaysShow");
  iframe.setAttribute("data-trigger-value", "");
  iframe.setAttribute("data-activation-type", "alwaysActivated");
  iframe.setAttribute("data-activation-value", "");
  iframe.setAttribute("data-deactivation-type", "neverDeactivate");
  iframe.setAttribute("data-deactivation-value", "");
  iframe.setAttribute("data-form-name", "Kennismakingsaanbieding afspraak 2026 FB");
  iframe.setAttribute("data-layout-iframe-id", FORM_IFRAME_ID);
  iframe.setAttribute("data-form-id", id);
}

let bookingFocusReturn = null;

/** Vervangt verouderde popup-labels (o.a. bij gecachte oude HTML). */
function normalizeBookingDialogOfferCopy() {
  const root = document.getElementById("booking-dialog");
  if (!root) return;
  root.querySelectorAll(".booking-dialog__list li span").forEach((span) => {
    if (span.classList.contains("booking-dialog__bullet")) return;
    span.textContent = span.textContent
      .replace(/geavanceerde huidscan/gi, "Huidscan op celniveau")
      .replace(/^Bonus:\s*/i, "");
  });
}

function openBookingDialog() {
  const root = document.getElementById("booking-dialog");
  const iframe = document.getElementById(FORM_IFRAME_ID);
  if (!root) return;

  loadFormEmbedScript();
  ensureIframeSrc(iframe);

  normalizeBookingDialogOfferCopy();

  root.classList.remove("booking-dialog--closed");
  root.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeBtn = root.querySelector(".booking-dialog__close");
  closeBtn?.focus({ preventScroll: true });
}

function closeBookingDialog() {
  const root = document.getElementById("booking-dialog");
  if (!root) return;
  root.classList.add("booking-dialog--closed");
  root.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (bookingFocusReturn && typeof bookingFocusReturn.focus === "function") {
    bookingFocusReturn.focus({ preventScroll: true });
  }
  bookingFocusReturn = null;
}

(() => {
  scheduleFormEmbedWhenIdle();
  loadClarityWhenIdle();

  const bookingUrl = BOOKING_URL.trim();
  document.querySelectorAll("[data-booking-cta]").forEach((el) => {
    if (bookingUrl) {
      el.setAttribute("href", bookingUrl);
      if (bookingUrl.startsWith("http")) {
        el.setAttribute("rel", "noopener noreferrer");
        el.setAttribute("target", "_blank");
      }
    } else {
      el.setAttribute("href", "#reserveren");
      el.addEventListener("click", (e) => {
        e.preventDefault();
        bookingFocusReturn = document.activeElement;
        openBookingDialog();
      });
    }
  });

  document.querySelectorAll("[data-booking-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeBookingDialog());
  });

  document.addEventListener("keydown", (e) => {
    const root = document.getElementById("booking-dialog");
    if (!root || root.classList.contains("booking-dialog--closed")) return;
    if (e.key === "Escape") closeBookingDialog();
  });

  const formIframe = document.getElementById(FORM_IFRAME_ID);
  ensureIframeSrc(formIframe);

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
