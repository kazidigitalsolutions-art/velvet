import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    id: 1,
    text: "شكرا جداً الشغل جداً نظيف ودقيق ونظيف والعاملات بشوشات وروحهم ماشاءالله تبارك الرحمن خفيفه من افضل اللي تعاملت معهم والوان المناكير جباره احترنا وش نختار شكرا على الدلع والمشروب والكاكاو كل شي بيرفكت مو اخر تعامل اعتبروني زبونه دائمه عندكم",
    rating: 5
  },
  {
    id: 2,
    text: "تجربة رائعة في مشغل الزخم المخملي أول مره اجيكم وبأعتمدكم أم عبدالله صاحبة المشغل إنسانة مهتمة بكل التفاصيل تبارك الله جربت إيفلين قص شعر جداً خبرة وممتازة وتفهم بشغلها ماشاء الله وأميرة كذلك جربتها في البديكير البد والرجل وشاطرة تجربة جميلة وتتكرر بإذن الله شكراً",
    rating: 5
  },
  {
    id: 3,
    text: "السلام عليكم كيف حالك اول شي حابه اقولك ان التعامل معك عسل ومع عاملاتك عسل وخدمتكم عسل ياربي ايش الجمال والنعيم اللي انا عشته مع خدماتكم ماشاء الله إيرين تهبيبل احلى حمام مغربي ومساج",
    rating: 5
  },
  {
    id: 4,
    text: "حبيبتي جربت الدكله اليوم و كان شغلها مره يجنن و سويت ٣ خدمات كانوا رهيبين الله يعطيك العافيه على هالصالون الرائع",
    rating: 5
  }
];

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % reviews.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  return (
    <section id="reviews" className="py-24 bg-secondary/20 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">What Our Clients Say</h2>
            <h3 className="text-2xl md:text-3xl font-cairo text-primary font-bold" dir="rtl">آراء عملائنا</h3>
            <div className="h-[2px] w-24 bg-primary mx-auto mt-6"></div>
          </motion.div>
        </div>

        <div 
          className="relative px-8 md:px-16"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="min-h-[250px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl shadow-sm border border-border w-full max-w-3xl mx-auto"
              >
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-primary fill-primary w-5 h-5" />
                  ))}
                </div>
                <p className="font-cairo text-lg md:text-xl leading-relaxed text-foreground text-center" dir="rtl">
                  "{reviews[currentIndex].text}"
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors z-10 shadow-sm"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors z-10 shadow-sm"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="text-center mt-12">
          <p className="font-sans text-sm text-muted-foreground uppercase tracking-widest">
            Trusted by <span className="text-primary font-bold">89+</span> satisfied clients
          </p>
        </div>
      </div>
    </section>
  );
}
