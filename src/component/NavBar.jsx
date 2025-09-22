import React, { useState } from "react";
import { Menu, X, Download } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About", path: "/about" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "contact", label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black shadow-md">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-20">
        <a
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent"
        >
          Esther
        </a>

        
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="relative group text-white text-sm font-medium transition-colors hover:text-pink-500"
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          ))}

          <a
            href="/Resume Ajanaku Queen Esther.pdf"
            download
            className="ml-4 bg-pink-500 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-pink-600 shadow-md hover:shadow-pink-500/40 transition-all duration-300"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </div>

        
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-white hover:text-pink-500 transition-colors"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      {isMenuOpen && (
        <div className="md:hidden bg-black px-6 py-4 flex flex-col space-y-4 border-t border-pink-500/30">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.path}
              className="relative px-4 py-2 text-white text-lg font-medium transition-colors hover:text-pink-500"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-pink-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300"></span>
            </a>
          ))}

          <a
            href="/Esther_CV.pdf"
            download
            className="bg-pink-500 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-medium hover:bg-pink-600 shadow-md hover:shadow-pink-500/40 transition-all duration-300"
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
