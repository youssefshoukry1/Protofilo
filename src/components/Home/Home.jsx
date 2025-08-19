import React from 'react';
import '../../components/Home/Home.module.css';
import About from '../About/About';
import Projects from '../Projects/Projects';
import Contact from '../Contact/Contact';
import { motion } from "framer-motion";
export default function Home() {
  return (
    <>
    <div id="home-section"  className="relative flex flex-col justify-center items-center h-screen text-white text-center px-4 overflow-hidden">
      
      {/* خلفية جريدينت مشبع */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0099FF] to-[#00B347]"></div>
      
      {/* لمعة خفيفة */}
      <div className="absolute inset-0 bg-white/10"></div>

      {/* صورة البروفايل */}
      <img
        src='/IMG-20250810-WA0025.jpg'
        className="relative w-48 h-48 rounded-full shadow-2xl object-cover animate-fadeIn"
        alt="Emy Refaat Profile"
      />

      {/* النصوص */}

<div className="relative mt-6 space-y-2">
  <motion.h1
    className="text-3xl font-bold drop-shadow-lg text-white"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
  >
    Hi, I'm Emy Refaat
  </motion.h1>

  <motion.h3
    className="text-xl font-medium text-yellow-300 drop-shadow-lg"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
  >
    Broadcasting & Media 
  </motion.h3>
</div>


      {/* الزر */}
      <button onClick={() => {
        document.getElementById("about-section").scrollIntoView({behavior:"smooth"})
      }} className= " outline-none relative mt-6 px-6 py-2 bg-yellow-300 text-[#222] font-semibold rounded-full shadow-md hover:bg-yellow-400 hover:scale-105 transition-all duration-300 animate-fadeIn">
        Show Who I Am
      </button>
    </div>
    <About/>
    <Projects/>
    <Contact/>
    </>
  );
}