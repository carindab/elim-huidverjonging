import { Star } from "lucide-react";
import tAnnelies from "@/assets/testimonial-annelies.webp";
import tMarleen from "@/assets/testimonial-marleen.webp";
import tInge from "@/assets/testimonial-inge.webp";

const reviews = [
  {
    img: tAnnelies,
    name: "Annelies",
    age: 52,
    title: "Mijn rosacea is na twee sessies 80% minder zichtbaar",
    quote:
      "Ik heb tien jaar lang elk merk geprobeerd dat 'kalmerend' beloofde. Niets hielp blijvend. Bij Carinda werd voor het eerst gemeten waar de roodheid vandaan kwam. Twee behandelingen verder durf ik 's ochtends de deur uit zonder foundation. Mijn man vroeg laatst of ik bij de plastisch chirurg was geweest — dat was het moment dat ik wist dat dit anders was.",
  },
  {
    img: tMarleen,
    name: "Marleen",
    age: 47,
    title: "Eindelijk een huid die strak aanvoelt — zonder botox",
    quote:
      "Ik was écht klaar om aan filler te beginnen. Mijn huid voelde slap, dunner, vermoeid. De Collageen Booster behandeling gaf me direct na één sessie een stevigheid die ik in jaren niet had gevoeld. Drie maanden later: foto's van toen en nu naast elkaar, niet te geloven. Ik bespaar nu honderden euro's per jaar omdat ik eindelijk weet welke producten wél werken voor mijn huid.",
  },
  {
    img: tInge,
    name: "Inge",
    age: 69,
    title: "Voor het eerst in 20 jaar geen pigmentvlekken meer",
    quote:
      "Ik heb mijn hele leven last gehad van pigment, laser, peelings, dure crèmes, alles geprobeerd. Carinda is de eerste die niet naar de plek keek, maar naar wat eronder zat. Na vier sessies en mijn persoonlijke Huidformule is mijn huid egaal. Mijn dochter vroeg laatst of ik glow drops had gebruikt. Dit is gewoon mijn huid nu.",
  },
];

const Testimonials = () => (
  <section className="bg-sand pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div className="container-wide">
      <div className="text-center">
        <span className="pill-tag">Echte resultaten · Echte vrouwen</span>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl">
          Wat vrouwen zeggen na{" "}
          <span className="accent-italic">Elim Huidherstel Behandeling.</span>
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

      <p className="standout-line mt-12 text-center text-xl">
        "Ik ken niemand die dat in Nederland doet." — RTL4
      </p>
    </div>
  </section>
);

export default Testimonials;
