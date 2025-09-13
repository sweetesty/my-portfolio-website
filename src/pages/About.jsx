import React from "react";
import { motion } from "framer-motion";
import {Code,Zap,Layout,Database,Gauge,Users,BookOpen,Code2,Palette,Smartphone,GitBranch,} from "lucide-react";

const About = () => {
  const coreSkills = [
    { name: "Problem Solving", icon: Zap },
    { name: "Clean Code", icon: Code },
    { name: "Responsive Design", icon: Layout },
    { name: "Scalable Backend", icon: Database },
    { name: "Performance Optimization", icon: Gauge },
    { name: "Team Collaboration", icon: Users },
    { name: "Continuous Learning", icon: BookOpen },
  ];

  const stats = [
    { label: "Years of Experience", value: "2+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies Mastered", value: "8+" },
  ];

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "JavaScript", "HTML5", "CSS3"],
    },
    {
      icon: Palette,
      title: "Design & Styling",
      skills: ["Tailwind CSS", "Figma", "Responsive UI"],
    },
    {
      icon: Smartphone,
      title: "Backend & APIs",
      skills: ["Node.js", "Express", "REST APIs"],
    },
    {
      icon: Database,
      title: "Data & Storage",
      skills: ["MongoDB", "SQL", "Firebase"],
    },
    {
      icon: Zap,
      title: "Performance",
      skills: ["Lazy Loading", "Optimization", "Accessibility"],
    },
    {
      icon: GitBranch,
      title: "Tools",
      skills: ["Git", "GitHub", "Deployment"],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-white/80">
            Passionate full-stack developer dedicated to crafting exceptional web experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-white/90">
             I am <span className="font-bold text-pink-400"> Queen Esther Ajanaku</span>,  a full-stack developer passionate about building modern,
              responsive, and user-friendly web applications. My work blends creativity with
              functionality, turning ideas into seamless digital experiences that leave an impact.
              <br />
              <br />
              Driven by curiosity and a love for problem-solving, I continuously explore innovative
              approaches to design and development. Beyond writing clean, efficient code, I focus on
              crafting solutions that are not only functional but also meaningful for users.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {coreSkills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.button
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="group flex items-center gap-2 px-5 py-2 bg-black text-white border border-pink-500/50 
                               rounded-full text-sm font-medium shadow-md cursor-default
                               hover:bg-pink-500 hover:text-black hover:shadow-pink-500/50
                               transition-all duration-300"
                    disabled
                  >
                    <Icon
                      className="w-4 h-4 text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.85)] 
                                 transition-shadow duration-300 animate-pulse 
                                 group-hover:drop-shadow-[0_0_22px_rgba(236,72,153,1)]"
                    />
                    {skill.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="bg-black border border-pink-500/50 p-8 rounded-2xl shadow-lg 
                       hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300"
          >
            <h3 className="text-2xl font-bold mb-6 text-pink-400">Quick Stats</h3>
            <div className="space-y-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex justify-between items-center p-3 rounded-lg 
                             hover:bg-pink-500/10 hover:shadow-md hover:shadow-pink-500/40 
                             transition-all duration-300 cursor-default"
                >
                  <span className="text-white/80">{stat.label}</span>
                  <span className="font-bold text-xl text-pink-400">{stat.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-semibold mb-4 text-pink-500">Skills & Expertise</h3>
          <p className="text-white/80 max-w-3xl mx-auto mb-8">
            A concise collection of the tools, patterns, and practices I use to build reliable,
            fast, and user-focused applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.12 }}
                className="group bg-gradient-to-b from-pink-900/20 to-black rounded-xl p-6 
                           border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/40 
                           transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/10 rounded-lg">
                    <Icon
                      className="w-6 h-6 text-pink-400 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)] 
                                 transition-shadow duration-300 
                                 group-hover:drop-shadow-[0_0_22px_rgba(236,72,153,0.95)]"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white">{category.title}</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 bg-pink-500/10 text-white rounded-full text-sm 
                                 font-medium border border-pink-400/30 
                                 hover:bg-pink-500 hover:text-black hover:scale-105 
                                 transition-all duration-300 cursor-default"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
