import React from "react";
import { motion } from "framer-motion";

export default function PriceList() {
  const leftColumn = [
    { ar: "حواجب", price: "50 rs" },
    { ar: "شمع الوجه", price: "50 rs" },
    { ar: "استشوار", price: "حسب الطول" },
    { ar: "قص شعر", price: "60 rs" },
    { ar: "قص بوي", price: "60 rs" },
    { ar: "قص أطراف الشعر", price: "20 rs" },
    { ar: "فتلة", price: "50 rs" },
    { ar: "تنظيف بشرة كامل", price: "150 rs" },
    { ar: "كولاجين", price: "370-1200 rs" },
    { ar: "بروتين شعر", price: "حسب الطول" },
    { ar: "جهاز التقصف", price: "60 rs" },
    { ar: "قص غرة", price: "20 rs" },
    { ar: "صبغة جذور الشعر", price: "150 rs" },
    { ar: "حمام زيت", price: "60 rs" },
    { ar: "فيلر الشعر", price: "150-200 rs" },
    { ar: "حمام مغربي", price: "200 rs" },
    { ar: "حمام ملكي", price: "300 rs" },
    { ar: "مساج نص ساعة", price: "100 rs" },
    { ar: "مساج ريلاكس ساعة", price: "150 rs" },
    { ar: "مساج حجر", price: "200 rs" },
  ];

  const rightColumn = [
    { ar: "رينساج", price: "150-200 rs" },
    { ar: "تنظيف فروة", price: "80 rs" },
    { ar: "جلسة ترطيب الشعر", price: "150-200 rs" },
    { ar: "بروفين يدين", price: "40 rs" },
    { ar: "بروفين رجول", price: "40 rs" },
    { ar: "منيكير يدين", price: "60 rs" },
    { ar: "بديكير رجول", price: "90 rs" },
    { ar: "لون مناكير", price: "25 rs" },
    { ar: "لون مناكير فرنسي", price: "30 rs" },
    { ar: "حف نصف يد حلاوة", price: "70 rs" },
    { ar: "حف نصف يدين شمع", price: "60 rs" },
    { ar: "حف يد كاملة حلاوة", price: "140 rs" },
    { ar: "حف يد كاملة شمع", price: "120 rs" },
    { ar: "حف رجل كاملة حلاوة", price: "150 rs" },
    { ar: "حف رجل كاملة شمع", price: "130 rs" },
    { ar: "حف نصف رجل حلاوة", price: "80 rs" },
    { ar: "حف نصف رجل شمع", price: "70 rs" },
    { ar: "حلاوة إبط", price: "25 rs" },
    { ar: "حف فخذ حلاوة", price: "70 rs" },
    { ar: "حف فخذ شمع", price: "60 rs" },
    { ar: "حف بطن", price: "50 rs" },
    { ar: "حف ظهر حلاوة", price: "70 rs" },
    { ar: "حف ظهر شمع", price: "70 rs" },
    { ar: "حلاوة جسم كامل", price: "400 rs" },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-5">
        {/* Subtle decorative background pattern could go here */}
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Price List</h2>
            <h3 className="text-3xl md:text-4xl font-cairo font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#E5C96B] to-primary" dir="rtl">قائمة الأسعار</h3>
            <div className="h-[2px] w-24 bg-primary mx-auto mt-6"></div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {leftColumn.map((item, idx) => (
              <div 
                key={`left-${idx}`} 
                className={`flex justify-between items-center py-3 px-4 rounded-md transition-colors ${idx % 2 === 0 ? 'bg-secondary/40' : 'bg-transparent'}`}
                dir="rtl"
              >
                <span className="font-cairo font-medium text-foreground">{item.ar}</span>
                <span className="font-sans font-semibold text-primary">{item.price}</span>
              </div>
            ))}
          </motion.div>

          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            {rightColumn.map((item, idx) => (
              <div 
                key={`right-${idx}`} 
                className={`flex justify-between items-center py-3 px-4 rounded-md transition-colors ${idx % 2 === 0 ? 'bg-secondary/40' : 'bg-transparent'}`}
                dir="rtl"
              >
                <span className="font-cairo font-medium text-foreground">{item.ar}</span>
                <span className="font-sans font-semibold text-primary">{item.price}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hair Length Guide */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 p-8 border border-primary/30 bg-secondary/20 rounded-xl relative"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-background px-4 text-primary font-cairo font-bold text-xl" dir="rtl">
            دليل أسعار حسب طول الشعر
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
            <div className="space-y-4" dir="rtl">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-cairo text-foreground">استشوار (ريترو/ويفي/حديث)</span>
                <span className="font-sans font-semibold text-primary" dir="ltr">150 / 200 / 250 sr</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-cairo text-foreground">صباغة لون واحد</span>
                <span className="font-sans font-semibold text-primary" dir="ltr">200 / 350 / 500 sr</span>
              </div>
            </div>
            <div className="space-y-4" dir="rtl">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-cairo text-foreground">هايلايت / لولايت</span>
                <span className="font-sans font-semibold text-primary" dir="ltr">250 / 400 / 800 sr</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="font-cairo text-foreground">بروتين</span>
                <span className="font-sans font-semibold text-primary" dir="ltr">300 / 600 / 800 sr</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
