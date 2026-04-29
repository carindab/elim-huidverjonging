import { Check } from "lucide-react";

const items = [
  "Je begrijpt dat je huid verandert. Niet als verrassing. Als biologie.",
  "Je hebt bewust geïnvesteerd in je huid. Goede producten. Serieuze behandelingen. Maar de resultaten blijven achter bij wat je verwacht had.",
  "Je wil geen botox. Geen fillers. Geen ingrepen die je anders laten zien dan je bent.",
  "Je zoekt een aanpak die meet wat er werkelijk speelt en op basis daarvan een plan geeft dat logisch is. Niet hoopvol.",
  "Je wil geen experiment meer. Je wil een systeem.",
  "In je werk neem je beslissingen op basis van informatie. Thuis bepaal jij de standaard. Op elk gebied weet je hoe je kwaliteit herkent. Je verwacht hetzelfde van je huidspecialiste.",
];

const ForYou = () => (
  <section className="relative bg-cream pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div className="container-narrow">
      <div className="text-center">
        <span className="pill-tag">Voor wie is dit</span>
        <h2 className="mt-6 font-serif text-3xl md:text-5xl lg:text-6xl leading-tight">
          Dit is voor jou <span className="accent-italic">als…</span>
        </h2>
      </div>

      <ul className="mt-12 space-y-5">
        {items.map((t, i) => (
          <li
            key={i}
            className="flex gap-5 rounded-2xl bg-white/70 p-6 shadow-soft backdrop-blur-sm transition-all hover:shadow-elegant hover:-translate-y-0.5"
          >
            <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber text-ink">
              <Check className="h-4 w-4" />
            </span>
            <p className="text-lg leading-relaxed text-foreground/85">{t}</p>
          </li>
        ))}
      </ul>

      <p className="standout-line mt-12 text-center text-2xl md:text-3xl">
        Als jij dit leest en denkt: dit ben ik, dan ben je op de juiste plek.
      </p>
    </div>
  </section>
);

export default ForYou;
