import { assets, serviceData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";
import { Playfair_Display, Poppins } from "next/font/google";


// Font definitions (same as in your About section)
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

const Services = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id="services"
    className={`${poppins.variable} ${playfair.variable} font-sans w-full px-6 sm:px-[10%] py-16 scroll-mt-20 bg-gray-50`}
  >
    <motion.h4
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg font-poppins font-medium text-purple-600"
    >
      What I Offer
    </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6"
      >
        My Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-poppins text-gray-600 text-lg"
      >
        I provide comprehensive full-stack development solutions from Uttarakhand, Dehradun.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 my-10 max-w-6xl mx-auto"
      >
        {serviceData.map(({ icon, title, description, link }, index) => (
          <motion.div
            whileHover={{ y: -5 }}
            whileInView={{ scale: 1.05 }}
            key={index}
            className="border border-gray-200 rounded-xl p-8 bg-white hover:bg-purple-50 cursor-pointer transition-all duration-300 hover:shadow-lg"
          >
            <div className="bg-purple-100 w-14 h-14 rounded-full flex items-center justify-center mb-6">
              <Image src={icon} alt={title} className="w-6" />
            </div>
            
            <h3 className="text-xl font-poppins font-semibold text-gray-800 mb-4">{title}</h3>
            
            <p className="font-poppins text-gray-600 mb-5 leading-relaxed">
              {description}
            </p>
            <a 
              href={link} 
              className="flex items-center gap-2 font-poppins font-medium text-purple-600 hover:text-purple-800 transition-colors"
            >
              Read more
              <Image 
                src={assets.right_arrow} 
                alt="" 
                className="w-4 transition-transform group-hover:translate-x-1" 
              />
            </a>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
