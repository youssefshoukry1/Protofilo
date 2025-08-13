import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  // انميشن العنوان
  const titleVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // انميشن العناصر
  const elementVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.25, duration: 0.8, ease: "easeOut" },
    }),
  };

  const email = "emmyrefaat@gmail.com"; // ضع ايميلك هنا
  const whatsappNumber = "+201205015455";

  return (
    <div
      id="contact-section"
      className="relative min-h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden"
    >
      {/* الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0099FF] to-[#00B347]"></div>
      <div className="absolute inset-0 bg-white/10"></div>

      {/* العنوان */}
      <motion.h1
        className="relative text-3xl font-bold mb-12 text-white drop-shadow-lg"
        variants={titleVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        Get in <span className="text-yellow-300">Touch</span>
      </motion.h1>

      {/* زرار واتساب */}
      <motion.a
        href={`https://wa.me/${whatsappNumber}`}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer border-4 border-green-400/80 bg-green-500/30 backdrop-blur-md px-8 py-4 text-xl text-white rounded-lg shadow-lg hover:scale-110 hover:bg-green-500/50 transition-all duration-300 mb-6"
        custom={0}
        variants={elementVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        💬 Chat on WhatsApp
      </motion.a>

{/* زرار LinkedIn */}
<motion.a
  href="https://www.linkedin.com/in/emmy-rafayelo-62685b317/" // ضع لينك البروفايل هنا
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer border-4 border-blue-400/80 bg-blue-500/30 backdrop-blur-md px-8 py-4 text-xl text-white rounded-lg shadow-lg hover:scale-110 hover:bg-blue-500/50 transition-all duration-300 mb-6 flex items-center gap-3"
  custom={0.5}
  variants={elementVariants}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.3 }}
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
    <path d="M19 0h-14c-2.76 0-5 2.24-5 
      5v14c0 2.76 2.24 5 5 5h14c2.76 
      0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 
      19h-3v-10h3v10zm-1.5-11.27c-.97 
      0-1.75-.79-1.75-1.76s.78-1.75 
      1.75-1.75 1.75.78 
      1.75 1.75-.78 1.76-1.75 
      1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 
      0-2.16 1.46-2.16 2.96v5.71h-3v-10h2.88v1.36h.04c.4-.75 
      1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 
      4.6v5.58z"/>
  </svg>
  Connect on LinkedIn
</motion.a>


      {/* فورم الإيميل */}
      <motion.form
        action={`mailto:${email}`}
        method="POST"
        encType="text/plain"
        className="relative border-4 border-blue-400/80 bg-blue-500/30 backdrop-blur-md p-6 rounded-lg shadow-lg w-full max-w-md"
        custom={1}
        variants={elementVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.input
          type="email"
          name="Email"
          placeholder="Your Email"
          required
          className="w-full p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          custom={2}
          variants={elementVariants}
        />
        <motion.textarea
          name="Message"
          placeholder="Your Message"
          rows="4"
          required
          className="w-full p-3 mb-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
          custom={3}
          variants={elementVariants}
        ></motion.textarea>
        <motion.button
          type="submit"
          className="w-full border-2 border-white text-white py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300"
          custom={4}
          variants={elementVariants}
        >
          Send Email
        </motion.button>
      </motion.form>
    </div>
  );
}
