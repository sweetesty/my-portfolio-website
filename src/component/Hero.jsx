import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import heroImage from "../assets/a-girl.png";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";

function Hero() {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: "contain",
          backgroundColor: "black",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-pink-900/40" />

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center text-center px-4">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent relative"
        >
          Hi, I’m Esther Ajanaku 👋
        </motion.h1>

        {/* Typewriter Role */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-xl md:text-3xl font-semibold text-gray-100 mb-6"
        >
          I’m a{" "}
          <span className="text-pink-400">
            <Typewriter
              words={["FullStack Developer", "Frontend Developer","React Developer", "Web Developer", "UI/UX Designer", "Creative Coder", "Animation and Motion Designer", "Backend Developer",
                "Problem solver and bug fixer", "Tech Enthusiast", "E-commerce app builder" ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1200}
            />
          </span>
        </motion.h2>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-base md:text-xl text-gray-300 mb-10 max-w-2xl"
        >
          I craft sleek, responsive, and interactive web experiences
          blending clean code with smooth animations ✨
        </motion.p>

        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="flex flex-wrap gap-4 justify-center mb-12"
        >
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-pink-500 text-white font-semibold hover:bg-pink-600 transition shadow-lg hover:shadow-pink-500/60"
          >
            View My Work
          </a>
          <a
            href="mailto:estherolukorede12@gmail.com"
            className="px-6 py-3 rounded-full border-2 border-pink-400 text-pink-400 font-semibold hover:bg-pink-500 hover:text-white transition shadow-md hover:shadow-pink-400/60"
          >
            Get In Touch
          </a>
        </motion.div>

        
        <motion.div
          className="flex gap-6 justify-center mb-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.25 } },
          }}
        >
          {[ 
            { Icon: Github, link: "https://github.com/sweetesty" },
            { Icon: Linkedin, link: "https://www.linkedin.com/in/queen-esther-ajanaku-52197b34a" },
            { Icon: Mail, link: "mailto:estherolukorede12@gmail.com" },
          ].map(({ Icon, link }, i) => (
            <motion.a
              key={i}
              href={link}
              variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0 } }}
              whileHover={{ scale: 1.2 }}
              className="text-gray-300 hover:text-pink-500 transition-colors"
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gray-400 hover:text-pink-500 transition"
      >
        <ChevronDown size={32} />
      </motion.button>
    </section>
  );
}

export default Hero;
