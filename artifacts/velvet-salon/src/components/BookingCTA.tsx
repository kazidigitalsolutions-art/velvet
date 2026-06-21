import React from "react";
import { Phone, Calendar } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function BookingCTA() {
  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-20 bg-[#1C1C1C] overflow-hidden">
      {/* Decorative gradient strip */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-primary to-transparent opacity-80"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-4">
          Ready For Your Next Beauty Transformation?
        </h2>
        <h3 className="text-2xl md:text-3xl font-cairo text-primary font-bold mb-12" dir="rtl">
          هل أنت مستعدة لتحولك الجمالي؟
        </h3>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-3xl mx-auto">
          <a 
            href="tel:+966558666543" 
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border border-white/30 text-white px-6 py-4 rounded-md hover:bg-white/10 transition-colors"
          >
            <Phone size={20} />
            <div className="flex flex-col items-start">
              <span className="font-cairo font-bold leading-none" dir="rtl">اتصلي بنا</span>
              <span className="font-sans text-xs uppercase text-white/70">Call Now</span>
            </div>
          </a>

          <a 
            href="https://wa.me/966558666543" 
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#25D366] text-white px-8 py-4 rounded-md hover:bg-[#20bd5a] transition-colors"
          >
            <SiWhatsapp size={22} />
            <div className="flex flex-col items-start">
              <span className="font-cairo font-bold leading-none" dir="rtl">واتساب</span>
              <span className="font-sans text-xs uppercase text-white/80">WhatsApp</span>
            </div>
          </a>

          <button 
            onClick={scrollToContact}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-md hover:bg-primary/90 transition-colors"
          >
            <Calendar size={20} />
            <div className="flex flex-col items-start">
              <span className="font-cairo font-bold leading-none" dir="rtl">احجزي موعد</span>
              <span className="font-sans text-xs uppercase text-primary-foreground/80">Book Now</span>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
