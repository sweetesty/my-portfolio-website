import React, { useState, useEffect } from "react";
import { Menu, X, Download } from "lucide-react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("portfolio-theme") || "pink");

  useEffect(() => {
    if (theme === "pink") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", theme);
    }
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  const themes = [
    { id: "pink", color: "bg-pink-500", name: "Pink" },
    { id: "emerald", color: "bg-emerald-500", name: "Emerald" },
    { id: "indigo", color: "bg-indigo-500", name: "Indigo" },
    { id: "orange", color: "bg-orange-500", name: "Orange" },
    { id: "mono", color: "bg-white border border-zinc-400", name: "Black & White" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md border-b border-pink-500/10">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <NavLink
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent"
        >
          Esther
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `relative group text-sm font-medium transition-colors ${
                  isActive ? "text-pink-500" : "text-white hover:text-pink-500"
                }`
              }
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </NavLink>
          ))}

          {/* Theme Selector Desktop */}
          <div className="flex gap-2 items-center bg-zinc-950 px-3 py-2 rounded-full border border-pink-500/20 ml-2">
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => setTheme(t.id)}
                title={`Switch to ${t.name} theme`}
                className={`w-3.5 h-3.5 rounded-full transition-all duration-200 cursor-pointer ${t.color} ${
                  theme === t.id ? "scale-125 ring-2 ring-white" : "hover:scale-115 opacity-70 hover:opacity-100"
                }`}
              />
            ))}
          </div>

          <a
            href="/Resume Ajanaku Queen Esther.pdf"
            download
            className="ml-2 bg-pink-500 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-pink-600 shadow-md hover:shadow-pink-500/40 transition-all duration-300"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:text-pink-500 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-black px-6 py-4 flex flex-col space-y-4 border-t border-pink-500/30">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-lg font-medium transition-colors block ${
                  isActive ? "text-pink-500" : "text-white hover:text-pink-500"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}

          {/* Theme Selector Mobile */}
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-950 rounded-lg border border-pink-500/20">
            <span className="text-white/60 text-sm">Accent Theme:</span>
            <div className="flex gap-3">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  className={`w-5 h-5 rounded-full transition-all duration-200 cursor-pointer ${t.color} ${
                    theme === t.id ? "scale-115 ring-2 ring-white" : "opacity-75"
                  }`}
                />
              ))}
            </div>
          </div>

          <a
            href="/Resume Ajanaku Queen Esther.pdf"
            download
            className="bg-pink-500 text-black px-4 py-2 rounded-lg flex items-center justify-center gap-2 font-medium hover:bg-pink-600 shadow-md hover:shadow-pink-500/40 transition-all duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
