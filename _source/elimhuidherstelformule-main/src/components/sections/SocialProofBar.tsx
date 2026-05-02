import { Star, ShieldCheck, Award, Trophy } from "lucide-react";

const SocialProofBar = () => (
  <section className="relative bg-amber-deep py-4 text-ink md:py-5">
    <div className="container-wide grid grid-cols-2 gap-5 text-center md:grid-cols-4 md:gap-6">
      <div className="flex flex-col items-center gap-1">
        <Award className="h-7 w-7 shrink-0 md:h-7 md:w-7" strokeWidth={2} />
        <p className="font-serif text-lg font-semibold [font-feature-settings:normal] [font-variant-numeric:lining-nums] md:text-xl">
          22+ jaar
        </p>
        <p className="text-xs uppercase tracking-widest text-ink/85">Ervaring</p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Star className="h-7 w-7 shrink-0" strokeWidth={2} />
        <p className="font-serif text-lg font-semibold [font-feature-settings:normal] [font-variant-numeric:lining-nums] md:text-xl">
          40-60%
        </p>
        <p className="max-w-[12rem] text-xs leading-snug tracking-wide text-ink/85 normal-case md:max-w-[14rem]">
          Verbetering in elasticiteit per sessie
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <ShieldCheck className="h-7 w-7 shrink-0" strokeWidth={2} />
        <p className="font-serif text-lg font-semibold md:text-xl">Zonder botox</p>
        <p className="text-xs uppercase tracking-widest text-ink/85 [font-feature-settings:normal] [font-variant-numeric:lining-nums]">
          100% natuurlijk
        </p>
      </div>
      <div className="flex flex-col items-center gap-1">
        <Trophy className="h-7 w-7 shrink-0" strokeWidth={2} />
        <p className="whitespace-nowrap font-serif text-[0.92rem] font-semibold leading-tight md:text-[1.05rem] lg:text-xl">
          Award winning huidspecialist
        </p>
        <p className="text-xs tracking-wide text-ink/85 normal-case [font-feature-settings:normal] [font-variant-numeric:lining-nums]">
          Bekend van RTL4
        </p>
      </div>
    </div>
  </section>
);

export default SocialProofBar;
