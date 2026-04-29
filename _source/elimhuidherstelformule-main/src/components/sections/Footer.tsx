const Footer = () => (
  <footer className="bg-ink py-10 text-cream/70">
    <div className="container-wide flex flex-col items-center justify-between gap-3 text-sm md:flex-row">
      <p className="font-serif text-lg text-cream">Elim Instituut · Carinda Brand</p>
      <p>© {new Date().getFullYear()} Alle rechten voorbehouden.</p>
    </div>
  </footer>
);

export default Footer;
