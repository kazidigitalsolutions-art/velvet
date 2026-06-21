import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

import p1 from "@assets/p1_1782050469508.jpg";
import p2 from "@assets/p2_1782050469507.jpg";
import p3 from "@assets/p3_1782050469507.jpg";
import p4 from "@assets/p4_1782050469506.jpg";
import p5 from "@assets/p5_1782050469506.jpg";
import p6 from "@assets/p6_1782050469505.jpg";
import p7 from "@assets/p7_1782050469504.jpg";
import p8 from "@assets/3_1782050503373.jpg";

const images = [p1, p2, p3, p4, p5, p6, p7, p8];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-serif text-foreground mb-4">Our Work</h2>
            <h3 className="text-2xl md:text-3xl font-cairo text-primary font-bold" dir="rtl">أعمالنا</h3>
            <div className="h-[2px] w-24 bg-primary mx-auto mt-6"></div>
          </motion.div>
        </div>

        <div className="columns-1 sm:columns-2 md:columns-3 gap-4 space-y-4">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (idx % 3) * 0.1 }}
              className="break-inside-avoid relative group cursor-pointer overflow-hidden rounded-lg"
              onClick={() => setSelectedImage(img)}
            >
              <img 
                src={img} 
                alt={`Salon Gallery ${idx + 1}`} 
                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 pointer-events-none ring-1 ring-inset ring-transparent group-hover:ring-primary/50"></div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <motion.img
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              src={selectedImage}
              alt="Fullscreen view"
              className="max-w-full max-h-full object-contain rounded-md"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
