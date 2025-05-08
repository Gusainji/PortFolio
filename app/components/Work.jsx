import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Playfair_Display, Poppins } from "next/font/google";

// Font definitions (consistent with other sections)
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-playfair",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
});

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className={`${poppins.variable} ${playfair.variable} font-sans w-full px-6 sm:px-[10%] py-16 scroll-mt-20 bg-white`}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-poppins font-medium text-purple-600"
      >
        My Portfolio
      </motion.h4>
      
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6"
      >
        My Latest Work
      </motion.h2>
      
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-poppins text-gray-600 text-lg"
      >
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in full-stack development.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10 max-w-6xl mx-auto"
      >
        {workData.map((project, index) => (
          <motion.div
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.98 }}
            key={index}
            className="relative aspect-square rounded-xl overflow-hidden group shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
              <Image
                src={project.bgImage}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
            </div>

            {/* Project Info Card */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-10/12 bg-white rounded-lg py-4 px-5 flex items-center justify-between shadow-lg"
            >
              <div className="flex-1">
                <h2 className="font-poppins font-semibold text-gray-900">{project.title}</h2>
                <p className="font-poppins text-sm text-gray-600">{project.description}</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="border rounded-full border-gray-300 w-9 h-9 flex items-center justify-center bg-white hover:bg-purple-100 transition-colors shadow-sm"
              >
                <Image
                  className="w-4 h-4"
                  src={assets.send_icon}
                  alt="View project"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      <motion.a
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        href="#"
        className="w-max flex items-center justify-center gap-2 font-poppins font-medium text-gray-700 border border-gray-300 rounded-full py-3 px-8 mx-auto mt-16 hover:bg-purple-50 hover:border-purple-200 hover:text-purple-700 transition-all duration-300"
      >
        Show More Projects
        <Image
          className="w-4 transition-transform group-hover:translate-x-1"
          src={assets.right_arrow_bold}
          alt="Arrow icon"
        />
      </motion.a>
    </motion.div>
  );
};

export default Work;