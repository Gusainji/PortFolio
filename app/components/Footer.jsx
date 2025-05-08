import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <Image 
          src={assets.name2} 
          alt="Sachin Gusain" 
          className="w-30 mx-auto mb-2" 
          width={150} // Add explicit width
          height={40} // Add explicit height
        />

        <div className="flex items-center justify-center gap-2 text-gray-700 mb-4">
          <Image 
            src={assets.mail_icon} 
            alt="Email" 
            className="w-6" 
            width={24} 
            height={24} 
          />
          sachingusain098@gmail.com
        </div>
      </div>

      <div className="text-center flex flex-col sm:flex-row items-center justify-between border-t border-gray-400 mx-auto mt-12 py-6 max-w-7xl">
        <p className="mb-4 sm:mb-0 text-sm sm:text-base">
          © 2025 Sachin Gusain. All rights reserved
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-10">
          <li className="text-sm sm:text-base">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/Gusainji">
              GitHub
            </a>
          </li>
          <li className="text-sm sm:text-base">
            <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/sachin_gusain_/">
              Instagram
            </a>
          </li>
          <li className="text-sm sm:text-base">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/sachin-gusain-440906298/"
            >
              LinkedIn
            </a>
          </li>
          <li className="text-sm sm:text-base">
            <a target="_blank" rel="noopener noreferrer" href="https://x.com/GusainFitness">
              Twitter
            </a>
          </li>
          <li className="text-sm sm:text-base">
            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@sachingusain6609">
              YouTube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;