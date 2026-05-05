import { Check, Gift } from "lucide-react";

const includes = [
  "Een huidscan op celniveau die laat zien wat er werkelijk speelt in de diepere lagen van jouw huid. Objectief, meetbaar, persoonlijk.",
  "De Collageen & Elastine Booster Behandeling op basis van jouw scanresultaten. Twee maskers die tropoelastine direct leveren aan de laag waar elastine wordt geproduceerd, versterkt door gepatenteerde lichttherapie die het herstelproces op celniveau activeert.",
  "Jouw persoonlijke Huidformule, samengesteld op basis van wat jouw scan heeft laten zien dat jouw huid structureel nodig heeft om het herstel van de behandeling te behouden.",
  "Helder advies over wat de volgende stap is voor jouw huid. Zonder protocol. Zonder verkooppraatjes.",
];

const Offer = () => (
  <section id="offer" className="bg-gradient-soft pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div className="container-narrow">
      <div className="text-center">
        <span className="pill-tag">Het Aanbod</span>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl">Elim Huidherstel Formule</h2>
        <p className="mx-auto mt-3 max-w-xl font-serif text-lg italic accent-italic md:text-xl">
          Inclusief de Collageen &amp; Elastine Booster Behandeling.
        </p>
      </div>

      <div className="mt-12 rounded-3xl bg-card p-8 md:p-12 shadow-elegant ring-1 ring-border">
        <p className="font-serif text-xl text-amber-500">In één sessie krijg je:</p>
        <ul className="mt-6 space-y-4">
          {includes.map((t) => (
            <li key={t} className="flex gap-3">
              <Check className="mt-1 h-5 w-5 shrink-0 text-amber-500" />
              <span className="text-foreground/85 leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl bg-accent p-6">
          <div className="flex items-start gap-3">
            <Gift className="mt-1 h-6 w-6 shrink-0 text-amber-500" />
            <div>
              <p className="font-serif text-2xl text-ink">De Herstellingscode™</p>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                Een behandeling die de levende lagen activeert kan worden ondermijnd door wat er daarna op de huid komt,
                en door wat er daarna in het lichaam gebeurt.
              </p>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                Bepaalde voedingspatronen remmen collageensynthese op celniveau. Bepaalde leefstijlpatronen vertragen het
                herstelproces dat de behandeling in gang heeft gezet. Dit is geen bijzaak. Het is het verschil tussen
                resultaten die drie weken duren en resultaten die blijven.
              </p>
              <p className="mt-3 text-foreground/80 leading-relaxed">
                De Herstellingscode™ documenteert precies welke aanpassingen het herstel versterken en welke het remmen.
                Geen algemeenheden. Geen brede adviezen over gezonde leefstijl. Alleen wat structureel verschil maakt
                voor de huid die net op celniveau is geactiveerd.
              </p>
              <p className="mt-3 font-serif italic accent-italic">
                Onderdeel van de Elim Huidherstel Formule. Niet als toevoeging. Als afsluiting van het systeem.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Offer;
