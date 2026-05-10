/**
 * Boeking: zet hier je definitieve URL (Cal.com, Typeform, …).
 * Leeg = "Reserveer"-knoppen openen de popup met het LeadConnector-formulier.
 */
const BOOKING_URL = "";

/** Zelfde formulier-ID als in React (`BookingDialogContext.tsx`). */
const FORM_ID = "x3PuzajO38FGDW2Guxet";

const FORM_IFRAME_ID = `inline-${FORM_ID}`;

/** Microderm-upgrade op bedankpagina */
const UPGRADE_FORM_ID = "Eu9aboyIAxFq1vE3oHLP";
const UPGRADE_IFRAME_ID = `inline-${UPGRADE_FORM_ID}`;

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

function ensureLeadConnectorIframe(iframe, formId, formName) {
  if (!iframe || iframe.getAttribute("src")) return;
  const layoutId = `inline-${formId}`;
  iframe.src = `https://api.leadconnectorhq.com/widget/form/${formId}`;
  iframe.setAttribute("data-layout", "{'id':'INLINE'}");
  iframe.setAttribute("data-trigger-type", "alwaysShow");
  iframe.setAttribute("data-trigger-value", "");
  iframe.setAttribute("data-activation-type", "alwaysActivated");
  iframe.setAttribute("data-activation-value", "");
  iframe.setAttribute("data-deactivation-type", "neverDeactivate");
  iframe.setAttribute("data-deactivation-value", "");
  iframe.setAttribute("data-form-name", formName);
  iframe.setAttribute("data-layout-iframe-id", layoutId);
  iframe.setAttribute("data-form-id", formId);
}

function ensureIframeSrc(iframe) {
  const id = iframe?.getAttribute("data-form-id") || FORM_ID;
  ensureLeadConnectorIframe(iframe, id, "Kennismakingsaanbieding afspraak 2026 FB");
}

function ensureUpgradeIframeSrc(iframe) {
  ensureLeadConnectorIframe(iframe, UPGRADE_FORM_ID, "Upgrade Microdermabrasion");
}

let bookingFocusReturn = null;
let upgradeFocusReturn = null;

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

function openUpgradeDialog() {
  const root = document.getElementById("upgrade-dialog");
  const iframe = document.getElementById(UPGRADE_IFRAME_ID);
  if (!root) return;

  loadFormEmbedScript();
  ensureUpgradeIframeSrc(iframe);

  root.classList.remove("booking-dialog--closed");
  root.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  const closeBtn = root.querySelector(".booking-dialog__close");
  const anchor = root.querySelector("#upgrade-form-anchor");
  const focusTarget = closeBtn || anchor || iframe;
  focusTarget?.focus?.({ preventScroll: true });
}

function closeUpgradeDialog() {
  const root = document.getElementById("upgrade-dialog");
  if (!root) return;
  root.classList.add("booking-dialog--closed");
  root.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  if (upgradeFocusReturn && typeof upgradeFocusReturn.focus === "function") {
    upgradeFocusReturn.focus({ preventScroll: true });
  }
  upgradeFocusReturn = null;
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

  document.querySelectorAll("[data-upgrade-open]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      upgradeFocusReturn = document.activeElement;
      openUpgradeDialog();
    });
  });

  document.querySelectorAll("[data-upgrade-close]").forEach((btn) => {
    btn.addEventListener("click", () => closeUpgradeDialog());
  });

  document.addEventListener("keydown", (e) => {
    if (e.key !== "Escape") return;
    const upgradeRoot = document.getElementById("upgrade-dialog");
    if (upgradeRoot && !upgradeRoot.classList.contains("booking-dialog--closed")) {
      closeUpgradeDialog();
      return;
    }
    const root = document.getElementById("booking-dialog");
    if (!root || root.classList.contains("booking-dialog--closed")) return;
    closeBookingDialog();
  });

  const formIframe = document.getElementById(FORM_IFRAME_ID);
  ensureIframeSrc(formIframe);

  const upgradeIframe = document.getElementById(UPGRADE_IFRAME_ID);
  if (upgradeIframe) {
    loadFormEmbedScript();
    ensureUpgradeIframeSrc(upgradeIframe);
  }

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
      toggle.setAttribute("aria-label", open ? "Menu sluiten" : "Menu openen");
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  initStickyCtaMobile();
})();

/**
 * Mobiele sticky-CTA: alleen tonen als de hero uit beeld is en het
 * reserveer-/prijsblok nog niet zichtbaar is. Niet tonen op tablet/desktop.
 */
function initStickyCtaMobile() {
  const cta = document.getElementById("sticky-cta-mobile");
  if (!cta) return;

  const heroSection = document.querySelector(".hero-section");
  const reserveSection = document.getElementById("reserveren");
  const footer = document.querySelector(".site-footer");

  if (!("IntersectionObserver" in window)) {
    cta.classList.add("is-visible");
    cta.setAttribute("aria-hidden", "false");
    return;
  }

  const isMobile = () => window.matchMedia("(max-width: 767px)").matches;

  let heroOut = false;
  let reserveOrFooterIn = false;

  const update = () => {
    const visible = isMobile() && heroOut && !reserveOrFooterIn;
    cta.classList.toggle("is-visible", visible);
    cta.setAttribute("aria-hidden", visible ? "false" : "true");
  };

  if (heroSection) {
    const heroObs = new IntersectionObserver(
      (entries) => {
        heroOut = !entries[0].isIntersecting;
        update();
      },
      { threshold: 0, rootMargin: "-20% 0px 0px 0px" }
    );
    heroObs.observe(heroSection);
  } else {
    heroOut = true;
  }

  const hideTargets = [reserveSection, footer].filter(Boolean);
  if (hideTargets.length) {
    const visibleSet = new Set();
    const hideObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visibleSet.add(entry.target);
          else visibleSet.delete(entry.target);
        });
        reserveOrFooterIn = visibleSet.size > 0;
        update();
      },
      { threshold: 0.08 }
    );
    hideTargets.forEach((el) => hideObs.observe(el));
  }

  window.addEventListener("resize", update, { passive: true });
}
