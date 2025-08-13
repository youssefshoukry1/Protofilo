import React from "react";
import { motion } from "framer-motion";

export default function LifeDetails() {
  // حركة الكونتينر الأساسي
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };

  // حركة العناصر الداخلية
  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // حركة العنوان مع الخط اللي تحته
  const titleVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const underlineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 py-10 bg-gradient-to-b from-[#0099FF] to-[#00B347]">
      {/* العنوان الرئيسي */}
      <motion.div
        className="text-center mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <motion.h1
          className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg"
          variants={titleVariants}
        >
          Here is more information{" "}
          <span className="text-yellow-300">About Me</span>
        </motion.h1>
        <motion.div
          className="h-1 bg-yellow-300 mt-2 origin-left"
          variants={underlineVariants}
        ></motion.div>
      </motion.div>

      {/* المحتوى */}
      <motion.div
        className="max-w-4xl bg-white/10 backdrop-blur-md border-4 border-white/40 rounded-lg shadow-xl p-8 text-white leading-relaxed space-y-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={itemVariants}>
          <span className="text-yellow-300 font-semibold">Organized & Disciplined –</span>{" "}
          I am an organized and disciplined person by nature, with a strong
          tendency to wake up early and make the most of my day.
        </motion.p>

        <motion.p variants={itemVariants}>
          <span className="text-yellow-300 font-semibold">Art –</span> I have a deep
          passion for art, including drawing, singing, music, and acting, and I
          truly appreciate refined artistic works.
        </motion.p>

        <motion.p variants={itemVariants}>
          <span className="text-yellow-300 font-semibold">Reading –</span> I enjoy
          spending a lot of time reading, as I believe that just as food nourishes
          the body, reading nourishes the soul. I have read extensively in
          philosophy, psychology, and the study of human behavior.
        </motion.p>

        <motion.p variants={itemVariants}>
          <span className="text-yellow-300 font-semibold">Cycling –</span> I love
          active sports, especially cycling, as it energizes the body and gives me
          a fresh burst of vitality.
        </motion.p>

        <motion.p variants={itemVariants}>
          <span className="text-yellow-300 font-semibold">Building New Relationships –</span>{" "}
          I am inclined towards forming new social connections and turning them
          into strong and lasting relationships.
        </motion.p>

        <motion.p variants={itemVariants}>
          <span className="text-yellow-300 font-semibold">Volunteering –</span> I have
          a strong interest in contributing to community activities. In middle
          school, I participated in the “Egyptian Family House” competition for
          national unity, where I represented my school, winning first place at
          the governorate level and sixth place nationally. I also took part in the
          “Ideal Student” competition in high school. At university, I joined a
          volunteer association as an active member, teaching the Spanish language
          for one year.
        </motion.p>
      </motion.div>
    </div>
  );
}
