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
    { nameEn: "Home", nameAr: "الرئيسية", id: "home" },
    { nameEn: "Services", nameAr: "خدماتنا", id: "services" },
    { nameEn: "Gallery", nameAr: "معرض أعمالنا", id: "gallery" },
    { nameEn: "Reviews", nameAr: "آراء عملائنا", id: "reviews" },
    { nameEn: "Contact", nameAr: "تواصل", id: "contact" },
  ];

  const linkClass = scrolled
    ? "text-foreground hover:text-primary"
    : "text-white/90 hover:text-primary drop-shadow-sm";

  const logoTextClass = scrolled ? "text-foreground" : "text-white/90 drop-shadow-sm";

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-primary/30 py-3 shadow-md"
          : "bg-gradient-to-b from-black/50 to-transparent py-5"
      }`}
      data-testid="navigation"
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Left Links (English) */}
        <div className="hidden md:flex gap-6 items-center flex-1">
          {navLinks.map((link) => (
            <button
              key={`en-${link.id}`}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-en-${link.id}`}
              className={`text-sm font-sans tracking-wide transition-colors duration-300 uppercase font-medium ${linkClass}`}
            >
              {link.nameEn}
            </button>
          ))}
        </div>

        {/* Logo */}
        <div
          className="flex flex-col items-center flex-shrink-0 cursor-pointer"
          onClick={() => scrollTo("home")}
          data-testid="nav-logo"
        >
          <span className="font-serif text-3xl md:text-4xl text-primary leading-none">M</span>
          <span className={`font-serif text-[10px] tracking-[0.2em] mt-1 transition-colors duration-300 ${logoTextClass}`}>
            VELVET MOMENTUM SALON
          </span>
          <span className={`font-cairo text-[10px] mt-0.5 transition-colors duration-300 ${logoTextClass}`} dir="rtl">
            صالون الزخم المخملي
          </span>
        </div>

        {/* Right Links (Arabic) */}
        <div className="hidden md:flex gap-6 items-center flex-1 justify-end" dir="rtl">
          {navLinks.map((link) => (
            <button
              key={`ar-${link.id}`}
              onClick={() => scrollTo(link.id)}
              data-testid={`nav-ar-${link.id}`}
              className={`text-sm font-tajawal font-medium transition-colors duration-300 ${linkClass}`}
            >
              {link.nameAr}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={`md:hidden transition-colors duration-300 hover:text-primary ${scrolled ? "text-foreground" : "text-white"}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          data-testid="nav-mobile-toggle"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-md border-b border-primary/20 shadow-lg md:hidden py-4 flex flex-col gap-2 px-6">
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
