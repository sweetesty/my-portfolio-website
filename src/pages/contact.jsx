import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";
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

  const availableFor = [
    "Freelance Projects",
    "Collaborations",
    "Remote Work",
    "Full-time Roles"
  ];

  
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      content: "estherolukorede12@gmail.com",
      link: "mailto:estherolukorede12@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+234 816 664 5592",
      link: "tel:+2348166645592"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Chat on WhatsApp",
      link: "https://wa.me/2348166645592?text=Hello%20I%20saw%20your%20portfolio%20and%20I'd%20like%20to%20work%20with%20you"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Abuja, Nigeria\nLagos, Nigeria"
    }
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
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">

          
         {/* Form */} <motion.form ref={formRef} onSubmit={handleSubmit}
          className="bg-black border border-pink-500/50 p-8 rounded-2xl shadow-lg space-y-6" whileHover={{ scale: 1.02, boxShadow: "0px 10px 30px rgba(236, 72, 153, 0.4)" }} 
          transition={{ duration: 0.3 }} >
             <motion.input type="text" name="user_name" placeholder="Your Name" required className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500"
              whileFocus={{ scale: 1.02, borderColor: "#f472b6" }} /> 
              <motion.input type="email" name="user_email"
               placeholder="Your Email" required className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500" 
               whileFocus={{ scale: 1.02, borderColor: "#f472b6" }} />
                <motion.textarea name="message" placeholder="Your Message" rows={6} required 
                className="w-full p-3 rounded-lg bg-black border border-pink-500/50 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-pink-500 resize-none"
                 whileFocus={{ scale: 1.02, borderColor: "#f472b6" }} /> <motion.button type="submit" disabled={loading}
                  className="w-full flex items-center justify-center gap-2 bg-pink-500 text-black font-bold py-3 rounded-lg shadow-md disabled:opacity-50 disabled:cursor-not-allowed" whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 300 }} > <Send className="w-4 h-4" /> {loading ? "Sending..." : "Send Message"} </motion.button> </motion.form>

          
          <div className="space-y-6">
            {contactItems.map((item, idx) => {
              const Wrapper = item.link ? "a" : "div";

              return (
                <motion.div key={idx}>
                  <Wrapper
                    href={item.link}
                    target={item.link?.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-6 border border-pink-500/30 rounded-xl hover:shadow-lg hover:shadow-pink-500/40 transition-all duration-300"
                  >
                    <div
                      className={`p-3 rounded-lg ${
                        item.title === "WhatsApp"
                          ? "bg-green-500/20"
                          : "bg-pink-500/20"
                      }`}
                    >
                      <item.icon
                        className={`w-6 h-6 ${
                          item.title === "WhatsApp"
                            ? "text-green-400"
                            : "text-pink-400"
                        }`}
                      />
                    </div>

                    <div>
                      <h3 className="font-bold text-lg">{item.title}</h3>
                      {item.content.split("\n").map((line, i) => (
                        <p key={i} className="text-white/80">{line}</p>
                      ))}
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}

            
            <div className="pt-6">
              <h3 className="text-xl font-bold mb-4 text-pink-400">
                Available for:
              </h3>
              <ul className="space-y-2 text-white/80">
                {availableFor.map((item, idx) => (
                  <li key={idx}>• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

  
      <a
        href="https://wa.me/2348166645592"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:scale-110 transition"
      >
        <MessageCircle className="text-white w-6 h-6" />
      </a>
    </section>
  );
};

export default Contact;