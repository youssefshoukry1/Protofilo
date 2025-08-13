import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../../components/About/About.module.css';

export default function About() {
  const cards = [
    { title: 'Work Experience', path: '/Work-Details' },
    { title: 'Personal Life', path: '/Life-Details' },
    { title: 'Download the CV' },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.8, ease: 'easeOut' },
    }),
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div
      id="about-section"
      className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0099FF] to-[#00B347]"></div>
      <div className="absolute inset-0 bg-white/10"></div>

      {/* العنوان مع الحركة */}
      <motion.h1
        className="relative text-3xl font-bold mb-12 text-white drop-shadow-lg"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Now More <span className="text-yellow-300">About Me</span>
      </motion.h1>

      {/* البطاقات */}
      <div className="relative flex flex-wrap justify-center items-center gap-8">
        {cards.map((card, index) => {
          if (card.title === 'Download the CV') {
            return (
              <a
                key={index}
                 href="/Emmy_Resume.pdf" // حط ملف الـ PDF في public بنفس الاسم
                download
              >
                <motion.div
                  className="cursor-pointer border-4 border-white/80 bg-white/10 backdrop-blur-md p-10 text-2xl text-white rounded-lg shadow-lg hover:scale-110 hover:bg-white/20 transition-all duration-300"
                  custom={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {card.title}
                </motion.div>
              </a>
            );
          }

          return (
            <Link key={index} to={card.path}>
              <motion.div
                className="cursor-pointer border-4 border-white/80 bg-white/10 backdrop-blur-md p-10 text-2xl text-white rounded-lg shadow-lg hover:scale-110 hover:bg-white/20 transition-all duration-300"
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {card.title}
              </motion.div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
