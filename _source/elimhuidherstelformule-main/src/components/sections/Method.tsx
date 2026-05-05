import { useState, type ReactNode } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useBookingDialog } from "@/contexts/BookingDialogContext";

type Step = {
  id: number;
  number: string;
  title: string;
  subtitle: string;
  content: ReactNode;
};

const steps: Step[] = [
  {
    id: 1,
    number: "01",
    title: "De Huidscan",
    subtitle: "Wat anderen zien, meten wij.",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
        <p className="text-xl leading-relaxed">
          De meeste huidspecialisten kijken en stellen een diagnose. Ik meet op celniveau. Vochtbalans, lipidenniveau,
          elasticiteit, pigmentatie, celactiviteit in de diepere lagen. Niet wat het blote oog laat zien. Wat de spiegel
          niet kan tonen.
        </p>
        <p>
          Maar wat deze scan onderscheidt van elke andere huidanalyse is wat ze daarna laat zien. Welke werkzame stoffen
          jóuw huid op dit moment precies nodig heeft om haar eigen herstelproces te activeren.
        </p>
        <p>
          Heeft jouw huid hydratatie nodig, of juist lipiden? Welke vitamines zijn op dit moment structureel essentieel?
          Vitamine A voor celvernieuwing. Vitamine C voor bescherming en glans. Vitamine E voor stevigheid en herstel.
        </p>
        <p>
          Het resultaat is jouw persoonlijke Huidformule Profiel. De exacte combinatie van werkzame stoffen die jouw huid
          nodig heeft om haar natuurlijke stevigheid, veerkracht en balans te herstellen. Van binnenuit. Niet tijdelijk aan
          het oppervlak.
        </p>
        <p className="font-serif text-xl md:text-2xl text-amber-600 italic text-ink">Geen aannames. Geen gemiddelden. Alleen wat de meting laat zien.</p>
      </div>
    ),
  },
  {
    id: 2,
    number: "02",
    title: "Collageen & Elastine Booster Behandeling",
    subtitle: "De behandeling die werkt op de laag waar elastine wordt aangemaakt.",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
        <p className="text-xl leading-relaxed">
          Twee maskers. Het eerste exfolieert zorgvuldig en bereidt de huid voor om op te nemen wat daarna komt. Het
          tweede levert een mensidentieke vorm van tropoelastine direct aan de dermis, de laag waar het elastinemakend
          enzym nog actief is.
        </p>
        <p>
          Tropoelastine is de moleculaire bouwsteen die de huid herkent als eigen materiaal. Gewonnen uit een biologisch
          beschikbare plantaardige bron. Niet synthetisch. Niet dierlijk. De huid neemt het op in plaats van het aan het
          oppervlak te houden, en integreert het in het bestaande elastinenetwerk.
        </p>
        <p>
          De gepatenteerde lichttherapie versterkt het proces. Een gefilterd spectrum dat door de huidcellen wordt
          opgenomen en de aanmaak van nieuw collageen, elastine en hyaluronzuur op celniveau activeert. Geen UV. Geen
          huidbelastende straling.
        </p>

        <div className="space-y-4 border-l-2 border-amber-400 pl-6">
          <p className="font-sans text-sm font-semibold uppercase tracking-widest text-amber-600">Wat één sessie meetbaar doet</p>
          <ul className="space-y-4 list-none">
            {[
              "Een achtdubbele verhoging van de regionale bloedsomloop in de behandelde zone.",
              "Tot zestig procent verhoging van de partiële zuurstofdruk in het bloed.",
              "Stimulatie van nieuwe collageen, elastine en hyaluronzuurproductie.",
              "Extra ATP cellulaire energie, de brandstof waarmee huidcellen hun eigen herstelproces uitvoeren.",
            ].map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-1.5 font-serif text-amber-500">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <p>
          Al na één sessie kan het elastineverlies van de afgelopen twee jaar worden hersteld. Zichtbaar in de scan voor
          en na. Voelbaar in de stevigheid van de huid.
        </p>
        <p className="font-serif text-xl md:text-2xl text-amber-600 italic text-ink">
          Geen injecties. Geen laser. Geen ingreep die je anders laat zien dan je bent.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    number: "03",
    title: "Jouw Persoonlijke Huidformule",
    subtitle: "Resultaten die blijven, of langzaam worden tenietgedaan.",
    content: (
      <div className="space-y-6 text-lg leading-relaxed text-foreground/85">
        <p className="text-xl leading-relaxed">
          Wat er thuis op je huid komt bepaalt of het herstel van de behandeling vasthoudt. De meeste huidverzorging, ook
          de dure, is samengesteld om aan het oppervlak te werken. Niet in de levende lagen waar de behandeling het
          verschil heeft gemaakt.
        </p>
        <p>
          Na de scan ontvang je daarom jouw persoonlijke Huidformule. De exacte combinatie van werkzame stoffen die jouw
          scan heeft laten zien dat jouw huid structureel nodig heeft, samengesteld in gecertificeerde organische
          formules die zijn ontwikkeld om de levende lagen te bereiken.
        </p>
        <p className="font-serif text-xl md:text-2xl text-amber-600 italic text-ink">
          Vrouwen die de volledige Formule volgen, behandeling én thuisroutine, zien resultaten die blijven. Niet omdat
          ze geluk hadden. Omdat ze eindelijk weten wat werkt.
        </p>
      </div>
    ),
  },
];

