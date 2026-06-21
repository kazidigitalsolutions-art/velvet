import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md border-b border-primary/30 py-3 shadow-sm" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Left Links (English) */}
        <div className="hidden md:flex gap-6 items-center flex-1">
          {navLinks.map((link) => (
            <button
              key={`en-${link.id}`}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-sans tracking-wide hover:text-primary transition-colors uppercase"
            >
              {link.nameEn}
            </button>
          ))}
        </div>

        {/* Logo */}
        <div className="flex flex-col items-center flex-shrink-0 cursor-pointer" onClick={() => scrollTo("home")}>
          <span className="font-serif text-3xl md:text-4xl text-primary leading-none">M</span>
          <span className="font-serif text-xs tracking-[0.2em] mt-1 text-foreground">VELVET MOMENTUM SALON</span>
          <span className="font-cairo text-[10px] text-foreground mt-1" dir="rtl">صالون الزخم المخملي</span>
        </div>

        {/* Right Links (Arabic) */}
        <div className="hidden md:flex gap-6 items-center flex-1 justify-end" dir="rtl">
          {navLinks.map((link) => (
            <button
              key={`ar-${link.id}`}
              onClick={() => scrollTo(link.id)}
              className="text-sm font-tajawal font-medium hover:text-primary transition-colors"
            >
              {link.nameAr}
            </button>
          ))}
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-background border-b border-primary/20 shadow-lg md:hidden py-4 flex flex-col gap-4 px-6">
          {navLinks.map((link) => (
            <button
              key={`mobile-${link.id}`}
              onClick={() => scrollTo(link.id)}
              className="flex justify-between items-center py-2 border-b border-muted/50 last:border-0"
            >
              <span className="font-sans text-sm uppercase tracking-wide">{link.nameEn}</span>
              <span className="font-cairo font-semibold text-primary">{link.nameAr}</span>
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}
