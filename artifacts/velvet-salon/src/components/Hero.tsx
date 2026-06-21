import React from "react";
import { motion } from "framer-motion";
import g3 from "@assets/4_1782051224641.jpg";
import g5 from "@assets/6_1782051224642.jpg";
import g6 from "@assets/1_1782051224642.jpg";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative h-[100dvh] w-full flex items-center justify-center overflow-hidden"
    >
      {/* Multi-panel background */}
      <div className="absolute inset-0 z-0 flex">
        {/* Left panel */}
        <div className="w-1/3 h-full relative overflow-hidden">
          <img
            src={g6}
            alt="Salon work"
            className="w-full h-full object-cover object-top scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-transparent" />
        </div>

        {/* Center panel — slightly zoomed for drama */}
        <div className="w-1/3 h-full relative overflow-hidden">
          <img
            src={g3}
            alt="Salon bridal"
            className="w-full h-full object-cover object-top scale-105"
          />
          <div className="absolute inset-0 bg-[#1C1C1C]/50" />
        </div>

        {/* Right panel */}
        <div className="w-1/3 h-full relative overflow-hidden">
          <img
            src={g5}
            alt="Salon styling"
            className="w-full h-full object-cover object-top scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-[#1C1C1C]/80 via-[#1C1C1C]/40 to-transparent" />
        </div>
      </div>

      {/* Top fade for nav readability */}
      <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent z-10 pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background/80 to-transparent z-10 pointer-events-none" />

      {/* Decorative gold lines */}
      <div className="absolute left-[32%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-[32%] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/50 to-transparent z-10 pointer-events-none" />

      {/* Floating gold orbs */}
      <motion.div
        animate={{ y: [0, -18, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[12%] w-24 h-24 rounded-full bg-primary/10 blur-2xl z-10 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, 14, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/3 right-[10%] w-36 h-36 rounded-full bg-primary/10 blur-3xl z-10 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto flex flex-col items-center">
        {/* Top label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <div className="h-px w-12 bg-primary/70" />
          <span className="text-primary/90 text-xs tracking-[0.35em] uppercase font-sans font-medium">
            Luxury Beauty Salon · الجبيل
          </span>
          <div className="h-px w-12 bg-primary/70" />
        </motion.div>

        {/* Arabic headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.8 }}
          className="font-cairo text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4"
          dir="rtl"
        >
          حيث يلتقي الجمال بالفخامة
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 2.2 }}
          className="h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent my-5"
        />

        {/* English headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.0 }}
          className="font-serif text-2xl md:text-4xl lg:text-5xl italic text-white/85 mb-6"
        >
          Where Beauty Meets Luxury
        </motion.h2>

        {/* Subtext */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.4 }}
          className="flex flex-col gap-1 text-white/70 max-w-xl mx-auto mb-10"
        >
          <span className="font-tajawal text-lg" dir="rtl">
            تجربة خدمات تجميلية فاخرة مصممة خصيصاً لأسلوبك
          </span>
          <span className="font-sans text-sm tracking-wide">
            Experience premium beauty services tailored for your unique style
          </span>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 2.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("contact")}
            data-testid="hero-book-btn"
            className="bg-primary text-white px-10 py-3.5 rounded-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_rgba(212,175,55,0.4)] flex flex-col items-center min-w-[200px]"
          >
            <span className="font-cairo font-bold text-base" dir="rtl">احجزي موعدك</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-80 mt-0.5">Book Appointment</span>
          </button>

          <button
            onClick={() => scrollTo("contact")}
            data-testid="hero-contact-btn"
            className="border border-primary/70 text-white px-10 py-3.5 rounded-sm font-medium hover:bg-primary/15 hover:border-primary transition-all duration-300 hover:scale-105 flex flex-col items-center min-w-[200px] backdrop-blur-sm"
          >
            <span className="font-cairo font-bold text-base" dir="rtl">تواصلي معنا</span>
            <span className="font-sans text-[10px] uppercase tracking-[0.2em] opacity-80 mt-0.5">Contact Us</span>
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-px h-10 bg-gradient-to-b from-primary to-transparent mx-auto" />
        </motion.div>
      </motion.div>
    </section>
  );
}
