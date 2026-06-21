import React from "react";
import { motion } from "framer-motion";
import { Award, Home, Shield, MessageCircle, Heart, Zap } from "lucide-react";

export default function WhyChooseUs() {
  const features = [
    {
      icon: Award,
      titleEn: "Expert Beauty Specialists",
      titleAr: "متخصصات جمال محترفات",
      desc: "Highly trained professionals dedicated to your perfect look."
    },
    {
      icon: Home,
      titleEn: "Luxury Environment",
      titleAr: "بيئة فاخرة",
      desc: "A relaxing, beautifully designed space for your comfort."
    },
    {
      icon: Shield,
      titleEn: "High-Quality Products",
      titleAr: "منتجات عالية الجودة",
      desc: "We use only the finest premium products for all services."
    },
    {
      icon: MessageCircle,
      titleEn: "Personalized Consultation",
      titleAr: "استشارة شخصية",
      desc: "Tailored advice to match your unique style and needs."
    },
    {
      icon: Heart,
      titleEn: "Exceptional Customer Care",
      titleAr: "رعاية عملاء استثنائية",
      desc: "Your satisfaction and comfort are our top priorities."
    },
    {
      icon: Zap,
      titleEn: "Latest Beauty Trends",
      titleAr: "أحدث صيحات الجمال",
      desc: "Staying updated with modern techniques and styles."
    }
  ];

  return (
    <section className="py-24 bg-[#FAF7F2] relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Why Choose Us</h2>
            <h3 className="text-2xl md:text-3xl font-cairo text-primary font-bold" dir="rtl">لماذا تختارينا</h3>
            <div className="h-[2px] w-24 bg-primary mx-auto mt-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-transparent hover:border-primary/20 transition-all duration-300 text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 bg-secondary rounded-full flex items-center justify-center text-primary mb-6">
                <feature.icon size={24} strokeWidth={1.5} />
              </div>
              <h4 className="font-cairo text-xl font-bold text-foreground mb-2" dir="rtl">{feature.titleAr}</h4>
              <h5 className="font-serif text-md text-muted-foreground mb-4">{feature.titleEn}</h5>
              <p className="font-sans text-sm text-muted-foreground/80 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
