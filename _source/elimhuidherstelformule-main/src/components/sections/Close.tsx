import ReservationDialog from "@/components/ReservationDialog";

const faq = [
  {
    q: "Voor wie is deze behandeling geschikt?",
    a: "Voor vrouwen van 40+ die merken dat hun huid minder stevig, veerkrachtig of responsief is geworden en een aanpak zoeken die verder gaat dan het oppervlak. De huidscan bepaalt of de Collageen & Elastine Booster de juiste behandeling is voor jóuw huidconditie op dit moment.",
  },
  {
    q: "Hoe lang duurt de sessie?",
    a: "Reken op 45 tot 50 minuten voor de volledige Elim Huidherstel Formule, inclusief huidscan en behandeling.",
  },
  {
    q: "Is de behandeling geschikt voor gevoelige huid?",
    a: "Ja. De behandeling is niet-invasief en werkt op celniveau zonder de huid te belasten. Alle formules zijn gecertificeerd biologisch, zonder schadelijke stoffen. Volledig natuurlijk en veilig voor elk huidtype.",
  },
  {
    q: "Wat is het verschil met een gewone salonbehandeling?",
    a: "De meeste salonbehandelingen werken op verzorging en ontspanning. De Elim Huidherstel Formule werkt op de oorzaak. Niet wat zichtbaar is aan het oppervlak, maar wat er structureel speelt in de diepere huidlagen. De scan bepaalt wat dat is. De behandeling pakt het aan.",
  },
  {
    q: "Waar is het Elim Instituut gevestigd?",
    a: "Kerksingel 16, 2951 GE Alblasserdam. Tel. 078 69 11 11 3",
  },
];

const Close = () => (
  <section className="bg-gradient-soft pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div className="container-narrow text-center">
      <h2 className="mx-auto max-w-2xl text-left font-serif text-3xl md:text-5xl">
        Als de redenering klopt, <span className="accent-italic">beslis je.</span>
      </h2>

      <div className="mx-auto mt-8 max-w-2xl space-y-5 text-left text-lg leading-relaxed text-foreground/85">
        <p>Zonder twijfel. Zonder dat je overtuigd hoeft te worden.</p>
        <p>
          De Elim Huidherstel Formule geeft geen belofte. Ze geeft antwoorden. Jóuw antwoorden. Op basis van wat jouw
          huid werkelijk laat zien. Objectief, meetbaar, persoonlijk.
        </p>
        <p>
          Vrouwen die met de Elim Huidherstel Formule beginnen komen terug. Niet omdat ze moeten. Maar omdat ze voor het
          eerst precies weten wat werkt in hun huid en waarom het werkt.
        </p>
        <p>10 plekken per maand beschikbaar. Elke sessie krijgt de volledige tijd en aandacht die een persoonlijke aanpak vereist.</p>
      </div>

      <div className="mx-auto mt-16 max-w-2xl rounded-3xl bg-white p-10 text-left text-foreground shadow-elegant md:p-14">
        <p className="text-sm uppercase tracking-[0.25em] text-amber-500">De Investering</p>
        <p className="mt-6 font-serif text-2xl leading-snug">Elim Huidherstel Formule</p>
        <p className="mt-2 text-foreground/75 leading-relaxed">Inclusief de Collageen &amp; Elastine Booster Behandeling.</p>
        <p className="mt-6 text-sm font-semibold text-ink/85">Wat je krijgt in één sessie:</p>
        <ul className="mt-3 space-y-2.5 text-foreground/85">
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
            <span>Geavanceerde huidscan ter waarde van €99.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
            <span>Collageen &amp; Elastine Booster Behandeling ter waarde van €169,50.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
            <span>Jouw persoonlijke Huidformule op basis van de scanresultaten.</span>
          </li>
          <li className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" aria-hidden />
            <span>De Herstellingscode™ als bonus.</span>
          </li>
        </ul>

        <div className="my-10 h-px w-full bg-border" />

        <p className="text-sm uppercase tracking-widest text-foreground/60">Kennismaking:</p>
        <p className="mt-3 font-serif text-6xl md:text-7xl text-ink">€149</p>

        <div className="mt-8 space-y-4 text-foreground/80 leading-relaxed">
          <p className="standout-line">
            Dit is het instaptarief voor de vrouw die klaar is om serieus te investeren in een aanpak die begint met weten.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3">
          <ReservationDialog className="w-full">Reserveer jouw plek →</ReservationDialog>
          <p className="text-center text-sm text-foreground/60">10 plekken per maand beschikbaar.</p>
        </div>
      </div>

      <div className="mx-auto mt-16 max-w-2xl text-left">
        <h3 className="mb-6 text-center font-serif text-2xl text-ink md:text-3xl">Veelgestelde vragen</h3>
        <div className="space-y-2">
          {faq.map(({ q, a }) => (
            <details
              key={q}
              className="group overflow-hidden rounded-xl border border-border/80 bg-white/70 shadow-soft"
            >
              <summary className="cursor-pointer list-none px-4 py-3.5 font-semibold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                {q}
              </summary>
              <p className="border-t border-border/50 bg-blush/30 px-4 py-3.5 text-[0.98rem] leading-relaxed text-foreground/85">
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Close;
