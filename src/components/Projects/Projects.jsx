import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./Projects.css"; // تأكد إن ملف CSS فيه النقط دي

export default function Projects() {
  const cards = [
    { title: "Empty", path: "" },
    { title: "Empty", path: "" },
    { title: "Empty", path: "" },
    { title: "Empty", path: "" },
    { title: "Empty", path: "" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.4, ease: "easeInOut" },
    }),
  };

  return (
    <div
      className="relative w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden mx-auto"
      style={{ minHeight: "100vh" }}
      id="project-section"
    >
      {/* الخلفية */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0099FF] to-[#00B347]"></div>
      <div className="absolute inset-0 bg-white/10"></div>

      <motion.h1
        className="relative text-4xl font-extrabold mb-12 text-white drop-shadow-lg z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        My <span className="text-yellow-300">Projects</span>
      </motion.h1>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        className="relative z-10 w-full max-w-7xl"
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 15 },
          481: { slidesPerView: 2, spaceBetween: 20 },
          769: { slidesPerView: 2.5, spaceBetween: 25 },
          1025: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="cursor-pointer border-4 border-white/80 bg-white/10 backdrop-blur-md p-10 sm:p-12 text-xl sm:text-2xl text-white rounded-2xl shadow-lg hover:scale-105 hover:bg-white/20 transition-transform duration-300 flex items-center justify-center"
              style={{ minHeight: "250px", minWidth: "250px" }}
              custom={index}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {card.path ? (
                <Link to={card.path} className=" w-full h-full flex items-center justify-center">
                  {card.title}
                </Link>
              ) : (
                card.title
              )}
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
