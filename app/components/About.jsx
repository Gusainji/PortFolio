import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import heroImage from "@/assets/hero2.jpg";
import { motion } from "motion/react";
import { Playfair_Display, Poppins } from "next/font/google";

// Font definitions
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

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className={`${poppins.variable} ${playfair.variable} font-sans w-full px-6 sm:px-[10%] py-16 scroll-mt-20 bg-white`}
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center mb-2 text-lg font-poppins font-medium text-purple-600"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-12"
      >
        About Me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 my-12 max-w-6xl mx-auto"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-40 sm:w-60 md:w-72 lg:w-80 rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            className="w-full h-auto rounded-3xl object-cover hover:scale-105 transition-transform duration-500"
            src={heroImage}
            alt="Sachin Gusain"
            priority
          />
        </motion.div>

        {/* Info and Tools */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, duration: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl text-center lg:text-left font-poppins text-gray-700 text-lg leading-relaxed">
            I'm a passionate{" "}
            <span className="font-semibold text-purple-600">
              frontend developer
            </span>{" "}
            who crafts beautiful, functional websites with precision. Beyond
            coding, I'm a{" "}
            <span className="font-semibold">fitness enthusiast</span> who
            believes in discipline and growth, and a skilled{" "}
            <span className="font-semibold">beatboxer</span> who loves the
            rhythm of creativity. With confident communication and a versatile
            skill set, I bring energy and expertise to every project I
            undertake.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-2xl mx-auto lg:mx-0"
          >
            {infoList.map(({ icon, iconDark, title, description }, index) => (
              <motion.li
                whileHover={{ scale: 1.05 }}
                key={index}
                className="border border-gray-200 rounded-xl p-6 cursor-pointer hover:bg-purple-50 hover:-translate-y-1 duration-500 hover:shadow-lg transition-all"
              >
                <Image className="w-7 mt-3" src={icon} alt={title} />
                <h3 className="my-4 font-poppins font-semibold text-gray-800">
                  {title}
                </h3>
                <p className="font-poppins text-gray-600 text-sm">
                  {description}
                </p>
              </motion.li>
            ))}
          </motion.ul>

          <motion.h4
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            className="my-8 text-gray-700 text-center lg:text-left font-poppins font-semibold text-xl"
          >
            My Tech Stack
          </motion.h4>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                whileInView={{ scale: 1.1 }}
                key={index}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-200 rounded-lg cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-md bg-white"
              >
                <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
