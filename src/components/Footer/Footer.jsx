import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  const whatsappNumber = "201204470794"; // الرقم بدون علامة +

  return (
    <motion.footer
      className="relative w-full py-4 text-center text-white text-sm"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      {/* الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0099FF] to-[#00B347]"></div>
      <div className="absolute inset-0 bg-white/10"></div>

      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center gap-1">
        <p className="text-white/90">
          Developed by{" "}
          <span className="font-semibold text-white">Youssef Shoukry</span>
        </p>
        <a
          href={`https://wa.me/${whatsappNumber}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-300 hover:text-yellow-200 transition-colors duration-300 text-xs underline"
        >
          WhatsApp: +20 120 447 0794
        </a>
      </div>
    </motion.footer>
  );
}
