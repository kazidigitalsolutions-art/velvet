import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const phone = "966558666543";
  const message = encodeURIComponent("السلام عليكم، أود حجز موعد في صالون الزخم المخملي");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <div className="fixed bottom-24 right-5 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="relative bg-white rounded-xl shadow-2xl border border-green-100 p-4 max-w-[220px] text-right"
          >
            <button
              onClick={() => setShowTooltip(false)}
              className="absolute top-2 left-2 text-gray-400 hover:text-gray-600"
              data-testid="whatsapp-close"
            >
              <X size={14} />
            </button>
            <p className="font-cairo font-bold text-sm text-gray-800 mb-1" dir="rtl">
              تواصلي معنا عبر واتساب
            </p>
            <p className="font-tajawal text-xs text-gray-500 mb-3" dir="rtl">
              سنرد عليك في أقرب وقت
            </p>
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              data-testid="whatsapp-chat-link"
              className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-lg transition-colors w-full"
            >
              <SiWhatsapp size={16} />
              <span className="font-cairo">ابدئي المحادثة</span>
            </a>
            {/* Speech bubble tail */}
            <div className="absolute bottom-4 -right-2 w-3 h-3 bg-white border-r border-b border-green-100 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main button */}
      <motion.a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-float-btn"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 3.5 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 shadow-[0_4px_20px_rgba(37,211,102,0.5)] transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <SiWhatsapp size={28} color="white" />

        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-30 pointer-events-none" />
      </motion.a>
    </div>
  );
}
