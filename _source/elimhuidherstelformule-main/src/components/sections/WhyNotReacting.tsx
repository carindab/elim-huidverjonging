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
          De industrie is niet gebouwd rond jouw biologie.{" "}
          <span className="accent-italic">Ze is gebouwd rond herhaalverkoop.</span>
        </h2>
      </div>

      <div className="mt-12 space-y-6 text-lg leading-relaxed text-foreground/85">
        <p>
          Eén product. Eén belofte. Eén symptoom. Rimpels krijgen hun eigen serum. Pigmentvlekken hun eigen behandeling.
          Een doffe huid haar eigen ritueel. Elke categorie heeft een actief ingrediënt en een marketingclaim. Wat ontbreekt
          is het systeem dat ze met elkaar verbindt.
        </p>

        <p className="standout-line my-10 rounded-2xl bg-white/70 p-8 text-center text-xl shadow-soft backdrop-blur-sm md:text-2xl">
          De vraag die niemand stelt: wat heeft jóuw huid, in deze fase van haar biologische ontwikkeling, op celniveau
          nodig om haar eigen herstelproces te ondersteunen?
        </p>

        <p>
          Niet wat populair is. Niet wat trending is. Niet wat gemiddeld werkt voor vrouwen van jouw leeftijd. Wat jóuw
          huid nu specifiek mist.
        </p>

        <p>
          Die vraag wordt zelden gesteld omdat ze commercieel onhandig is. Producten die zijn samengesteld op basis van
          een individuele meting kunnen niet in oplages worden verkocht. Behandelingen die afhangen van wat de scan laat
          zien kunnen niet in een protocol worden gegoten. Een aanpak die begint met meten kost meer tijd, meer expertise
          en meer aandacht per cliënt dan een aanpak die begint met aannames.
        </p>

        <p>Het is geen toeval dat de industrie deze richting niet inslaat. Het is een commerciële beslissing.</p>

        <p>
          De Elim Huidherstel Formule begint waar die beslissing eindigt. Niet bij het symptoom. Bij de oorzaak. Met een
          meting op celniveau, specifiek voor jóuw huid op dit moment. Wat de scan laat zien bepaalt alles wat daarna
          komt: de behandeling, de formule, het plan.
        </p>

        <div className="my-10 rounded-2xl bg-amber-deep px-7 py-8 text-center font-body font-semibold text-ink shadow-soft md:px-8 md:py-9 md:text-xl md:leading-snug">
          <p>Geen aannames. Geen gemiddelden. Geen symptoombestrijding.</p>
        </div>
      </div>
    </div>
  </section>
);

export default WhyNotReacting;
