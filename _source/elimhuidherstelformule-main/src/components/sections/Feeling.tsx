const Feeling = () => (
  <section className="relative bg-blush pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div
      className="absolute -top-px left-0 right-0 h-16 bg-cream"
      style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}
      aria-hidden
    />

    <div className="container-narrow space-y-6 text-foreground/85">
      <div className="text-center">
        <span className="pill-tag">De realiteit</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
          Vanaf je vijfentwintigste verandert de{" "}
          <span className="accent-italic">biologie van je huid.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-lg font-medium text-foreground/80">
          Vanaf de menopauze kantelt dat proces.
        </p>
      </div>

      <p className="lead pt-6">
        De daling van oestrogeen remt direct het enzym dat verantwoordelijk is voor de aanmaak van nieuw elastine.
      </p>

      <p className="text-lg font-semibold text-ink">Niet vertraagt. Remt.</p>

      <p className="lead">
        Elastine is niet hetzelfde als collageen. Collageen geeft stevigheid. Elastine bepaalt of je huid terugveert. Na
        een uitdrukking. Na een nacht slaap. Na de dag.
      </p>

      <p className="lead">
        Elastine wordt aangemaakt in de dermis, de levende laag onder de epidermis. Naarmate oestrogeen daalt, wordt het
        enzym dat deze aanmaak aanstuurt minder actief. De afbraak gaat door. De aanmaak vertraagt. Het saldo wordt elke
        maand kleiner.
      </p>

      <p className="lead">Dit is wat de spiegel uiteindelijk laat zien. Op dat moment is het structurele verlies al jaren onderweg.</p>

      <p className="lead">
        De meeste huidverzorging bereikt deze laag niet. Ze werkt op de epidermis, de buitenste laag van dode en
        stervende cellen, die geen capaciteit heeft om elastine te produceren. De meeste actieve stoffen zijn moleculair
        te groot om de huidbarrière te passeren. Ze blijven aan het oppervlak.
      </p>

      <p className="standout-line my-10 rounded-2xl border-l-4 border-amber-400 bg-white/70 p-8 text-lg font-medium text-ink shadow-soft backdrop-blur-sm md:text-xl">
        Dit is geen tekortkoming in jouw routine. Het is een feit over hoe de huid is gebouwd.
      </p>
    </div>
  </section>
);

export default Feeling;
