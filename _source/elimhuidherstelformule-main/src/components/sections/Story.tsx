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
        <span className="pill-tag">Wie ben ik</span>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl">
          Wie is <span className="accent-italic">Carinda Brand?</span>
        </h2>
        <div className="mt-6 space-y-5 text-foreground/85 leading-relaxed">
          <p>
            Ik ben Carinda Brand, huidspecialiste met meer dan 22 jaar ervaring in natuurlijke huidverbetering bij het
            Elim Instituut.
          </p>
          <p>
            Mijn aanpak begint altijd met meten. Want als je weet wat er werkelijk speelt in de diepere lagen van jouw
            huid, hoef je niet te gokken. Dan weet je wat werkt. En waarom het werkt.
          </p>
          <p>
            Niet op basis van wat toevallig trending is. Niet op basis van wat een vriendin aanraadt. Op basis van wat
            jóuw huid, op dit moment, structureel nodig heeft.
          </p>
          <p>
            Ik werk met vrouwen van 40+ die begrijpen dat huidveroudering een biologisch proces is met een mechanisme.
            En dat een mechanisme kan worden gemeten, begrepen en beïnvloed.
          </p>
          <p className="standout-line text-xl">
            Sommige vrouwen komen al vijf jaar bij mij. Als we hun foto&apos;s van toen en nu naast elkaar leggen zien
            we altijd hetzelfde: ze zien er jonger uit dan toen ze begonnen. Niet als bijwerking. Als resultaat van
            celverjonging die plaatsvindt op de laag waar huidveroudering werkelijk begint.
          </p>
          <p>Dat is waar ik op bouw. Voor elke vrouw die door mijn deur komt.</p>
        </div>
      </div>
    </div>
  </section>
);

export default Story;
