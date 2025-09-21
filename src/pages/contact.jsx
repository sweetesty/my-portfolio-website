import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_f0wmeh1",
        "template_lgrw5qq",
        formRef.current,
        "Z8SwknkaMy0V1HuD5"
      )
      .then(
        () => {
          alert("Message sent! Thank you for reaching out.");
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send. Please try again later.");
          console.error(error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  const availableFor = ["Freelance Projects", "Collaborations", "Remote Work", "Full-time Roles"];

  return (
    <section id="contact" className="py-20 px-4 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Let’s Build Something Amazing 🚀
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Got an idea, project, or collaboration in mind? I’d love to hear from you.
            Whether it’s creating sleek designs, building powerful apps, or solving tough problems — let’s make it happen together.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="bg-black border border-pink-500/50 p-8 rounded-2xl shadow-lg space-y-6"
            whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.4)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
              whileFocus={{ scale: 1.02, borderColor: "#f472b6" }}
            />
            <motion.input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
              whileFocus={{ scale: 1.02, borderColor: "#f472b6" }}
            />
            <motion.textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
              whileFocus={{ scale: 1.02, borderColor: "#f472b6" }}
            />
            <motion.button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-pink-500 text-black font-bold py-3 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <div className="space-y-6">
            {[{
              icon: Mail, title: "Email", content: "estherolukorede12@gmail.com"
            },{
              icon: Phone, title: "Phone", content: "+234 816 664 5592"
            },{
              icon: MapPin, title: "Location", content: "Abuja, Nigeria\nLagos, Nigeria"
            }].map((item, idx) => (
              <motion.div
                key={idx}
                className="flex items-center gap-4 p-6 border border-pink-500/30 rounded-xl hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
              >
                <div className="p-3 bg-pink-500/20 rounded-lg">
                  <item.icon className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{item.title}</h3>
                  {item.content.split("\n").map((line, i) => (
                    <p key={i} className="text-white/80">{line}</p>
                  ))}
                </div>
              </motion.div>
            ))}

            
            <motion.div
              className="pt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-pink-400">Available for:</h3>
              <motion.ul
                className="space-y-2 text-white/80"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {availableFor.map((item, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-2 cursor-pointer"
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      visible: { opacity: 1, x: 0 },
                    }}
                    whileHover={{ scale: 1.05, color: "#f472b6" }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <motion.div
                      className="w-2 h-2 bg-pink-500 rounded-full"
                      animate={{ scale: [1, 1.3, 1], opacity: [0.8, 1, 0.8] }}
                      transition={{ repeat: Infinity, duration: 1.2, delay: idx * 0.2 }}
                    ></motion.div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
