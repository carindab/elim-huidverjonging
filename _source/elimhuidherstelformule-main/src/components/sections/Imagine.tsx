const Imagine = () => (
  <section className="relative bg-cream pt-[90px] pb-[44px] md:pt-[122px] md:pb-[60px]">
    <div
      className="absolute -top-px left-0 right-0 h-16 bg-gradient-sage"
      style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}
      aria-hidden
    />
    <div className="container-narrow">
      <div className="text-center">
        <span className="pill-tag">De aanpak</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
          De aanpak die <span className="accent-italic">hierop is gebouwd</span>
        </h2>
      </div>
      <div className="mt-16 space-y-7 text-lg leading-relaxed text-foreground/85">
        <p>
          Als het probleem zich op celniveau afspeelt, moet de oplossing daar beginnen. Niet bij het symptoom. Niet bij
          wat de spiegel laat zien. Bij een meting van wat er werkelijk speelt in de levende lagen van jóuw huid op dit
          moment.
        </p>
        <p>
          Wat de scan laat zien bepaalt alles wat daarna komt. Welke werkzame stoffen jouw huid mist. Welke laag het
          meest aandacht nodig heeft. Welke formule structureel verschil maakt en welke alleen aan het oppervlak werkt.
        </p>

        <p className="font-medium text-ink">
          De Elim Huidherstel Formule is gebouwd rond drie beslissingen die het verschil bepalen tussen huidverzorging die
          het oppervlak raakt en celverjonging die plaatsvindt op de laag waar elastine wordt aangemaakt.
        </p>

        <ul className="space-y-4 border-l-2 border-amber-400 pl-6">
          <li>
            De moleculaire grootte van de werkzame stoffen, gekozen om de huidbarrière te passeren in plaats van eraan te
            blijven hangen.
          </li>
          <li>
            De drager waarin ze worden geleverd, een biologisch beschikbare structuur die de huid herkent als eigen.
          </li>
          <li>
            De laag waarop ze werken, de dermis, waar het enzym dat elastine aanmaakt nog actief is en gestimuleerd kan
            worden.
          </li>
        </ul>

        <p className="standout-line text-center text-xl md:text-2xl">
          Dat is geen behandeling die belooft. Dat is een aanpak die meet, levert en activeert.
        </p>
      </div>
    </div>
  </section>
);

export default Imagine;
