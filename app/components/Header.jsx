import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/hero2.jpg";
import { motion } from "motion/react";
import { Playfair_Display, Poppins } from "next/font/google";


// Font definitions (in the same file)
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

const Header = () => {
  return (
    <div className={`${poppins.variable} ${playfair.variable} font-sans w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-3`}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={heroImage}
          alt="Profile"
          className="rounded-full w-28 h-28 object-cover border-2 border-white shadow-lg"
          priority
        />
      </motion.div>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-4xl sm:text-6xl font-playfair font-bold text-gray-900 leading-tight"
      >
        Full-stack web developer
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-2xl mx-auto font-poppins text-lg text-gray-600"
      >
        Crafting digital experiences from UTTARAKHAND, DEHRADUN
      </motion.p>

       <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="px-10 py-3 bg-black text-white rounded-full flex items-center gap-2 font-poppins font-medium hover:bg-gray-900 transition-colors"
          href="#contact"
        >
          Contact me
          <Image src={assets.right_arrow_white} alt="" className="w-4" />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/RESUME.pdf"
          download
          className="px-10 py-3 border border-gray-300 rounded-full flex items-center gap-2 font-poppins font-medium hover:bg-gray-50 transition-colors"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </motion.a>
      </div>
    </div>
  );
};

export default Header;
