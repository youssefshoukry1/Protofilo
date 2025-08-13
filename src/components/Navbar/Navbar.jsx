import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navbar() {
  const navItems = [
    { name: "Home", path: "/", id: "home-section" },
    { name: "About", path: "/", id: "about-section" }, // About جوه الصفحة الرئيسية
    { name: "Project", path: "/", id: "project-section" },
    { name: "Contact", path: "/", id: "contact-section" }
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const pendingSection = useRef(null);

  const handleNavClick = (path, sectionId) => {
    if (location.pathname === path) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      pendingSection.current = sectionId;
      navigate(path);
    }
  };

  useEffect(() => {
    if (pendingSection.current) {
      const sectionId = pendingSection.current;
      const timer = setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
        pendingSection.current = null;
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [location]);

  // انميشن العناصر
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <div className="relative w-full flex justify-center items-center p-4 gap-8 shadow-lg overflow-hidden">
      {/* الخلفية الثابتة */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0099FF] to-[#00B347]"></div>
      <div className="absolute inset-0 bg-white/10"></div>

      {/* عناصر القائمة بالانميشن */}
      <motion.ul
        className="relative flex gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {navItems.map(({ name, path, id }) => (
          <motion.li
            key={name}
            variants={itemVariants}
            onClick={() => handleNavClick(path, id)}
            className="list-none text-white drop-shadow-lg text-lg font-semibold cursor-pointer transition-all duration-300 hover:scale-110 hover:text-yellow-300"
          >
            {name}
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
