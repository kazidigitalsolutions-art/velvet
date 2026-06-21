import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navLinks = [
    { nameEn: "Home",     nameAr: "الرئيسية",      id: "home" },
    { nameEn: "Services", nameAr: "خدماتنا",        id: "services" },
    { nameEn: "Gallery",  nameAr: "معرض أعمالنا",   id: "gallery" },
    { nameEn: "Reviews",  nameAr: "آراء عملائنا",   id: "reviews" },
    { nameEn: "Contact",  nameAr: "تواصل",           id: "contact" },
  ];

  const linkClass = scrolled
    ? "text-foreground hover:text-primary"
    : "text-white/90 hover:text-primary drop-shadow-sm";

  const logoSubClass = scrolled
    ? "text-foreground"
    : "text-white/90 drop-shadow-sm";

  return (
    <nav
      data-testid="navigation"
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-primary/30 py-3 shadow-md"
          : "bg-gradient-to-b from-black/55 to-transparent py-5"
      }`}
    >
      {/* ── Desktop layout: 3-column grid ── */}
      <div className="hidden md:grid grid-cols-3 items-center px-8 max-w-screen-xl mx-auto">

        {/* Col 1 — English links (left) */}
        <div className="flex gap-6 items-center">
          {navLinks.map((link) => (
            <button
              key={`en-${link.id}`}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-en-${link.id}`}
              className={`text-xs font-sans tracking-widest uppercase font-medium transition-colors duration-300 ${linkClass}`}
            >
              {link.nameEn}
            </button>
          ))}
        </div>

        {/* Col 2 — Logo (center) */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollTo("home")}
          data-testid="nav-logo"
        >
          <span className="font-serif text-4xl text-primary leading-none">M</span>
          <span className={`font-serif text-[9px] tracking-[0.25em] mt-1 uppercase transition-colors duration-300 ${logoSubClass}`}>
            Velvet Momentum Salon
          </span>
          <span className={`font-cairo text-[9px] mt-0.5 transition-colors duration-300 ${logoSubClass}`} dir="rtl">
            صالون الزخم المخملي
          </span>
        </div>

        {/* Col 3 — Arabic links (right) */}
        <div className="flex gap-6 items-center justify-end" dir="rtl">
          {navLinks.map((link) => (
            <button
              key={`ar-${link.id}`}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-ar-${link.id}`}
              className={`text-xs font-tajawal font-medium transition-colors duration-300 ${linkClass}`}
            >
              {link.nameAr}
            </button>
          ))}
        </div>
      </div>

      {/* ── Mobile layout ── */}
      <div className="md:hidden relative flex items-center justify-center px-4">
        {/* Logo — absolutely centered */}
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => scrollTo("home")}
          data-testid="nav-logo-mobile"
        >
          <span className="font-serif text-3xl text-primary leading-none">M</span>
          <span className={`font-serif text-[8px] tracking-[0.2em] mt-0.5 uppercase transition-colors duration-300 ${logoSubClass}`}>
            Velvet Momentum Salon
          </span>
        </div>

        {/* Hamburger — pinned right */}
        <button
          className={`absolute right-4 transition-colors duration-300 hover:text-primary ${
            scrolled ? "text-foreground" : "text-white"
          }`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile dropdown ── */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg py-3 flex flex-col px-6">
          {navLinks.map((link) => (
            <button
              key={`mobile-${link.id}`}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-mobile-${link.id}`}
              className="flex justify-between items-center py-3 border-b border-muted/40 last:border-0"
            >
              <span className="font-sans text-sm uppercase tracking-wide text-foreground">{link.nameEn}</span>
              <span className="font-cairo font-semibold text-primary">{link.nameAr}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
