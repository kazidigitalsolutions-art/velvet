import React from "react";
import { motion } from "framer-motion";
import { Star, Users, Award, Heart } from "lucide-react";
import aboutImg from "@assets/3_1782050503373.jpg";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="about" className="py-24 bg-background relative">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
        >
          {/* Left: Image */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative aspect-[4/5] rounded-tl-[100px] rounded-br-[100px] overflow-hidden border border-primary/20 p-2">
              <div className="w-full h-full rounded-tl-[92px] rounded-br-[92px] overflow-hidden relative">
                <img 
                  src={aboutImg} 
                  alt="Velvet Momentum Salon Experience" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-secondary rounded-full -z-10 blur-2xl opacity-60"></div>
          </motion.div>

          {/* Right: Content */}
          <motion.div variants={itemVariants} className="flex flex-col">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-primary"></div>
              <span className="text-primary font-serif uppercase tracking-widest text-sm">Our Story</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6 text-foreground leading-tight">
              A Sanctuary for <span className="text-primary italic">Beauty</span> & <span className="text-primary italic">Grace</span>
            </h2>

            <div className="space-y-6 mb-10 text-muted-foreground">
              <p className="font-cairo text-right text-lg md:text-xl leading-relaxed text-foreground" dir="rtl">
                صالون الزخم المخملي مكرس لتقديم تجارب تجميل استثنائية في بيئة فاخرة ومرحبة. فريقنا المتخصص يجمع بين الفن الجمالي وأجود المنتجات لخلق إطلالتك المثالية.
              </p>
              <p className="font-sans text-sm md:text-base leading-relaxed">
                Velvet Momentum Salon is dedicated to providing exceptional beauty experiences in a luxurious and welcoming environment. Our expert team of beauty specialists combines artistry with the finest products to create your perfect look.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                { icon: Star, labelEn: "89+ Reviews", labelAr: "89+ تقييم" },
                { icon: Users, labelEn: "100% Client Satisfaction", labelAr: "رضا تام" },
                { icon: Award, labelEn: "Premium Products", labelAr: "منتجات فاخرة" },
                { icon: Heart, labelEn: "Personalized Service", labelAr: "خدمة شخصية" }
              ].map((feature, idx) => (
                <div key={idx} className="flex items-center gap-3 bg-secondary/30 border border-border p-3 rounded-full">
                  <div className="bg-primary/10 p-2 rounded-full text-primary">
                    <feature.icon size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-cairo text-xs font-bold" dir="rtl">{feature.labelAr}</span>
                    <span className="font-sans text-[10px] uppercase text-muted-foreground">{feature.labelEn}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Row */}
            <div className="flex items-center justify-between border-t border-border pt-8 mt-auto">
              <div className="text-center">
                <span className="block font-serif text-3xl text-primary mb-1">89+</span>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">Reviews</span>
              </div>
              <div className="w-[1px] h-12 bg-border"></div>
              <div className="text-center">
                <span className="block font-serif text-3xl text-primary mb-1">100%</span>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">Satisfied</span>
              </div>
              <div className="w-[1px] h-12 bg-border"></div>
              <div className="text-center">
                <span className="block font-serif text-3xl text-primary mb-1">10+</span>
                <span className="font-sans text-xs uppercase tracking-wider text-muted-foreground">Services</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
