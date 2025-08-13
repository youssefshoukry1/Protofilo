import React from "react";
import { motion } from "framer-motion";

export default function WorkDetails() {
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
          <span className="text-yellow-300">About My Work Experience</span>
        </motion.h1>
        <motion.div
          className="h-1 bg-yellow-300 mt-2 origin-left"
          variants={underlineVariants}
        ></motion.div>
      </motion.div>

      {/* المحتوى */}
      <motion.div
        className="max-w-4xl bg-white/10 backdrop-blur-md border-4 border-white/40 rounded-lg shadow-xl p-8 text-white leading-relaxed"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.p variants={itemVariants}>
          Highly adaptable and results-driven professional with diverse
          experience spanning education, media production, logistics, and
          healthcare support. Skilled in managing multiple roles with precision,
          creativity, and teamwork. Demonstrated ability to thrive in
          fast-paced environments, work effectively under pressure, and deliver
          high-quality outcomes. Passionate about continuous learning,
          problem-solving, and contributing to team success while maintaining a
          strong commitment to excellence.
        </motion.p>

        <motion.h2
          className="mt-6 mb-2 text-2xl font-semibold text-yellow-300"
          variants={itemVariants}
        >
          Professional Experience
        </motion.h2>

        <motion.div className="space-y-4" variants={itemVariants}>
          {/* Pharmacy Assistant */}
          <div>
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Pharmacy Assistant (5 months)
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.span>
            </h3>
            <ul className="list-disc list-inside text-sm text-white/90 mt-1">
              <li>
                Developed strong knowledge of common illnesses, active
                pharmaceutical ingredients, and appropriate medication
                recommendations.
              </li>
              <li>
                Gained practical skills in customer interaction, active
                listening, and providing tailored guidance to diverse
                individuals.
              </li>
              <li>
                Maintained high attention to detail in a fast-paced retail
                environment.
              </li>
            </ul>
          </div>

          {/* HR Trainee */}
          <div>
            <h3 className="text-lg font-semibold text-white relative inline-block">
              HR Trainee – Logistics (Shipping & Warehousing) (4 months)
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.span>
            </h3>
            <ul className="list-disc list-inside text-sm text-white/90 mt-1">
              <li>
                Collected, organized, and analyzed employee and operational data
                using Microsoft Excel and other tools.
              </li>
              <li>
                Worked efficiently under tight deadlines while maintaining
                accuracy and professionalism.
              </li>
              <li>
                Strengthened collaboration skills by working closely with
                cross-functional teams.
              </li>
            </ul>
          </div>

          {/* Director & Cameraperson */}
          <div>
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Director & Cameraperson – Television Broadcasting (Current)
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 origin-left"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.span>
            </h3>
            <ul className="list-disc list-inside text-sm text-white/90 mt-1">
              <li>
                Oversee and execute the full production process for TV programs,
                from concept to broadcast.
              </li>
              <li>
                Coordinate with production teams to ensure high-quality visuals
                and smooth live transmissions.
              </li>
              <li>
                Apply creative vision and technical expertise to bring stories
                to life on screen.
              </li>
            </ul>
          </div>

          {/* Primary School Teacher */}
          <div>
            <h3 className="text-lg font-semibold text-white relative inline-block">
              Primary School Teacher (Current)
              <motion.span
                className="absolute bottom-0 left-0 w-full h-0.5 bg-yellow-300 origin-left"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              ></motion.span>
            </h3>
            <ul className="list-disc list-inside text-sm text-white/90 mt-1">
              <li>
                Plan and deliver engaging lessons tailored to the developmental
                needs of students.
              </li>
              <li>
                Foster an inclusive environment that encourages participation
                and learning.
              </li>
              <li>
                Adapt teaching methods to cater to different learning styles and
                abilities.
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
