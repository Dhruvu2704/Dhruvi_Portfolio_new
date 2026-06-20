import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { Linkedin, Code2, ChefHat } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative z-10">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-white mb-6">
            Let's Build Something Extraordinary Together.
          </h2>
          <p className="text-xl text-muted-foreground">
            Open to internships, collaborations, and projects. Let's connect.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="glass p-8 rounded-xl space-y-8">
              <div>
                <h3 className="text-sm font-mono text-primary mb-2">EMAIL</h3>
                <a href="mailto:dhruvisrivastava27@gmail.com" className="text-lg text-white hover:text-accent transition-colors">
                  dhruvisrivastava27@gmail.com
                </a>
              </div>
              
              <div>
                <h3 className="text-sm font-mono text-primary mb-4">SOCIALS</h3>
                <div className="flex gap-4">
                  <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-primary/20 text-white transition-all hover:-translate-y-1"><Linkedin size={24} /></a>
                  <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-white/20 text-white transition-all hover:-translate-y-1"><SiGithub size={24} /></a>
                  <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-orange-500/20 text-white transition-all hover:-translate-y-1"><Code2 size={24} /></a>
                  <a href="#" className="p-3 bg-white/5 rounded-full hover:bg-yellow-600/20 text-white transition-all hover:-translate-y-1"><ChefHat size={24} /></a>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form className="glass p-8 rounded-xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className="w-full bg-transparent border-b border-border py-2 text-white placeholder:text-muted-foreground focus:outline-none border-glow transition-colors"
                />
              </div>
              <div>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-transparent border-b border-border py-2 text-white placeholder:text-muted-foreground focus:outline-none border-glow transition-colors"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Message" 
                  rows={4}
                  className="w-full bg-transparent border-b border-border py-2 text-white placeholder:text-muted-foreground focus:outline-none border-glow transition-colors resize-none"
                />
              </div>
              <button className="px-6 py-3 bg-primary text-white font-mono font-bold rounded hover:bg-primary/80 transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.5)] mt-4">
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
