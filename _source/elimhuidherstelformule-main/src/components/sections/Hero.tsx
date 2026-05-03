import { Sparkles } from "lucide-react";
import ReservationDialog from "@/components/ReservationDialog";
import heroBeforeAfter from "@/assets/hero-celverjonging.jpg";

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
            Elim Instituut · Klinische huidmeting op celniveau
          </span>

          <p className="mt-6 max-w-xl text-[clamp(0.8125rem,1.35vw,0.9375rem)] font-medium leading-snug text-foreground/70">
            Je hebt dit gevonden omdat je al langer voelde dat het probleem niet aan het oppervlak van je huid zit.
          </p>

          <h1 className="mt-4 max-w-[42rem] font-serif text-[clamp(1.85rem,4.3vw,3rem)] font-medium leading-[1.12] tracking-tight text-ink">
            Huidveroudering begint niet waar je producten werken.{" "}
            <span className="accent-italic">Ze begint in de laag daaronder.</span>
          </h1>

          <p className="mt-4 max-w-[40rem] text-[clamp(1.0625rem,2vw,1.1875rem)] leading-relaxed text-foreground/80">
            De Elim Huidherstel Formule meet wat er in de levende lagen werkelijk speelt en activeert celverjonging op de
            laag waar het ertoe doet.
          </p>

          <p className="mt-3 max-w-[40rem] text-[clamp(0.8125rem,1.45vw,0.9375rem)] leading-snug text-foreground/70">
            Huidscan op celniveau. Collageen &amp; Elastine Booster Behandeling. Persoonlijke Huidformule. Niet op
            aanname. Niet op protocol. Op meting.
          </p>

          <div className="mt-5 flex w-full max-w-xl flex-col items-stretch gap-4">
            <ReservationDialog className="w-full shrink-0 sm:w-auto">Reserveer Jouw Plek</ReservationDialog>
            <span className="block w-full text-sm leading-snug text-foreground/60 [font-feature-settings:normal] [font-variant-numeric:lining-nums]">
              Elim Instituut werkt met maximaal 10 cliënten per maand. Omdat elke behandeling volledig wordt afgestemd op
              wat de scan laat zien.
            </span>
          </div>
        </div>

        <div className="relative animate-fade-up [animation-delay:200ms]">
          <div className="absolute -inset-6 rounded-[2rem] bg-white/40 blur-2xl" aria-hidden />
          <div className="relative mx-auto aspect-square w-full max-h-[min(85vw,min(72vh,28rem))] max-w-lg overflow-hidden rounded-[1.5rem] bg-cream shadow-elegant lg:max-h-none lg:max-w-none">
            <img
              src={heroBeforeAfter}
              width={1024}
              height={1024}
              alt="Voor en na: huidherstel op celniveau met de Elim Huidherstel Formule."
              loading="eager"
              decoding="async"
              className="h-full w-full object-contain object-center lg:object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
