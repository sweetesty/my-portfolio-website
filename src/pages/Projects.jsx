import React from 'react';
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Healing Hearts – Quotes & Inspiration App",
      description:
        "A beautifully designed inspirational quotes platform featuring categories, favorites, search filtering, user profiles, and Supabase authentication. Built with React, Tailwind, ShadCN UI, and Framer Motion for smooth interactions.",
      tech: ["React","Typescript", "Supabase", "ShadCN UI", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/sweetesty/healing-hearts",
      demo: "https://healing-hearts-two.vercel.app/",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&h=300&fit=crop"
    },
    {
      title: "Real Estate Website",
      description:
        "Real estate platform featuring property search, filters, and Google Maps integration. Implemented favorites system, image optimization (lazy loading), and mobile-first design for a smooth user experience.",
      tech: ["React", "CSS"],
      github: "#",
      demo: "https://tundo-esuola-co.vercel.app/find-a-service",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
    },

    {
  title: "Cool Flow Digital – Web Design & Development",
  description:
    "A modern, responsive frontend website developed to showcase the Cool Flow Digital brand with engaging animations, intuitive UI, and mobile‑friendly layouts. Built with React, Tailwind CSS, and deployed on Vercel.",
  tech: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vercel"],
  github: "https://github.com/sweetesty/cool-flow-digital", 
  demo: "https://cool-flow-digital.vercel.app/",
  image: "/cool-tech.png"
},
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and professional experience with a modern, responsive design.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/sweetesty/my-portfolio-website",
      demo: "https://my-portfolio-website-taupe-mu.vercel.app/",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop"
    },
    {
      title: "Vibea – Social Media App",
      description:
        "A social media platform similar to Instagram, with posts, stories, profiles, and messaging. Built with React, Tailwind CSS, ShadUI, and Supabase.",
      tech: ["React", "JavaScript","Tailwind CSS", "ShadUI", "Supabase"],
      github: "https://github.com/sweetesty/vibea",
      demo: "https://vibea.vercel.app/",
      image: "/vibea-logo.jpg"
    },
    {
      title: "GameNova Web Store",
      description:
        "An e-commerce website designed to provide an interactive gaming shopping experience with dynamic product displays and a sleek interface.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/sweetesty/game-website",
      demo: "https://game-website-lemon.vercel.app/",
      image: "/game-store.png"
    },
    {
      title: "To-Do List / Bucket List App",
      description:
        "A productivity application that helps users manage tasks and bucket list goals efficiently, with offline support and user-friendly UI.",
      tech: ["React", "Local Storage", "Tailwind CSS"],
      github: "https://github.com/sweetesty/todo-list-app",
      demo: "https://todo-list-app-by-sweetesty.vercel.app/",
      image: "/to-do.jpg"
    },

    {
  title: "Foodie – Food Ordering App",
  description:
    "A modern food ordering application that allows users to browse restaurants, explore menus, add meals to cart, and place orders effortlessly. Features include user authentication, cart management, responsive UI, and smooth animations for a delightful user experience.",
  tech: ["React", "Typescript", "Supabase", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
  github: "https://github.com/sweetesty/foodie",
  demo: "https://foodie-hub-bay-ten.vercel.app/",
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop"
},

    {
  title: "Opulent Threads – E-commerce Clothing App",
  description:
    "A stylish e-commerce clothing platform that allows users to browse fashion collections, view product details, add items to cart, and complete purchases seamlessly. Built with a clean, responsive UI, smooth animations, and a user-friendly shopping experience.",
  tech: ["React", "Typescript", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
  github: "https://github.com/sweetesty/opulent-threads",
  demo: "https://opulent-threads-ten.vercel.app/",
  image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop"
},

    {
      title: "Relationship Tracker",
      description:
        "An app to help users monitor and improve personal relationships by tracking interactions, dates, and important notes.",
      tech: ["React", "Local Storage", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-black/70 border border-pink-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
            >
              <div className="relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-pink-400 mb-2">{project.title}</h3>
                <p className="text-white/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 border border-pink-500/40 rounded-full text-xs font-medium text-white hover:bg-pink-500 hover:text-black transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 bg-black border border-pink-500 rounded-lg text-white hover:bg-pink-500 hover:text-black transition-all duration-300"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 px-3 py-2 bg-black border border-pink-500 rounded-lg text-white hover:bg-pink-500 hover:text-black transition-all duration-300"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
