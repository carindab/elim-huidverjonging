const Feeling = () => (
  <section className="relative bg-blush pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div
      className="absolute -top-px left-0 right-0 h-16 bg-cream"
      style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}
      aria-hidden
    />

    <div className="container-narrow space-y-7 text-foreground/85">
      <div className="text-center">
        <span className="pill-tag">De realiteit</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
          Vanaf je vijfentwintigste verandert de{" "}
          <span className="accent-italic">biologie van je huid.</span>
        </h2>
      </div>

      <p className="lead pt-10">
        Collageenproductie vertraagt met ongeveer één procent per jaar. Elastine, de structuur die stevigheid en
        veerkracht bepaalt, wordt langzamer aangemaakt dan het wordt afgebroken. De celvernieuwingscyclus, die op je
        twintigste nog 28 dagen duurt, verlengt naar 45 tot 60 dagen op je vijftigste. Vochtbindende eiwitten nemen af.
        De levende lagen van de huid worden dunner.
      </p>

      <blockquote className="my-10 rounded-2xl border-l-4 border-amber-400 bg-white/70 p-8 text-lg font-medium text-jade-deep shadow-soft backdrop-blur-sm md:text-xl">
        Dit is geen verval. Het is een biologisch proces met een mechanisme. En een mechanisme kan worden begrepen,
        gemeten en beïnvloed.
      </blockquote>

      <p className="lead">
        Wat de meeste vrouwen op dit punt doen is producten toevoegen. Serums met retinol. Crèmes met peptiden.
        Behandelingen die beloven wat ze niet kunnen waarmaken. Niet omdat ze de verkeerde keuzes maken, maar omdat ze
        werken met informatie die nooit specifiek genoeg was om het verschil te maken.
      </p>

      <p className="standout-line my-10 rounded-2xl bg-white/70 p-8 text-center text-xl shadow-soft backdrop-blur-sm md:text-2xl">
        Wat jóuw huid op dit moment nodig heeft is niet wat gemiddeld werkt voor vrouwen van jouw leeftijd. Het is wat
        jóuw huid, met jóuw huidconditie, structureel mist om het herstelproces te activeren.
      </p>

      <p className="standout-line pt-4 text-center text-2xl md:text-3xl">
        Dat verschil is precies wat de Elim Huidherstel Formule meet.
      </p>
    </div>
  </section>
);

export default Feeling;
