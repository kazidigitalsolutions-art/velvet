import React from "react";
import { motion } from "framer-motion";
import { Scissors, Paintbrush, Sparkles, Star, Gem, Heart, Sun, Eye, Crown, Waves } from "lucide-react";

const services = [
  { id: 1, icon: Scissors, en: "Hair Styling", ar: "تسريح الشعر", desc: "Expert cuts and styling for your perfect look." },
  { id: 2, icon: Paintbrush, en: "Hair Coloring", ar: "صباغة الشعر", desc: "Vibrant colors and seamless balayage techniques." },
  { id: 3, icon: Sparkles, en: "Hair Treatments", ar: "علاجات الشعر", desc: "Restorative treatments for healthy, shining hair." },
  { id: 4, icon: Star, en: "Makeup", ar: "ميكاب", desc: "Flawless makeup applications for any occasion." },
  { id: 5, icon: Gem, en: "Nail Care", ar: "العناية بالأظافر", desc: "Premium nail extensions, art, and maintenance." },
  { id: 6, icon: Heart, en: "Manicure & Pedicure", ar: "مانيكير وباديكير", desc: "Luxurious care for your hands and feet." },
  { id: 7, icon: Sun, en: "Facial Treatments", ar: "علاجات البشرة", desc: "Rejuvenating facials for a glowing complexion." },
  { id: 8, icon: Eye, en: "Eyebrow & Lash Services", ar: "الحواجب والرموش", desc: "Precision shaping and volume enhancements." },
  { id: 9, icon: Crown, en: "Bridal Packages", ar: "باقات العرائس", desc: "Comprehensive beauty preparation for your big day." },
  { id: 10, icon: Waves, en: "Spa & Relaxation", ar: "سبا واسترخاء", desc: "Calming massages and ultimate relaxation." }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Services</h2>
            <h3 className="text-2xl md:text-3xl font-cairo text-primary font-bold" dir="rtl">خدماتنا</h3>
            <div className="h-[2px] w-24 bg-primary mx-auto mt-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="group bg-background rounded-2xl p-8 border border-border hover:border-primary/50 shadow-sm hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 flex flex-col items-center text-center relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="w-16 h-16 rounded-full bg-secondary flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              
              <h4 className="font-cairo text-xl font-bold mb-1 text-foreground" dir="rtl">{service.ar}</h4>
              <h5 className="font-serif text-lg mb-4 text-muted-foreground italic">{service.en}</h5>
              
              <p className="font-sans text-sm text-muted-foreground/80 leading-relaxed mt-auto">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
