import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <Image src={assets.name2} alt="" className="w-30 mx-auto mb-2 " />

        <div className="flex items-center justify-center gap-2 text-gray-700 mb-4">
          <Image src={assets.mail_icon} alt="" className="w-6 " />
          sachingusain098@gmail.com
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 Sachin Gusain. All rights reserved</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/Gusainji">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.instagram.com/sachin_gusain_/">
              Instagram
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sachin-gusain-440906298/"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://x.com/GusainFitness">
              Twitter
            </a>
          </li>
          <li>
            <a target="_blank" href="https://www.youtube.com/@sachingusain6609">
              Youtube
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
