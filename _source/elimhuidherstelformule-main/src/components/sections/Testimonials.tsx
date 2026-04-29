import { Star } from "lucide-react";
import tAnnelies from "@/assets/testimonial-annelies.webp";
import tMarleen from "@/assets/testimonial-marleen.webp";
import tInge from "@/assets/testimonial-inge.webp";

const reviews = [
  {
    img: tAnnelies,
    name: "Annelies",
    age: 52,
    title: "Na twee sessies is mijn rosacea meetbaar verminderd",
    quote:
      "Ik had jarenlang producten gebruikt die beloofden te kalmeren. Bij Carinda werd voor het eerst gemeten waar de roodheid structureel vandaan kwam. Twee behandelingen verder ga ik 's ochtends de deur uit zonder foundation. Mijn man vroeg of ik bij de plastisch chirurg was geweest. Dat was het moment dat ik wist dat dit anders was.",
  },
  {
    img: tMarleen,
    name: "Marleen",
    age: 47,
    title: "Stevigheid die ik in jaren niet had gevoeld, zonder ingrepen",
    quote:
      "Mijn huid voelde dunner, minder veerkrachtig. Ik zocht een aanpak die verder ging dan oppervlakkige verzorging. Na één sessie merkte ik al een verschil in stevigheid. Drie maanden later zie ik het verschil duidelijk in de opvolgscans. Ik weet nu precies welke producten structureel werken voor mijn huid. Dat maakt het verschil.",
  },
  {
    img: tInge,
    name: "Inge",
    age: 69,
    title: "Voor het eerst egale huid, zonder laser of peeling",
    quote:
      "Ik had jarenlang behandelingen ondergaan voor pigmentvlekken. Laser, peelings, medische crèmes. Carinda was de eerste die niet naar de pigmentvlekken keek maar naar wat er structureel onder speelde. Na drie sessies en mijn persoonlijke Huidformule is mijn huid egaal. Mijn dochter vroeg of ik glow drops had gebruikt. Dit is gewoon mijn huid nu.",
  },
];

const Testimonials = () => (
  <section className="bg-sand pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div className="container-wide">
      <div className="text-center">
        <span className="pill-tag">Echte resultaten · Echte vrouwen</span>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl">
          Wat vrouwen zeggen na{" "}
          <span className="accent-italic">Elim Huidherstel Formule.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {reviews.map((r) => (
          <article
            key={r.name}
            className="flex flex-col overflow-hidden rounded-2xl bg-cream shadow-elegant ring-1 ring-amber/20 transition-all hover:-translate-y-1 hover:shadow-2xl"
          >
            <div className="relative aspect-[4/5] w-full overflow-hidden bg-sand">
              <img
                src={r.img}
                alt={`${r.name} — resultaat na Elim Huidherstel Behandeling`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="flex flex-1 flex-col p-7">
              <div className="flex items-center justify-between">
                <p className="font-serif text-lg text-ink">
                  {r.name}, {r.age}
                </p>
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
              </div>
              <h3 className="mt-4 font-serif text-xl leading-snug text-amber-500">
                "{r.title}"
              </h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{r.quote}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 space-y-2 text-center">
        <p className="standout-line text-xl">"Ik ken niemand die dat in Nederland doet."</p>
        <p className="font-body text-base font-medium text-foreground/80">
          RTL4 over de Elim Huidherstel Formule
        </p>
      </div>
    </div>
  </section>
);

export default Testimonials;
