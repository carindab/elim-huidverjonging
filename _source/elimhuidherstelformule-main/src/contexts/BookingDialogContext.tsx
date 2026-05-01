import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useId,
  useState,
  type ReactNode,
} from "react";

const FORM_ID = "x3PuzajO38FGDW2Guxet";
const FORM_IFRAME_ID = `inline-${FORM_ID}`;

const loadFormEmbedScript = () => {
  if (typeof document === "undefined" || document.querySelector("script[data-elim-form-embed]")) return;

  const script = document.createElement("script");
  script.src = "https://link.msgsndr.com/js/form_embed.js";
  script.async = true;
  script.setAttribute("data-elim-form-embed", "true");
  document.body.appendChild(script);
};

type BookingDialogContextValue = {
  open: () => void;
  close: () => void;
};

const BookingDialogContext = createContext<BookingDialogContextValue | null>(null);

export const useBookingDialog = (): BookingDialogContextValue => {
  const ctx = useContext(BookingDialogContext);
  if (!ctx) {
    throw new Error("useBookingDialog moet binnen BookingDialogProvider worden gebruikt.");
  }
  return ctx;
};

export const BookingDialogProvider = ({ children }: { children: ReactNode }) => {
  const [open, setOpen] = useState(false);
  const reactId = useId().replace(/:/g, "");
  const titleId = `reservation-title-${reactId}`;
  const descriptionId = `reservation-description-${reactId}`;
  const iframeId = `${FORM_IFRAME_ID}-${reactId}`;

  const openDialog = useCallback(() => setOpen(true), []);
  const closeDialog = useCallback(() => setOpen(false), []);

  useEffect(() => {
    loadFormEmbedScript();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    if (open) document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <BookingDialogContext.Provider value={{ open: openDialog, close: closeDialog }}>
      {children}

      <div
        className={`fixed inset-0 z-[99999] flex items-center justify-center bg-ink/80 p-3 transition-opacity duration-200 md:p-6 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
        aria-hidden={!open}
        onClick={closeDialog}
      >
        <div
          role="dialog"
          aria-modal={open}
          aria-labelledby={titleId}
          aria-describedby={descriptionId}
          className={`relative max-h-[92vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-cream shadow-elegant transition-transform duration-200 ${
            open ? "scale-100" : "scale-95"
          }`}
          onClick={(event) => event.stopPropagation()}
        >
          <button
            type="button"
            aria-label="Sluit popup"
            className="absolute right-4 top-4 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full bg-blush text-ink transition-opacity hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-cream"
            onClick={closeDialog}
          >
            ×
          </button>

          <div className="p-6 pt-5 md:p-10 md:pt-7">
            <div className="text-left">
              <h2 id={titleId} className="font-serif text-2xl leading-tight text-ink md:text-3xl">
                Elim Huidherstel Formule
              </h2>
              <p id={descriptionId} className="mt-2 font-serif text-lg italic accent-italic">
                Huidscan op celniveau, Collageen &amp; Elastine Booster Behandeling en jouw persoonlijke Huidformule in
                één sessie.
              </p>
            </div>

            <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
              <p>
                Dit is voor de vrouw die wil weten. Niet wat gemiddeld werkt. Wat jóuw huid op dit moment precies nodig
                heeft.
              </p>

              <div>
                <p className="font-serif text-lg text-ink">Wat je krijgt in één sessie:</p>
                <ul className="mt-3 space-y-3">
                  <li className="flex gap-3">
                    <span className="text-amber-500">✦</span>
                    <span>Huidscan op celniveau ter waarde van €99.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-500">✦</span>
                    <span>Collageen &amp; Elastine Booster Behandeling ter waarde van €169,50.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-500">✦</span>
                    <span>Jouw persoonlijke Huidformule op basis van de scanresultaten.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-amber-500">✦</span>
                    <span>
                      De Herstellingscode™, welke voeding en gewoonten collageenaanmaak blokkeren, en hoe je ze vervangt
                      zodat je behandeling langer en dieper werkt.
                    </span>
                  </li>
                </ul>
              </div>

              <div className="rounded-2xl bg-blush p-5">
                <p className="text-sm uppercase tracking-[0.25em] text-amber-500">De Investering</p>
                <p className="mt-3 text-foreground/85 leading-relaxed">
                  Kennismaking met de Elim Huidherstel Formule, inclusief de Collageen &amp; Elastine Booster
                  Behandeling:
                  <span className="my-3 block font-serif text-3xl leading-none text-ink md:text-4xl">€149</span>
                  inclusief De Herstellingscode™.
                </p>
                <p className="mt-3 text-foreground/85">
                  Dit is het instaptarief voor de vrouw die klaar is om serieus te investeren in een aanpak die begint
                  met weten.
                </p>
                <p className="mt-3 text-sm text-foreground/70">10 plekken per maand beschikbaar.</p>
              </div>
            </div>

            <div
              id="booking-form-anchor"
              className="mt-3 h-[620px] overflow-hidden rounded-xl bg-card ring-1 ring-border scroll-mt-4 outline-none"
              tabIndex={-1}
            >
              <iframe
                src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
                className="h-full min-h-[620px] w-full border-0"
                id={iframeId}
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Kennismakingsaanbieding afspraak 2026 FB"
                data-layout-iframe-id={iframeId}
                data-form-id={FORM_ID}
                title="Kennismakingsaanbieding afspraak 2026 FB"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </BookingDialogContext.Provider>
  );
};
