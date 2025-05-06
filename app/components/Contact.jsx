import { assets } from "@/assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import { motion} from "motion/react"


const Contact = () => {

  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c8279c21-977a-46da-b4be-3e5dd0d1f473");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <motion.div
    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}
      id="contact"
      className="w-full px-[12%] py-10 scroll-mt-20 bg-[url(/footer-bg-color.png)] bg-no-repeat bg-center bg-[length:90%_auto]"
    >
      <motion.h4
      initial={{y:-20, opacity: 0 }} whileInView={{y:0, opacity: 1 }} transition={{ delay:0.3,duration: 0.5 }}
       className="text-center mb-2 text-lg">Connect with me</motion.h4>
      <motion.h2
      initial={{y:-20, opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay:0.7,duration: 0.5 }}
      className="text-center text-5xl font-Ovo">Get in touch</motion.h2>
      <motion.p
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.7 }}
      className="text-center max-w-2xl mx-auto mt-5 mb-12">
        I'd love to hear from you! Whether you have a question, a project in
        mind, or just want to say hello, feel free to reach out. I'm always open
        to discussing new opportunities and collaborations. Please use the form
        below to get `in touch with me.
      </motion.p>
      <motion.form
      initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5, delay: 0.9 }}
      onSubmit={onSubmit} className="max-w-2xl mx-auto flex flex-col gap-5">
        <div className="flex flex-col sm:flex-row gap-5">
          <motion.input
          initial={{x:-50, opacity: 0 }} whileInView={{ x:0,opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }}
            className="w-full border border-gray-400 rounded-lg px-4 py-3"
            type="text"
            placeholder="Enter your name"
            required
            name="name"
          />
          <motion.input
          initial={{x:50, opacity: 0 }} whileInView={{ x:0,opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }}

            className="w-full border border-gray-400 rounded-lg px-4 py-3"
            type="email"
            placeholder="Enter your email"
            required
            name="email"
          />
        </div>
        <motion.textarea
        initial={{y:100 ,opacity: 0 }} whileInView={{y:0, opacity: 1 }} transition={{ duration: 0.6, delay: 1.3 }}
          rows="6"
          placeholder="Enter your message"
          required
          className="w-full border border-gray-400 rounded-lg px-4 py-3"
          name="message"
        ></motion.textarea>
        <motion.button
        whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}
          type="submit"
          className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80
         text-white rounded-full mx-auto hover:bg-black duration-500"
        >
          {" "}
          Submit now{" "}
          <Image src={assets.right_arrow_white} alt="" className="w-4" />{" "}
        </motion.button>
        <p className="mt-4x">{result}</p>
      </motion.form>
    </motion.div>
  );
};

export default Contact;
