import React from "react";
import { motion } from "framer-motion";
import { Instagram } from "lucide-react";

import p4 from "@assets/p4_1782050469506.jpg";
import p5 from "@assets/p5_1782050469506.jpg";
import p6 from "@assets/p6_1782050469505.jpg";
import p7 from "@assets/p7_1782050469504.jpg";

export default function InstagramSection() {
  const images = [p4, p5, p6, p7];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30 relative">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-serif text-foreground mb-2">Follow Our Beauty Journey</h2>
            <h3 className="text-xl font-cairo text-primary font-bold text-right md:text-left" dir="rtl">تابعي رحلتنا الجمالية</h3>
          </div>
          <a 
            href="https://www.instagram.com/velvet.momentum.salon/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-md hover:bg-primary/90 transition-colors"
          >
            <Instagram size={20} />
            <span className="font-sans font-medium">@velvet.momentum.salon</span>
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <motion.a
              href="https://www.instagram.com/velvet.momentum.salon/"
              target="_blank"
              rel="noopener noreferrer"
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative group aspect-square overflow-hidden block"
            >
              <img 
                src={img} 
                alt={`Instagram Post ${idx + 1}`} 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="text-white opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300" size={32} />
              </div>
            </motion.a>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://www.instagram.com/velvet.momentum.salon/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block border-b border-primary text-foreground pb-1 hover:text-primary transition-colors"
          >
            <span className="font-cairo mr-2" dir="rtl">تابعينا على الانستغرام</span>
            <span className="font-sans text-sm">/ Visit Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
