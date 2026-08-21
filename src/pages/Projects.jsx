import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Download, X } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  
  const techFilter = searchParams.get("tech");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (techFilter) {
      setActiveTab("all");
    }
  }, [techFilter]);

  const projects = [
    {
      title: "Lokal Shops",
      description:
        "An innovative e-commerce marketplace platform connecting local businesses with customers. Features comprehensive multi-vendor onboarding, store management, and a seamless shopping experience.",
      tech: ["React", "Supabase", "Tailwind CSS", "TypeScript"],
      github: "#",
      demo: "https://lokalshops.co.uk/",
      image: "/lokal-logo.png",
      category: "web",
      features: [
        "Multi-vendor onboarding and store management",
        "Real-time product inventory and cart system",
        "Admin dashboards with comprehensive analytics",
        "Secure user authentication and checkout flow"
      ]
    },
    {
      title: "AutoGo - Car Rental Website",
      description:
        "A professional car rental and car hire website providing a seamless experience for booking vehicles. Users can browse a wide selection of cars and make reservations easily.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "#",
      demo: "https://www.autogo.ng/",
      image: "/autogo.png",
      category: "web",
      features: [
        "Seamless vehicle booking and reservation system",
        "Browse a wide selection of cars for hire",
        "Responsive and user-friendly interface",
        "Optimized for performance and accessibility"
      ]
    },
     {
      title: "StudyCompanion",
      description: "A comprehensive mobile learning assistant designed to help students manage study schedules, track task deadlines, set reminders, and organize study resources in one place.",
      tech: ["React Native", "Expo", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/sweetesty/StudyCompanion",
      demo: "https://expo.dev/accounts/sweetesty/projects/StudyCompanion/builds/862a6622-7ed8-4224-ad44-006a7b133d11",
      apk: "https://expo.dev/accounts/sweetesty/projects/StudyCompanion/builds/862a6622-7ed8-4224-ad44-006a7b133d11",
      image: "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=500&h=300&fit=crop",
      category: "mobile",
      features: [
        "Plan and track study sessions with interactive schedule management",
        "Set automated study notifications and reminders for assignments",
        "Organize learning resources and notes under subject folders",
        "Lightweight offline support for studying on-the-go"
      ]
    },
     {
      title: "Trading Platform",
      description: "A modern trading platform providing access to global liquidity pools with sub-millisecond execution. Features real-time market data, portfolio tracking, multiple asset classes (stocks, crypto, forex), and an intuitive interface for seamless trading experience.",
      tech: ["React", "JavaScript"],
      github: "https://github.com/sweetesty/trading-platform.git",
      demo: "https://trading-platform-flax.vercel.app/",
      image: "/trading-platform.png",
      category: "web",
      features: [
        "Real-time interactive stock and crypto charts",
        "Instant portfolio balance tracking and history graphs",
        "Simulated order book showing global liquidity pools",
        "Sub-millisecond trade execution simulator"
      ]
    },
    {
      title: "Foodie – Food Ordering App",
      description:
        "A modern food ordering application that allows users to browse restaurants, explore menus, add meals to cart, and place orders effortlessly. Features include user authentication, cart management, responsive UI, and smooth animations for a delightful user experience.",
      tech: ["React", "Typescript", "Supabase", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
      github: "https://github.com/sweetesty/foodie",
      demo: "https://foodie-hub-bay-ten.vercel.app/",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&h=300&fit=crop",
      category: "web",
      features: [
        "Menu browsing with filters for categories, prices, and dietary restrictions",
        "Real-time cart adding/editing with price calculations",
        "User authentication and profiles powered by Supabase",
        "Interactive order checkout with Framer Motion transitions"
      ]
    },
    {
      title: "Vibea – Social Media App",
      description:
        "A social media platform similar to Instagram, with posts, stories, profiles, and messaging. Built with React, Tailwind CSS, ShadUI, and Supabase.",
      tech: ["React", "JavaScript","Tailwind CSS", "ShadUI", "Supabase"],
      github: "https://github.com/sweetesty/vibea-social-hub",
      demo: "https://vibea-social-hub.vercel.app/",
      image: "/vibea-logo.jpg",
      category: "web",
      features: [
        "Create, edit, and delete image and text posts",
        "Responsive stories ribbon at the top of the feed",
        "Real-time direct messaging between users",
        "Comprehensive search filters for users and posts"
      ]
    },
    {
      title: "Opulent Threads – E-commerce Clothing App",
      description:
        "A stylish e-commerce clothing platform that allows users to browse fashion collections, view product details, add items to cart, and complete purchases seamlessly. Built with a clean, responsive UI, smooth animations, and a user-friendly shopping experience.",
      tech: ["React", "Typescript", "Tailwind CSS", "ShadCN UI", "Framer Motion"],
      github: "https://github.com/sweetesty/opulent-threads",
      demo: "https://opulent-threads-ten.vercel.app/",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500&h=300&fit=crop",
      category: "web",
      features: [
        "Interactive product catalog with categorization and search filtering",
        "Detailed product overview pages featuring sizing options and zoom views",
        "Persistent cart and bag summaries",
        "Animated, multi-step checkout flow"
      ]
    },
    {
      title: "Healing Hearts – Quotes & Inspiration App",
      description:
        "A beautifully designed inspirational quotes platform featuring categories, favorites, search filtering, user profiles, and Supabase authentication. Built with React, Tailwind, ShadCN UI, and Framer Motion for smooth interactions.",
      tech: ["React","Typescript", "Supabase", "ShadCN UI", "Framer Motion", "Tailwind CSS"],
      github: "https://github.com/sweetesty/healing-hearts",
      demo: "https://healing-hearts-two.vercel.app/",
      image: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=500&h=300&fit=crop",
      category: "web",
      features: [
        "Generate quote cards dynamically with varying background themes",
        "Save and catalog favorite quotes on custom dashboard",
        "Filter quotes by emotional categories (motivation, grief, hope, joy)",
        "User profile custom details setup"
      ]
    },
    {
      title: "Real Estate Website",
      description:
        "Real estate platform featuring property search, filters, and Google Maps integration. Implemented favorites system, image optimization (lazy loading), and mobile-first design for a smooth user experience.",
      tech: ["React", "CSS"],
      github: "#",
      demo: "https://tundo-esuola-co.vercel.app/find-a-service",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      category: "web",
      features: [
        "Responsive property listings grid with detailed filter options",
        "Embed map views showing listing coordinates",
        "Favorites listing system saved to browser storage",
        "Asset lazy-loading to optimize mobile rendering speed"
      ]
    },
    {
      title: "Cool Flow Digital – Web Design & Development",
      description:
        "A modern, responsive frontend website developed to showcase the Cool Flow Digital brand with engaging animations, intuitive UI, and mobile‑friendly layouts. Built with React, Tailwind CSS, and deployed on Vercel.",
      tech: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Vercel"],
      github: "https://github.com/sweetesty/cool-flow-digital", 
      demo: "https://cool-flow-digital.vercel.app/",
      image: "/cool-tech.png",
      category: "web",
      features: [
        "Bespoke layout showcasing agency web design services",
        "Sleek micro-animations and page scroll animations",
        "Integrated client intake form",
        "Fully optimized performance scores on Lighthouse"
      ]
    },
    {
      title: "Classmate Connect – Attendance Tracking System",
      description: "An electronic attendance system with QR code verification features. Designed for educational institutions to track student attendance accurately and efficiently. Built with real-time synchronization and session logging for seamless attendance management.",
      tech: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      github: "https://github.com/sweetesty/classmate-connect.git",
      demo: "https://classmate-connect.vercel.app/",
      image: "/classmate-connect.png",
      category: "web",
      features: [
        "Generate student attendance profiles and unique verification codes",
        "Real-time teacher view showing student sign-in checkins live",
        "Detailed session log archives",
        "Export capabilities for attendance logs"
      ]
    },
    {
      title: "Portfolio Website",
      description:
        "A personal portfolio showcasing projects, skills, and professional experience with a modern, responsive design.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/sweetesty/my-portfolio-website",
      demo: "https://my-portfolio-website-taupe-mu.vercel.app/",
      image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&h=300&fit=crop",
      category: "web",
      features: [
        "Sleek dark mode glassmorphism interface",
        "Framer Motion layout transitions and page entry animations",
        "Dynamic theme color accents changer",
        "Interactive technology tags filtering system"
      ]
    },
    {
      title: "GameNova Web Store",
      description:
        "An e-commerce website designed to provide an interactive gaming shopping experience with dynamic product displays and a sleek interface.",
      tech: ["React", "Tailwind CSS", "JavaScript"],
      github: "https://github.com/sweetesty/game-website",
      demo: "https://game-website-lemon.vercel.app/",
      image: "/game-store.png",
      category: "web",
      features: [
        "Dynamic video game titles selection grids",
        "Interactive detail cards showing ratings, platforms, and prices",
        "Local Storage shopping cart details saving",
        "Modern neon cyber-themed branding styles"
      ]
    },
    {
      title: "To-Do List / Bucket List App",
      description:
        "A productivity application that helps users manage tasks and bucket list goals efficiently, with offline support and user-friendly UI.",
      tech: ["React", "Local Storage", "Tailwind CSS"],
      github: "https://github.com/sweetesty/todo-list-app",
      demo: "https://todo-list-app-by-sweetesty.vercel.app/",
      image: "/to-do.jpg",
      category: "web",
      features: [
        "Create, sort, and complete tasks with priority labels",
        "Distinct bucket-list category tracking tab",
        "Persistent offline storage",
        "Progress tracking metrics bar"
      ]
    },
    {
      title: "Relationship Tracker",
      description:
        "An app to help users monitor and improve personal relationships by tracking interactions, dates, and important notes.",
      tech: ["React", "Local Storage", "Tailwind CSS"],
      github: "#",
      demo: "#",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=500&h=300&fit=crop",
      category: "web",
      features: [
        "Keep records of important milestones and conversations",
        "Custom metrics scores for tracking relationship strength",
        "Calendar log integration",
        "Encrypted locally saved data"
      ]
    }
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = activeTab === "all" || project.category === activeTab;
    const matchesTech = !techFilter || project.tech.some(t => t.toLowerCase() === techFilter.toLowerCase());
    return matchesCategory && matchesTech;
  });

  const clearTechFilter = () => {
    searchParams.delete("tech");
    setSearchParams(searchParams);
  };

  return (
    <section id="projects" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            A showcase of my recent work and the technologies I'm passionate about
          </p>
        </div>

        {/* Tech Filter Badge */}
        {techFilter && (
          <div className="flex justify-center mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-pink-500/20 border border-pink-500 text-pink-400 rounded-full text-sm font-medium">
              Tech Filter: {techFilter}
              <button 
                onClick={clearTechFilter} 
                className="hover:text-white cursor-pointer ml-1 p-0.5 rounded-full hover:bg-pink-500/25 transition-colors"
                title="Clear filter"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </span>
          </div>
        )}

        {/* Category Tabs */}
        <div className="flex justify-center gap-2 md:gap-4 mb-12 flex-wrap">
          {[
            { id: "all", label: "All Projects" },
            { id: "web", label: "Websites & Web Apps" },
            { id: "mobile", label: "Mobile Applications" }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 md:px-6 py-2 rounded-full border text-xs md:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? "bg-pink-500 border-pink-500 text-white shadow-lg shadow-pink-500/50"
                  : "bg-transparent border-pink-500/30 text-white/70 hover:border-pink-500 hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(project)}
                className="bg-black/70 border border-pink-500/50 rounded-2xl overflow-hidden shadow-lg hover:shadow-pink-500/50 md:hover:scale-[1.03] transition-all duration-300 cursor-pointer flex flex-col justify-between"
              >
                <div>
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-300 md:hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-pink-400 mb-2">{project.title}</h3>
                    <p className="text-white/80 mb-4 text-sm line-clamp-3">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 border border-pink-500/40 rounded-full text-[10px] font-medium text-white"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] text-pink-400 font-semibold self-center">
                          +{project.tech.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-0 flex gap-3" onClick={(e) => e.stopPropagation()}>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-black border border-pink-500 rounded-lg text-white hover:bg-pink-500 hover:text-black transition-all duration-300 text-xs font-semibold"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.apk ? (
                    <a
                      href={project.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 px-3 py-2 bg-black border border-pink-500 rounded-lg text-white hover:bg-pink-500 hover:text-black transition-all duration-300 text-xs font-semibold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Get APK
                    </a>
                  ) : (
                    project.demo !== "#" && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 px-3 py-2 bg-black border border-pink-500 rounded-lg text-white hover:bg-pink-500 hover:text-black transition-all duration-300 text-xs font-semibold"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Demo
                      </a>
                    )
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-start md:items-center justify-center bg-black/80 backdrop-blur-md p-4 py-8 overflow-y-auto"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-zinc-950 border border-pink-500/40 rounded-2xl max-w-xl w-full overflow-hidden shadow-2xl my-8 md:my-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-black/60 border border-pink-500/20 text-white hover:text-pink-400 hover:border-pink-500 rounded-full transition cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-48 md:h-56 object-cover"
              />

              <div className="p-6 space-y-5">
                <div>
                  <span className="text-[10px] font-semibold text-pink-400 uppercase tracking-widest">
                    {selectedProject.category === "mobile" ? "Mobile Application" : "Website / Web App"}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-white mt-0.5">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-white/80 leading-relaxed text-sm">
                  {selectedProject.description}
                </p>

                {/* Key Features */}
                {selectedProject.features && (
                  <div>
                    <h4 className="text-pink-400 font-bold text-xs mb-1.5 uppercase tracking-wider">Key Features</h4>
                    <ul className="list-disc list-inside text-white/70 space-y-1 text-xs">
                      {selectedProject.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Badges */}
                <div>
                  <h4 className="text-pink-400 font-bold text-xs mb-1.5 uppercase tracking-wider">Technologies Used</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 bg-pink-500/10 border border-pink-500/30 rounded-full text-[10px] font-medium text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Links */}
                <div className="flex gap-3 pt-3 border-t border-white/10 flex-wrap">
                  {selectedProject.github !== "#" && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-black border border-pink-500 rounded-lg text-white hover:bg-pink-500 hover:text-black transition duration-300 font-medium text-xs cursor-pointer"
                    >
                      <Github className="w-4 h-4" /> Code Repository
                    </a>
                  )}

                  {selectedProject.apk ? (
                    <a
                      href={selectedProject.apk}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-3 py-2 bg-pink-500 text-black rounded-lg hover:bg-pink-600 transition duration-300 font-bold text-xs cursor-pointer"
                    >
                      <Download className="w-4 h-4" /> Get APK
                    </a>
                  ) : (
                    selectedProject.demo !== "#" && (
                      <a
                        href={selectedProject.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 bg-pink-500 text-black rounded-lg hover:bg-pink-600 transition duration-300 font-bold text-xs cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" /> Live Demo
                      </a>
                    )
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
