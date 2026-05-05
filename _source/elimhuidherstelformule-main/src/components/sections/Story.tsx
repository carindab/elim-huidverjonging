import portrait from "@/assets/carinda-portrait.webp";

const Story = () => (
  <section className="bg-cream-deep pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div className="container-wide grid gap-12 lg:grid-cols-5 lg:items-center">
      <div className="lg:col-span-2">
        <img
          src={portrait}
          alt="Carinda Brand, huidspecialiste Elim Instituut"
          loading="lazy"
          width={1024}
          height={1280}
          className="w-full rounded-3xl object-cover shadow-elegant"
        />
      </div>
      <div className="lg:col-span-3">
        <span className="pill-tag">Elim Instituut</span>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl">
          Wie is <span className="accent-italic">Carinda Brand?</span>
        </h2>
        <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            Ik ben Carinda Brand, huidspecialiste bij het Elim Instituut. Meer dan 22 jaar klinische ervaring in
            huidverbetering, en in dat alles één constante: ik begin altijd met meten.
          </p>
          <p>
            Niet omdat meten indrukwekkend klinkt. Omdat een diagnose op basis van wat je ziet fundamenteel anders is
            dan een conclusie op basis van wat er werkelijk speelt in de diepere lagen. Het eerste levert een
            behandelplan dat past bij het gemiddelde. Het tweede levert een aanpak die past bij jóuw huid, op dit moment,
            in deze biologische fase.
          </p>
          <p>
            Ik werk met vrouwen van 40+ die begrijpen dat huidveroudering een biologisch proces is met een mechanisme.
            Een mechanisme dat gemeten, begrepen en beïnvloed kan worden.
          </p>
          <p className="standout-line text-xl">
            De Elim Huidherstel Formule geeft geen belofte. Ze geeft antwoorden. Op basis van wat jouw huid werkelijk laat
            zien.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Story;
