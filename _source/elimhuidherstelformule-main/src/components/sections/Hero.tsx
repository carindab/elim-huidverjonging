import { Sparkles } from "lucide-react";
import ReservationDialog from "@/components/ReservationDialog";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero">
      <div
        className="pointer-events-none absolute inset-0 opacity-50 mix-blend-soft-light"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(98 31% 89% / 0.65), transparent 50%), radial-gradient(circle at 80% 80%, hsl(46 81% 88% / 0.5), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="container-wide relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center lg:gap-12">
        <div className="animate-fade-up max-w-2xl">
          <span className="pill-tag">
            <Sparkles className="h-4 w-4 text-amber-500" />
            Uniek in Nederland · 22+ jaar ervaring
          </span>

          <p className="mt-6 max-w-xl font-serif text-[clamp(1.2rem,2.4vw,1.55rem)] font-medium leading-snug tracking-tight text-muted-foreground">
            Huidveroudering begint niet aan het oppervlak. Het begint in de laag die de meeste behandelingen nooit bereiken.
          </p>

          <h1 className="mt-4 max-w-[42rem] font-serif text-[clamp(1.85rem,4.3vw,3rem)] font-medium leading-[1.12] tracking-tight text-ink">
            De Elim Huidherstel Formule meet wat er werkelijk speelt en activeert{" "}
            <span className="accent-italic">celverjonging op de laag waar het ertoe doet.</span>
          </h1>

          <p className="mt-4 text-lg leading-relaxed text-foreground/75">
            Huidscan op celniveau. Collageen &amp; Elastine Booster Behandeling. Persoonlijke Huidformule. Niet op
            aanname. Niet op protocol. Op meting.
          </p>

          <div className="mt-8 flex max-w-xl flex-col items-start gap-3">
            <ReservationDialog>Reserveer Jouw Plek</ReservationDialog>
            <span className="text-sm leading-snug text-foreground/60">
              Elim Instituut werkt met maximaal 10 cliënten per maand. Omdat elke behandeling volledig wordt afgestemd op
              wat de scan laat zien.
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-white/40 blur-2xl" aria-hidden />
          <div className="relative aspect-video w-full overflow-hidden rounded-[1.5rem] bg-ink shadow-elegant">
            <iframe
              src="https://adilo.bigcommand.com/watch/6GWRjnNU"
              title="Elim Huidherstel Behandeling — introductie video"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
