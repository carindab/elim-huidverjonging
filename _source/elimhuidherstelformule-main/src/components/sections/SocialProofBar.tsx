import { Star, ShieldCheck, Award, Sparkles } from "lucide-react";

const SocialProofBar = () => (
  <section className="relative bg-sage-500 py-8 md:py-10">
    <div className="container-wide grid grid-cols-2 gap-6 text-center text-primary-foreground md:grid-cols-4">
      <div className="flex flex-col items-center gap-1">
        <Award className="h-6 w-6 text-amber" />
        <p className="font-serif text-lg md:text-xl">22+ jaar</p>
        <p className="text-xs uppercase tracking-widest opacity-80">Ervaring</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Star className="h-6 w-6 text-amber" />
        <p className="font-serif text-lg md:text-xl">7000+ vrouwen</p>
        <p className="text-xs uppercase tracking-widest opacity-80">Geholpen</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ShieldCheck className="h-6 w-6 text-amber" />
        <p className="font-serif text-lg md:text-xl">Zonder botox</p>
        <p className="text-xs uppercase tracking-widest opacity-80">100% natuurlijk</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Sparkles className="h-6 w-6 text-amber" />
        <p className="font-serif text-lg md:text-xl">Uniek in NL</p>
        <p className="text-xs uppercase tracking-widest opacity-80">Huidherstel Formule</p>
      </div>
    </div>
  </section>
);

export default SocialProofBar;
