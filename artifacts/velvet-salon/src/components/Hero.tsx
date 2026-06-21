import React from "react";
import { motion } from "framer-motion";
import heroImg from "@assets/3_1782050503373.jpg";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImg} 
          alt="Velvet Momentum Salon Interior" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1C1C1C]/60 to-[#1C1C1C]/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-6"
        >
          <h1 className="flex flex-col gap-4 text-white">
            <span className="font-cairo text-4xl md:text-6xl lg:text-7xl font-bold" dir="rtl">
              حيث يلتقي الجمال بالفخامة
            </span>
            <span className="font-serif text-3xl md:text-5xl lg:text-6xl italic text-primary-foreground/90">
              Where Beauty Meets Luxury
            </span>
          </h1>

          <p className="flex flex-col gap-2 text-white/80 mt-6 max-w-2xl mx-auto">
            <span className="font-tajawal text-lg md:text-xl" dir="rtl">
              تجربة خدمات تجميلية فاخرة مصممة خصيصاً لأسلوبك
            </span>
            <span className="font-sans text-sm md:text-base tracking-wide">
              Experience premium beauty services tailored for your unique style
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <button 
              onClick={() => scrollTo("contact")}
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-all hover:scale-105 flex flex-col items-center w-full sm:w-auto"
            >
              <span className="font-cairo font-bold" dir="rtl">احجزي موعدك</span>
              <span className="font-sans text-xs uppercase tracking-wider mt-1">Book Appointment</span>
            </button>
            
            <button 
              onClick={() => scrollTo("contact")}
              className="border border-primary text-white px-8 py-3 rounded-md font-medium hover:bg-primary/20 transition-all hover:scale-105 flex flex-col items-center w-full sm:w-auto"
            >
              <span className="font-cairo font-bold" dir="rtl">تواصلي معنا</span>
              <span className="font-sans text-xs uppercase tracking-wider mt-1">Contact Us</span>
            </button>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/70"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}
