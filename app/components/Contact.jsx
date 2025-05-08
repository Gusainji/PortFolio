import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
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

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);

    formData.append("access_key", "c8279c21-977a-46da-b4be-3e5dd0d1f473");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      event.target.reset();
      setTimeout(() => setResult(""), 3000);
    } else {
      setResult("Error sending message. Please try again.");
      console.log("Error", data);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="contact"
      className={`${poppins.variable} ${playfair.variable} font-sans w-full px-6 sm:px-[10%] py-16 scroll-mt-20 bg-purple-50`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-2 text-lg font-poppins font-medium text-purple-600"
        >
          Connect with me
        </motion.h4>
        
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6"
        >
          Get in Touch
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-center max-w-2xl mx-auto mt-5 mb-12 font-poppins text-gray-600 text-lg leading-relaxed"
        >
          I'd love to hear from you! Whether you have a question, a project in
          mind, or just want to say hello, feel free to reach out. I'm always open
          to discussing new opportunities and collaborations.
        </motion.p>

        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          onSubmit={onSubmit} 
          className="max-w-2xl mx-auto flex flex-col gap-6"
        >
          <div className="flex flex-col sm:flex-row gap-6">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="w-full"
            >
              <label htmlFor="name" className="block font-poppins font-medium text-gray-700 mb-2">Name</label>
              <input
                className="w-full border border-gray-300 rounded-lg px-5 py-3 font-poppins focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                type="text"
                id="name"
                placeholder="Your name"
                required
                name="name"
              />
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="w-full"
            >
              <label htmlFor="email" className="block font-poppins font-medium text-gray-700 mb-2">Email</label>
              <input
                className="w-full border border-gray-300 rounded-lg px-5 py-3 font-poppins focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                type="email"
                id="email"
                placeholder="your.email@example.com"
                required
                name="email"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.3 }}
            className="w-full"
          >
            <label htmlFor="message" className="block font-poppins font-medium text-gray-700 mb-2">Message</label>
            <textarea
              rows="6"
              id="message"
              placeholder="Your message here..."
              required
              className="w-full border border-gray-300 rounded-lg px-5 py-3 font-poppins focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
              name="message"
            ></textarea>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="flex flex-col items-center gap-4 mt-2"
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="px-10 py-3 bg-purple-600 text-white rounded-full flex items-center gap-2 font-poppins font-medium hover:bg-purple-700 transition-colors shadow-lg"
            >
              Send Message
              <Image 
                src={assets.right_arrow_white} 
                alt="" 
                className="w-4 transition-transform group-hover:translate-x-1" 
              />
            </motion.button>

            {result && (
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className={`font-poppins text-sm mt-2 ${
                  result.includes("successfully") ? "text-green-600" : "text-red-600"
                }`}
              >
                {result}
              </motion.p>
            )}
          </motion.div>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;