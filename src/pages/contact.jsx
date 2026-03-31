import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: -60,
      rotate: -2,
    },
    show: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 12,
      },
    },
  };

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
      .then(() => {
        alert("Message sent! Thank you for reaching out.");
        formRef.current.reset();
      })
      .catch((error) => {
        alert("Failed to send. Please try again later.");
        console.error(error.text);
      })
      .finally(() => setLoading(false));
  };

  const availableFor = [
    "Freelance Projects",
    "Collaborations",
    "Remote Work",
    "Full-time Roles",
  ];

  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      content: "estherolukorede12@gmail.com",
      link: "mailto:estherolukorede12@gmail.com",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 816 664 5592",
      link: "tel:+2348166645592",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Chat on WhatsApp",
      link: "https://wa.me/2348166645592?text=Hello%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20work%20with%20you",
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Abuja, Nigeria\nLagos, Nigeria",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">

    
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Let’s Build Something Amazing 🚀
          </motion.h2>

          <motion.p
            className="text-xl text-white/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Got an idea, project, or collaboration in mind? I’d love to hear from you.
          </motion.p>
        </div>

  
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
        >

          
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            variants={itemVariants}
            className="bg-black border border-pink-500/50 p-8 rounded-2xl shadow-lg space-y-6"
          >
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50"
            />

            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50"
            />

            <textarea
              name="message"
              placeholder="Your Message"
              rows={6}
              required
              className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50 resize-none"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-pink-500 text-black font-bold py-3 rounded-lg disabled:opacity-50"
            >
              <Send className="w-4 h-4" />
              {loading ? "Sending..." : "Send Message"}
            </button>
          </motion.form>

        
          <motion.div className="space-y-6" variants={containerVariants}>

            {contactItems.map((item, idx) => {
              const Wrapper = item.link ? motion.a : motion.div;

              return (
                <Wrapper
                  key={idx}
                  href={item.link}
                  target={item.link?.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  variants={itemVariants}
                  className="flex items-center gap-4 p-6 border border-pink-500/30 rounded-xl"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className="p-3 rounded-lg bg-pink-500/20">
                    <item.icon className="w-6 h-6 text-pink-400" />
                  </div>

                  <div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                    {item.content.split("\n").map((line, i) => (
                      <p key={i} className="text-white/80">
                        {line}
                      </p>
                    ))}
                  </div>
                </Wrapper>
              );
            })}

      
            <motion.div variants={itemVariants} className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-pink-400">
                Available for:
              </h3>

              <ul className="space-y-2 text-white/80">
                {availableFor.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      
      <motion.a
        href="https://wa.me/2348166645592"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg"
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
      >
        <MessageCircle className="text-white w-6 h-6" />
      </motion.a>
    </section>
  );
};

export default Contact;