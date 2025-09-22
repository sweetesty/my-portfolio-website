import React from "react";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/a-girl.png";



function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "contain", 
          backgroundColor: "black",  
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-pink-900/40" />

    
  
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl  font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
    
          Hi, I’m Esther Ajanaku 👋
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-200 mb-8 max-w-2xl"
        >
          💻 Code by day | 🎮 Slay by night <br />
          I build sleek, responsive web apps with style ✨
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold
                       hover:bg-pink-600 active:bg-pink-700 transition
                       shadow-lg hover:shadow-pink-500/70"
          >
            View My Work
          </a>
          <a
            href="mailto:estherolukorede12@gmail.com"
            className="px-6 py-3 rounded-full border-2 border-pink-400 text-pink-400 font-semibold
                       hover:bg-pink-500 hover:text-white active:bg-pink-600 active:text-white transition
                       shadow-md hover:shadow-pink-400/70"
          >
            Get In Touch
          </a>
        </motion.div>

        <motion.div
          className="flex gap-6 justify-center"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            href="https://github.com/sweetesty"
            className="text-gray-300 hover:text-pink-500 transition-colors"
          >
            <Github size={28} />
          </motion.a>
          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            href="https://www.linkedin.com/in/queen-esther-ajanaku-52197b34a"
            className="text-gray-300 hover:text-pink-500 transition-colors"
          >
            <Linkedin size={28} />
          </motion.a>
          <motion.a
            variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
            href="mailto:estherolukorede12@gmail.com"
            className="text-gray-300 hover:text-pink-500 transition-colors"
          >
            <Mail size={28} />
          </motion.a>
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-pink-500 transition-colors"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}

export default Hero;
