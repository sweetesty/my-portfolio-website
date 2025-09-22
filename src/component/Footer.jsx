import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Instagram, Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-pink-500">Contact Me</h3>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-pink-400" />
            <span>estherolukorede12@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-pink-400" />
            <span>+234 816 664 5592</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-pink-400" />
            <span>Abuja / Lagos, Nigeria</span>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-pink-500">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/home" className="hover:text-pink-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-pink-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a href="/projects" className="hover:text-pink-500 transition-colors">
                Projects
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-pink-500 transition-colors">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="space-y-4">
          <h3 className="text-xl font-bold text-pink-500">Follow Me</h3>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/sweetesty"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/queen-esther-ajanaku-52197b34a"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/i_am_.esther?igsh=MWowenJoOGx1dDc0Nw%3D%3D&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-white/60 text-sm">
        &copy; {new Date().getFullYear()} Esther Olukorede. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
