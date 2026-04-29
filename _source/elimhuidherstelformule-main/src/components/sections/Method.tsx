import scanImg from "@/assets/huidscan-1.webp";
import microImg from "@/assets/behandeling-2.png";
import collagenImg from "@/assets/huidformule-3.webp";

const Step = ({
  number,
  title,
  intro,
  image,
  imageRight,
  children,
}: {
  number: string;
  title: string;
  intro: string;
  image: string;
  imageRight?: boolean;
  children: React.ReactNode;
}) => (
  <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
    <div className={imageRight ? "lg:order-2" : ""}>
      <img
        src={image}
        alt={title}
        loading="lazy"
        width={1024}
        height={1024}
        className="w-full rounded-2xl object-cover shadow-elegant"
      />
    </div>
    <div>
      <span className="font-serif text-6xl text-amber-400">{number}</span>
      <h3 className="mt-2 font-serif text-3xl md:text-4xl">{title}</h3>
      <p className="standout-line mt-4 text-xl">{intro}</p>
      <div className="mt-5 space-y-4 text-foreground/80 leading-relaxed">
        {children}
      </div>
    </div>
  </div>
);

const Method = () => (
  <section className="bg-cream-deep pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div className="container-wide">
      <div className="container-narrow text-center px-0">
        <span className="pill-tag">De Methode</span>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl">
          De Elim Huidherstel Formule.{" "}
          <span className="accent-italic">Hoe het werkt.</span>
        </h2>
        <p className="lead mt-6">
          Dit is geen standaard behandeling. Dit is een systeem dat begint waar
          andere behandelingen ophouden, bij de vraag die niemand je ooit heeft
          gesteld: wat heeft jóuw huid, op dit moment, precies nodig?
        </p>
      </div>

      <div className="mt-14 space-y-16">
        <Step
          number="01"
          title="De Huidscan"
          intro="We meten wat anderen niet zien."
          image={scanImg}
        >
          <p>
            De meeste huidspecialisten kijken naar je huid en stellen een diagnose
            op basis van wat ze zien. Wij meten.
          </p>
          <p>
            Met geavanceerde huidanalysetechnologie en meer dan 22 jaar
            professionele expertise breng ik in kaart wat er werkelijk speelt in
            de diepere lagen van jouw huid, ver voorbij wat de spiegel of het
            blote oog kan zien.
          </p>
          <p>
            We meten vochtbalans, lipidenniveau, elasticiteit, pigmentatie en
            celactiviteit. Maar wat deze scan uniek maakt is wat ze daarna laat
            zien: welke werkzame stoffen jóuw huid op dit moment precies nodig
            heeft. Niet wat gemiddeld werkt. Maar wat jóuw huid nu mist om te
            herstellen en te stralen.
          </p>
          <p>
            Heeft jouw huid hydratatie nodig, of juist lipiden? Welke vitamines
            zijn op dit moment essentieel, vitamine A voor celvernieuwing,
            vitamine C voor glans en bescherming, vitamine E voor stevigheid en
            herstel? De scan geeft geen algemeen advies. Ze geeft een
            kristalheldere routekaart, specifiek voor jóu, specifiek voor nu.
          </p>
          <p>
            Het resultaat is jouw persoonlijke{" "}
            <span className="standout-line">
              Huidformule Profiel
            </span>
            , de exacte combinatie van werkzame stoffen die jouw huid nodig heeft
            om haar natuurlijke uitstraling, stevigheid en balans te herstellen.
            Van binnenuit, niet tijdelijk aan het oppervlak.
          </p>
          <p className="standout-line">
            Geen aannames. Geen giswerk. Alleen feitelijke inzichten. Jouw huid
            is zo uniek als een vingerafdruk. Wij behandelen haar ook zo.
          </p>
        </Step>

        <Step
          number="02"
          title="Collageen & Elastine Booster Behandeling"
          intro="Voor de vrouw die merkt dat haar huid zijn veerkracht verliest."
          image={microImg}
          imageRight
        >
          <p>
            Vanaf je dertigste verlies je elastine sneller dan je het aanmaakt. Niet als gevoel. Als meetbaar biologisch
            feit.
          </p>
          <p className="mt-2">
            Elastine is de structuur die bepaalt of je huid terugveert na beweging, druk, uitdrukking. Als de aanmaak
            vertraagt en de afbraak doorgaat, wordt de huid dunner, minder stevig, minder responsief. Geen crème lost dit
            op. Niet omdat ze de verkeerde ingrediënten bevatten. Maar omdat ze de laag waar elastine wordt geproduceerd
            structureel niet bereiken.
          </p>
          <p className="mt-2">Deze behandeling werkt anders. In twee stappen, op celniveau.</p>
          <div className="rounded-xl border border-line/80 bg-gradient-to-br from-white/95 to-cream/90 p-6 shadow-[0_12px_36px_-18px_hsl(40_18%_18%/0.14)]">
            <p className="mt-0 font-serif text-lg font-semibold text-ink">Stap 1 — De voorbereiding</p>
            <p className="mt-2">
              Het eerste masker exfolieert zorgvuldig en bereidt de huid voor op wat volgt. Niet om de huid te resetten.
              Om de opname van wat daarna komt te maximaliseren.
            </p>
            <p className="mt-4 font-serif text-lg font-semibold text-ink">Stap 2 — De elastine stimulatie</p>
            <p className="mt-2">
              Het tweede masker levert een mensidentieke vorm van tropoelastine direct aan de huidlaag waar elastine
              wordt geproduceerd. Tropoelastine is de voorvorm van elastine, de moleculaire bouwsteen die de huid
              herkent als eigen en integreert in het bestaande elastinenetwerk. Niet synthetisch. Niet dierlijk. Gewonnen
              uit een biologisch beschikbare plantaardige bron zodat de huid het opneemt in plaats van het aan het
              oppervlak te houden.
            </p>
            <p className="mt-2">
              Eenmaal opgenomen komt het in contact met het elastinemakend enzym in de huid. De aanvulling van de
              elastinevoorraad begint.
            </p>
            <p className="mt-4 font-serif text-lg font-semibold text-ink">De lichttherapie</p>
            <p className="mt-2">
              Na het eerste masker volgt onze gepatenteerde lichttherapie. Geen standaard roodlicht. Een speciaal
              gefilterd spectrum dat precies wordt opgenomen door de huidcellen waar het werk moet gebeuren.
            </p>
            <p className="mt-2">
              De lichttherapie werkt tijdens beide maskers. De warmte die het genereert opent de huidlagen en zorgt
              ervoor dat de werkzame stoffen in de maskers dieper doordringen dan zonder lichttherapie mogelijk zou zijn.
              Het licht en de maskers versterken elkaar. Samen bereiken ze de laag waar het verschil wordt gemaakt.
            </p>
            <p className="mt-2">Wat het doet is meetbaar:</p>
            <ul className="mt-2 list-disc space-y-1.5 pl-5 text-[0.98rem] leading-relaxed">
              <li>Een achtdubbele verhoging van de regionale bloedsomloop in de behandelde zone.</li>
              <li>Tot 60% verhoging van de partiële zuurstofdruk in het bloed.</li>
              <li>Stimulatie van nieuwe collageen-, elastine- en hyaluronzuurproductie.</li>
              <li>
                Extra ATP-cellulaire energie, de brandstof waarmee huidcellen hun eigen herstelproces uitvoeren.
              </li>
            </ul>
            <p className="mt-2">
              Geen UV. Geen huidbelastende straling. Alleen het spectrum dat de huid activeert om te doen wat ze
              biologisch is ingericht om te doen.
            </p>
            <p className="mt-2">
              Het resultaat is niet tijdelijk. De lichttherapie versterkt wat de maskers hebben gestart en houdt het
              herstelproces actief nadat je de behandelkamer verlaat.
            </p>
          </div>
          <div className="mt-8 max-w-2xl">
            <p className="font-serif text-[clamp(1.15rem,2.2vw,1.35rem)] font-semibold leading-snug text-ink">
              Wat één sessie doet
            </p>
            <p className="mt-3 leading-relaxed text-foreground/90">
              Al na één behandeling kan het elastineverlies van de afgelopen twee jaar worden hersteld. Niet als
              belofte. Als meetbaar resultaat, zichtbaar in de scan voor en na, voelbaar in de stevigheid en veerkracht
              van de huid, zichtbaar in de spiegel.
            </p>
            <p className="mt-3 leading-relaxed text-foreground/90">
              Dit is het resultaat van meer dan 20 jaar medisch onderzoek, gecombineerd met 22 jaar klinische
              praktijkervaring in wat de huid van vrouwen van 40+ structureel nodig heeft.
            </p>
            <ul className="mt-5 space-y-3 list-none p-0">
              <li className="rounded-r-[0.65rem] border-l-[3px] border-amber-400 bg-jade-tint/40 py-[0.85rem] pl-[1.15rem] pr-4 text-[1.05rem] font-semibold leading-snug text-ink">
                Geen injecties. Geen laser. Geen ingreep die je anders laat zien dan je bent.
              </li>
              <li className="rounded-r-[0.65rem] border-l-[3px] border-amber-400 bg-jade-tint/40 py-[0.85rem] pl-[1.15rem] pr-4 text-[1.05rem] font-semibold leading-snug text-ink">
                Een behandeling die werkt op de laag waar het verschil wordt gemaakt.
              </li>
            </ul>
            <p className="mt-7 rounded-[0.85rem] border border-border bg-amber-tint/30 px-5 py-[1.1rem] text-[0.98rem] leading-relaxed text-foreground/90">
              <span className="font-semibold text-ink">Voor wie:</span> vrouwen van 40+ die huidverslapping, verlies van
              stevigheid of een doffe, vermoeide huid ervaren en een behandeling zoeken die verder gaat dan het
              oppervlak.
            </p>
          </div>
        </Step>

        <Step
          number="03"
          title="Jouw Persoonlijke Huidformule"
          intro="Resultaten die blijven."
          image={collagenImg}
        >
          <p>
            De behandeling werkt in de levende lagen van jouw huid. Maar wat er
            daarna op jouw huid komt bepaalt of dat herstel blijft, of langzaam
            wordt tenietgedaan.
          </p>
          <p>
            Dit is wat de meeste vrouwen niet weten: de producten die je thuis
            gebruikt kunnen de resultaten van de beste behandeling ter wereld
            ondermijnen als ze de verkeerde ingrediënten bevatten. Niet omdat ze
            goedkoop zijn. Niet omdat jij iets fout doet. Maar omdat de meeste
            huidverzorging, ook de dure, is samengesteld om aan het oppervlak te
            werken, niet in de levende lagen waar jouw behandeling het verschil
            heeft gemaakt.
          </p>
          <p>
            Na jouw huidscan en behandeling ontvang je daarom jouw persoonlijke
            Huidformule, de exacte combinatie van werkzame stoffen die jouw scan
            heeft laten zien dat jouw huid nodig heeft, samengesteld in
            gecertificeerde organische formules die zijn ontwikkeld om precies
            die levende lagen te bereiken.
          </p>
          <p className="standout-line">
            Vrouwen die de volledige Elim Huidherstel Formule volgen, behandeling
            én thuisroutine, zien resultaten die blijven. Niet omdat ze geluk
            hadden. Maar omdat ze eindelijk weten wat werkt.
          </p>
        </Step>
      </div>
    </div>
  </section>
);

export default Method;
