const WhyNotReacting = () => (
  <section className="relative bg-gradient-sage pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div
      className="absolute -top-px left-0 right-0 h-16 bg-blush"
      style={{ clipPath: "ellipse(75% 100% at 50% 0%)" }}
      aria-hidden
    />

    <div className="container-narrow">
      <div className="text-center">
        <span className="pill-tag">Het echte probleem</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
          De industrie is niet gebouwd rond{" "}
          <span className="accent-italic">jouw biologie.</span>
        </h2>
      </div>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          De huidverzorgingsindustrie is niet gebouwd rond jouw biologie. Ze is gebouwd rond herhaalverkoop. Eén
          product. Eén belofte. Eén symptoom. Rimpels. Pigmentvlekken. Droge of reactieve huid. Elke categorie heeft
          zijn eigen oplossing, zijn eigen actief ingrediënt, zijn eigen marketingclaim.
        </p>

        <p className="standout-line my-10 rounded-2xl bg-white/70 p-8 text-center text-xl shadow-soft backdrop-blur-sm md:text-2xl">
          Wat ontbreekt is het systeem. De vraag die niemand stelt: wat heeft jóuw huid, in deze fase van haar
          biologische ontwikkeling, op celniveau nodig om haar eigen herstelproces te ondersteunen?
        </p>

        <p>
          Niet wat populair is. Niet wat goed fotografeert. Niet wat de meeste vrouwen van jouw leeftijd gebruiken. Wat
          jóuw huid nu specifiek mist.
        </p>
        <p>
          Een vrouw die research doet, die serieus investeert, die begrijpt dat kwaliteit een standaard is, vindt in
          deze industrie zelden de aanpak die haar intelligentie respecteert. Niet omdat ze de verkeerde keuzes maakt.
          Maar omdat de logische aanpak simpelweg niet wordt aangeboden.
        </p>
        <p>
          De Elim Huidherstel Formule begint waar de industrie ophoudt. Niet bij het symptoom. Bij de oorzaak. Met een
          meting op celniveau, specifiek voor jóuw huid op dit moment. Wat de scan laat zien bepaalt alles wat daarna
          komt, de behandeling, de formule, het plan.
        </p>

        <div className="my-10 rounded-2xl bg-amber-deep px-7 py-8 text-center font-body font-semibold text-ink shadow-soft md:px-8 md:py-9 md:text-xl md:leading-snug">
          <p>Geen aannames. Geen gemiddelden. Geen symptoombestrijding.</p>
          <p className="mt-3">Een systeem dat de oorzaak aanpakt. Niet het oppervlak.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyNotReacting;