const Method = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { open } = useBookingDialog();
  const step = steps[activeStep];

  return (
    <section id="methode" className="bg-gradient-soft pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px] scroll-mt-20">
      <div className="container-wide">
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-24">
          <span className="pill-tag">In drie stappen</span>
          <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">De methode</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-foreground/80 md:text-xl">
            De Elim Huidherstel Formule. Drie stappen die op elkaar bouwen.
          </p>
        </div>

        <div className="flex flex-col items-start gap-12 lg:flex-row lg:gap-16">
          <div className="hidden w-full space-y-3 lg:sticky lg:top-28 lg:block lg:w-[min(100%,380px)] lg:shrink-0">
            {steps.map((s, index) => (
              <button
                key={s.id}
                type="button"
                onClick={() => setActiveStep(index)}
                className={`flex w-full flex-col gap-1 rounded-2xl border px-5 py-5 text-left transition-all ${
                  activeStep === index
                    ? "border-amber-400/50 bg-cream shadow-elegant ring-1 ring-amber/20"
                    : "border-transparent bg-cream/40 hover:bg-cream/80"
                }`}
              >
                <span className="font-body text-xs font-semibold tracking-widest text-amber-600">{s.number}</span>
                <span className={`font-serif text-xl ${activeStep === index ? "text-ink" : "text-foreground/70"}`}>{s.title}</span>
                <span className="text-sm italic text-foreground/75">{s.subtitle}</span>
              </button>
            ))}
          </div>

          <div className="min-h-[480px] w-full flex-1">
            <div className="mb-8 flex justify-center gap-2 pb-2 lg:hidden">
              {steps.map((s, index) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  aria-current={activeStep === index ? "step" : undefined}
                  className={`min-w-[3rem] rounded-full border px-4 py-2 text-sm font-semibold transition-all ${
                    activeStep === index
                      ? "border-amber-500 bg-amber-500 text-white"
                      : "border-border bg-card text-foreground/80"
                  }`}
                >
                  {s.number}
                </button>
              ))}
            </div>

            <Card className="rounded-3xl border border-border/60 bg-card/80 p-8 shadow-elegant ring-1 ring-amber/10 backdrop-blur-sm md:p-12">
              <div key={step.id} className="animate-in fade-in duration-300">
                <div className="mb-8 border-b border-border/40 pb-8">
                  <span className="font-body text-sm font-semibold tracking-widest text-amber-600">{step.number}</span>
                  <h3 className="mt-3 font-serif text-2xl text-ink md:text-4xl">{step.title}</h3>
                  <p className="mt-4 font-serif text-xl italic text-foreground/80 md:text-2xl">{step.subtitle}</p>
                </div>
                {step.content}
              </div>
            </Card>

            <div className="mt-10 flex justify-center">
              <Button
                type="button"
                variant="cta"
                size="xl"
                className="rounded-full px-10"
                onClick={open}
              >
                Reserveer jouw plek
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;
