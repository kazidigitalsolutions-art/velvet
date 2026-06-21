import React from "react";
import { Instagram } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1C1C1C] text-white/70 pt-16 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4 max-w-6xl">
        
        {/* Logo Center */}
        <div className="flex flex-col items-center mb-12">
          <span className="font-serif text-5xl text-primary leading-none mb-2">M</span>
          <span className="font-serif text-sm tracking-[0.2em] text-white uppercase mb-2">VELVET MOMENTUM SALON</span>
          <span className="font-cairo text-xs text-primary" dir="rtl">صالون الزخم المخملي</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12 text-center md:text-left">
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-white text-lg mb-6 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-3">
              <li><button onClick={() => scrollTo("home")} className="hover:text-primary transition-colors">Home</button></li>
              <li><button onClick={() => scrollTo("about")} className="hover:text-primary transition-colors">About Us</button></li>
              <li><button onClick={() => scrollTo("gallery")} className="hover:text-primary transition-colors">Gallery</button></li>
              <li><button onClick={() => scrollTo("reviews")} className="hover:text-primary transition-colors">Reviews</button></li>
            </ul>
          </div>

          {/* Services */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-white text-lg mb-6 uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-3 font-cairo text-sm text-right md:text-right w-full md:w-auto ml-auto" dir="rtl">
              <li><button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">تسريح الشعر</button></li>
              <li><button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">صباغة الشعر</button></li>
              <li><button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">العناية بالأظافر</button></li>
              <li><button onClick={() => scrollTo("services")} className="hover:text-primary transition-colors">باقات العرائس</button></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="font-serif text-white text-lg mb-6 uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li>+966 55 866 6543</li>
              <li className="font-cairo leading-relaxed mt-2 text-right md:text-left" dir="rtl">
                الفلاح، طريق أبو علي، مخطط عبد اللطيف جميل، الجبيل
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/10 gap-4">
          <div className="text-xs font-sans text-center md:text-left flex flex-col md:flex-row md:gap-2">
            <span>© 2024 Velvet Momentum Salon. All rights reserved.</span>
            <span className="hidden md:inline">|</span>
            <span className="font-cairo" dir="rtl">صالون الزخم المخملي - جميع الحقوق محفوظة</span>
          </div>
          
          <div className="flex gap-4">
            <a href="https://www.instagram.com/velvet.momentum.salon/" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-primary transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://wa.me/966558666543" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-[#25D366] transition-colors">
              <SiWhatsapp size={16} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
