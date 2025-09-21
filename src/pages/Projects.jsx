import React from 'react'
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "GameNova Web Store",
      description:
        "An e-commerce website designed to provide an interactive gaming shopping experience with dynamic product displays and a sleek interface.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1612831663490-1a1ff3ecf9c2?w=500&h=300&fit=crop",
    },
    {
      title: "To-Do List / Bucket List App",
      description:
        "A productivity application that helps users manage tasks and bucket list goals efficiently, with offline support and user-friendly UI.",
      tech: ["React", "Local Storage", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1581091870626-3b9eb2a86a40?w=500&h=300&fit=crop",
    },
    {
      title: "Quiz App",
      description:
        "An interactive quiz application featuring multiple-choice questions, real-time score tracking, and engaging animations.",
      tech: ["React", "Framer Motion", "JavaScript"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1590608897129-79e5dc1c83c0?w=500&h=300&fit=crop",
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and professional experience with a modern, responsive design.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
    },
    {
      title: "Relationship Tracker",
      description:
        "An app to help users monitor and improve personal relationships by tracking interactions, dates, and important notes.",
      tech: ["React", "Local Storage", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
    },
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
