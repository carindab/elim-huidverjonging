import { Star } from "lucide-react";
import tAnnelies from "@/assets/testimonial-annelies.webp";
import tMarleen from "@/assets/testimonial-marleen.webp";
import tInge from "@/assets/testimonial-inge.webp";

const reviews = [
  {
    img: tAnnelies,
    name: "Annelies",
    age: 52,
    title: "Twee sessies, en de roodheid was structureel teruggebracht.",
    quote:
      "Ik had jarenlang producten gebruikt die beloofden te kalmeren. Bij Carinda werd voor het eerst gemeten waar de roodheid structureel vandaan kwam. De scan liet zien dat het niet aan het oppervlak zat. Twee behandelingen verder laat de opvolgscan een meetbare afname zien op precies die laag. 's Ochtends ga ik de deur uit zonder foundation. Dat had ik in tien jaar niet gedaan.",
  },
  {
    img: tMarleen,
    name: "Marleen",
    age: 47,
    title: "Stevigheid die ik in jaren niet had gevoeld, zonder ingrepen.",
    quote:
      "Mijn huid voelde dunner, minder veerkrachtig. Ik zocht een aanpak die verder ging dan oppervlakkige verzorging. Na één sessie merkte ik al een verschil in stevigheid. Drie maanden later zie ik het verschil duidelijk in de opvolgscans. De elasticiteitswaarden zijn meetbaar gestegen. Ik weet nu precies welke producten structureel werken voor mijn huid. Dat maakt het verschil.",
  },
  {
    img: tInge,
    name: "Inge",
    age: 69,
    title: "Voor het eerst egale huid, op basis van wat onder het oppervlak speelde.",
    quote:
      "Ik had jarenlang behandelingen ondergaan voor pigmentvlekken. Laser, peelings, medische crèmes. Carinda was de eerste die niet naar de pigmentvlekken keek maar naar wat er structureel onder speelde. De scan liet zien wat geen enkele eerdere behandeling had gemeten. Na drie sessies en mijn persoonlijke Huidformule is mijn huid egaal. Niet bedekt. Hersteld op de laag waar het pigmentprobleem ontstond.",
  },
];

const Testimonials = () => (
  <section className="bg-sand pt-[90px] pb-[60px] md:pt-[122px] md:pb-[92px]">
    <div className="container-wide">
      <div className="mx-auto max-w-3xl text-center">
        <span className="pill-tag">Langdurige opvolging</span>
        <h2 className="mt-5 font-serif text-3xl md:text-5xl">Wat de scans na vijf jaar laten zien</h2>
        <div className="mt-6 space-y-4 text-left text-foreground/85 leading-relaxed md:text-center">
          <p>
            In mijn praktijk komen vrouwen al vijf jaar of langer terug. Hun scanresultaten worden vastgelegd in hun
            dossier.
          </p>
          <p>
            Wat ik zie is een patroon. De elasticiteitswaarden van vrouwen die de Formule jaren volgen, liggen na vijf
            jaar boven het niveau waarop ze begonnen. De structurele afbraak die normaal in deze leeftijdsfase doorloopt,
            wordt gestopt en omgekeerd.
          </p>
          <p>
            In foto&apos;s van toen en nu is dat zichtbaar. Vrouwen die naar hun foto van vijf jaar geleden kijken zien
            wat de scans laten zien. De huid veroudert niet zoals de biologie voorspelt. Niet omdat de tijd stilstaat.
            Omdat de aanmaak van elastine actief gehouden wordt in een tempo dat de afbraak compenseert.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h3 className="font-serif text-2xl md:text-4xl text-balance">
          Wat vrouwen na de Elim Huidherstel Formule <span className="accent-italic">meten en zien</span>
        </h3>
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
              <h3 className="mt-4 font-serif text-xl leading-snug text-amber-500">&quot;{r.title}&quot;</h3>
              <p className="mt-3 text-foreground/80 leading-relaxed">{r.quote}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-12 space-y-2 text-center">
        <p className="standout-line text-xl">&quot;Ik ken niemand die dat in Nederland doet.&quot;</p>
        <p className="font-body text-base font-medium text-foreground/80">
          RTL4 over de Elim Huidherstel Formule
        </p>
      </div>
    </div>
  </section>
);

export default Testimonials;
