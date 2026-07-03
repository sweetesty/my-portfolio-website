import React, { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  Zap,
  Layout,
  Database,
  Gauge,
  Users,
  BookOpen,
  Code2,
  Palette,
  Smartphone,
  GitBranch,
} from "lucide-react";

// ─── Particle Network Background ───────────────────────────────────────────
const ParticleBackground = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  const mouseRef = useRef({ x: -9999, y: -9999 });
  const animFrameRef = useRef(0);

  const PARTICLE_COUNT = 80;
  const CONNECTION_DIST = 130;
  const MOUSE_REPEL_DIST = 100;
  const MOUSE_REPEL_FORCE = 0.6;

  const initParticles = useCallback((w, h) => {
    particlesRef.current = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 1.8 + 0.8,
      opacity: Math.random() * 0.5 + 0.3,
    }));
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.offsetWidth;
      canvas.height = parent.offsetHeight;
      initParticles(canvas.width, canvas.height);
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };
    const onMouseLeave = () => {
      mouseRef.current = { x: -9999, y: -9999 };
    };
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseleave", onMouseLeave);

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const particles = particlesRef.current;
      const mouse = mouseRef.current;

      // Update & draw particles
      for (const p of particles) {
        // Mouse repulsion
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < MOUSE_REPEL_DIST && dist > 0) {
          const force = (MOUSE_REPEL_DIST - dist) / MOUSE_REPEL_DIST;
          p.vx += (dx / dist) * force * MOUSE_REPEL_FORCE;
          p.vy += (dy / dist) * force * MOUSE_REPEL_FORCE;
        }

        // Damping
        p.vx *= 0.97;
        p.vy *= 0.97;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        // Draw dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(236, 72, 153, ${p.opacity})`;
        ctx.shadowColor = "rgba(236, 72, 153, 0.8)";
        ctx.shadowBlur = 6;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECTION_DIST) {
            const alpha = (1 - dist / CONNECTION_DIST) * 0.25;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(236, 72, 153, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Mouse connection burst
      if (mouse.x > 0) {
        for (const p of particles) {
          const dx = p.x - mouse.x;
          const dy = p.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < CONNECTION_DIST * 1.5) {
            const alpha = (1 - dist / (CONNECTION_DIST * 1.5)) * 0.5;
            ctx.beginPath();
            ctx.moveTo(mouse.x, mouse.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `rgba(244, 114, 182, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }

        // Mouse glow dot
        const grad = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 40);
        grad.addColorStop(0, "rgba(236, 72, 153, 0.15)");
        grad.addColorStop(1, "transparent");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMouseMove);
      canvas.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [initParticles]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-auto"
      style={{ zIndex: 0 }}
    />
  );
};

// ─── About Component ────────────────────────────────────────────────────────
const About = () => {
  const navigate = useNavigate();
  const coreSkills = [
    { name: "Problem Solving", icon: Zap },
    { name: "Clean Code", icon: Code },
    { name: "Responsive Design", icon: Layout },
    { name: "Scalable Backend", icon: Database },
    { name: "Performance Optimization", icon: Gauge },
    { name: "Team Collaboration", icon: Users },
    { name: "Continuous Learning", icon: BookOpen },
  ];

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      skills: ["React", "Typescript", "JavaScript", "HTML5", "CSS3"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      skills: ["Flutter", "Dart", "React Native", "Expo", "Android (APK)", "iOS (IPA)", "Cross-Platform Dev"],
    },
    {
      icon: Palette,
      title: "Design & Styling",
      skills: ["Tailwind CSS", "Figma", "Responsive UI"],
    },
    {
      icon: Code,
      title: "Backend & APIs",
      skills: ["Node.js", "Express", "PHP", "Laravel", "REST APIs"],
    },
    {
      icon: Database,
      title: "Data & Storage",
      skills: ["MongoDB", "SQL", "Firebase", "Supabase", "PostgreSQL"],
    },
    {
      icon: GitBranch,
      title: "Tools & DevOps",
      skills: ["Git", "GitHub", "Vercel", "EAS Build", "Deployment"],
    },
  ];

  const codeSnippet = `
function DeveloperStats() {
  return (
    <div>
      <p>Years of Experience: 2+</p>
      <p>Projects Completed: 10+</p>
      <p>Technologies Mastered: 8+</p>
    </div>
  );
}

export default DeveloperStats;
`;

  const [typedCode, setTypedCode] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < codeSnippet.length) {
      const timeout = setTimeout(() => {
        setTypedCode((prev) => prev + codeSnippet[index]);
        setIndex(index + 1);
      }, 25);
      return () => clearTimeout(timeout);
    }
  }, [index]);

  return (
    <section
      id="about"
      className="relative py-20 px-4 bg-black text-white overflow-hidden"
    >
      {/* ── Interactive Particle Background ── */}
      <ParticleBackground />

      {/* ── Radial vignette overlay so content stays readable ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 50%, transparent 30%, rgba(0,0,0,0.55) 100%)",
          zIndex: 1,
        }}
      />

      {/* ── Subtle top/bottom fade strips ── */}
      <div
        className="absolute inset-x-0 top-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, black, transparent)",
          zIndex: 1,
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-24 pointer-events-none"
        style={{
          background: "linear-gradient(to top, black, transparent)",
          zIndex: 1,
        }}
      />

      {/* ── Main Content ── */}
      <div className="relative max-w-6xl mx-auto" style={{ zIndex: 2 }}>
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
            Passionate web and mobile developer dedicated to crafting exceptional
            digital experiences.
          </p>
        </motion.div>

        {/* About + Dev Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* About + Core Skills */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="space-y-6 w-full"
          >
            <p className="text-lg leading-relaxed text-white/90">
              I am{" "}
              <span className="font-bold text-pink-400">
                Queen Esther Ajanaku
              </span>
              , a web and mobile developer passionate about building modern,
              responsive, and user-friendly applications across web and mobile platforms. My work blends
              creativity with functionality, turning ideas into seamless digital
              experiences that leave an impact.
              <br />
              <br />
              Driven by curiosity and a love for problem-solving, I continuously
              explore innovative approaches to design and development. Beyond
              writing clean, efficient code, I focus on crafting solutions that
              are not only functional but also meaningful for users.
            </p>

            {/* Core Skills Buttons */}
            <div className="flex flex-wrap gap-3 pt-4">
              {coreSkills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <motion.button
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.08 }}
                    className="group flex items-center gap-2 px-5 py-2 bg-black/60 backdrop-blur-sm
                               text-white border border-pink-500/50 
                               rounded-full text-sm font-medium shadow-md cursor-default
                               hover:bg-pink-500 hover:text-black hover:shadow-pink-500/50
                               transition-all duration-300"
                    disabled
                  >
                    <Icon
                      className="w-4 h-4 text-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.85)] 
                                 animate-pulse transition-shadow duration-300 
                                 group-hover:drop-shadow-[0_0_22px_rgba(236,72,153,1)]"
                    />
                    {skill.name}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Dev Stats Code Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="bg-black/60 backdrop-blur-sm border border-pink-500/50 p-6 md:p-8 rounded-2xl shadow-lg
                       hover:shadow-pink-500/50 hover:scale-105 transition-all duration-300 w-full overflow-x-auto font-mono text-pink-400"
          >
            <h3 className="text-2xl font-bold mb-4 text-pink-400">Dev Stats</h3>
            <pre className="whitespace-pre-wrap break-words text-sm md:text-base">
              {typedCode}
              <span className="animate-blink">|</span>
            </pre>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-semibold mb-4 text-pink-500">
            Skills & Expertise
          </h3>
          <p className="text-white/80 max-w-3xl mx-auto mb-8">
            A concise collection of the tools, patterns, and practices I use to
            build reliable, fast, and user-focused applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {skillCategories.map((category, i) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1 + i * 0.12 }}
                className="group bg-gradient-to-b from-pink-900/20 to-black/60 backdrop-blur-sm rounded-xl p-6
                           border border-pink-500/30 hover:shadow-lg hover:shadow-pink-500/40
                           transition-transform hover:scale-105"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-pink-500/10 rounded-lg">
                    <Icon
                      className="w-6 h-6 text-pink-400 
                                 drop-shadow-[0_0_12px_rgba(236,72,153,0.6)] 
                                 animate-pulse
                                 transition-shadow duration-300 
                                 group-hover:drop-shadow-[0_0_22px_rgba(236,72,153,1)]"
                    />
                  </div>
                  <h4 className="text-lg font-bold text-white">
                    {category.title}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((s) => (
                    <span
                      key={s}
                      onClick={() => navigate(`/projects?tech=${encodeURIComponent(s)}`)}
                      className="px-3 py-1 bg-pink-500/10 text-white rounded-full text-sm
                                 font-medium border border-pink-400/30
                                 hover:bg-pink-500 hover:text-black hover:scale-105
                                 transition-all duration-300 cursor-pointer"
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

      <style>
        {`
          .animate-blink {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            50% { opacity: 0; }
          }
        `}
      </style>
    </section>
  );
};

export default About;
