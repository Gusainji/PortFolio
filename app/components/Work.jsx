import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion, scale } from "motion/react"

const Work = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
    id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
      initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.3 }}
      className="text-center mb-2 text-lg">My portfolio</motion.h4>
      <motion.h2 
      initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y:0 }} transition={{ duration: 0.5, delay: 0.5 }}
      className="text-center text-5xl font-Ovo">My latest work</motion.h2>
      <motion.p
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in front-end development.
      </motion.p>

      <motion.div
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.9 }}
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 my-10">
        {workData.map((project, index) => (
          <motion.div
          whileHover={{scale:1.05}} transition={{ duration: 0.3 }}
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden group shadow-md"
          >
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
              style={{ backgroundImage: `url(${project.bgImage})` }}
            ></div>

            <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 w-10/12 bg-white rounded-md py-3 px-5 flex items-center justify-between shadow-lg transition-all duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
              <div className="border round-full border-black w-9 aspect-square flex items-center
               justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
              <Image className="w-5 h-5" src={assets.send_icon} alt="send icon" />

              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      <motion.a
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.1 }}
      href="" className="w-max flex items-center justify-center gap-2 text-gray-700 
      border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-[#fcf4ff] duration-500">
        Show more <Image
        className="w-4"
         src={assets.right_arrow_bold} alt="right arrow"/>
      </motion.a>
    </motion.div>
  );
};

export default Work;
