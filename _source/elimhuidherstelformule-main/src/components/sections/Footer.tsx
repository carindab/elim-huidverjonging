const Footer = () => (
  <footer className="bg-ink py-10 text-cream/70">
    <div className="container-wide flex flex-col items-center gap-5">
      <div className="flex w-full flex-col items-center gap-2 text-sm md:flex-row md:items-center md:justify-between">
        <p className="font-serif text-lg text-cream">Elim Instituut · Carinda Brand</p>
        <p className="opacity-90 md:text-right">© 2006-2026 Alle rechten voorbehouden.</p>
      </div>
      <div className="w-full max-w-xl border-t border-cream/15 pt-4 text-center md:text-left">
        <p className="text-[11px] leading-snug text-cream/50 [text-wrap:balance]" lang="en">
          This site is not a part of the Facebook website or Facebook Inc. Additionally, this
          site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
