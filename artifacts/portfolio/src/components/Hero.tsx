import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiGithub } from "react-icons/si";
import { ChevronDown, Linkedin, Code2, ChefHat } from "lucide-react";

export default function Hero() {
  const roles = ["AI & Data Science Engineer", "ML Systems Builder", "Full-Stack Developer"];
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold font-mono tracking-tighter text-white mb-2">
              DHRUVI<br />SRIVASTAVA
            </h1>
            <div className="h-8 overflow-hidden">
              <motion.div
                key={roleIndex}
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -30, opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xl md:text-2xl text-accent font-mono"
              >
                {roles[roleIndex]}
              </motion.div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-muted-foreground text-lg max-w-lg"
          >
            Building Machine Learning Systems, Data Products, and Intelligent Applications.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <a href="#projects" className="px-8 py-3 bg-primary text-primary-foreground font-mono font-bold rounded hover:bg-primary/90 transition-colors">
              View Projects
            </a>
            <a href="#contact" className="px-8 py-3 border border-border text-foreground font-mono rounded hover:bg-white/5 transition-colors">
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="flex gap-6 pt-8 text-muted-foreground"
          >
            <a href="#" className="hover:text-white hover:scale-110 transition-all"><SiGithub size={24} /></a>
            <a href="#" className="hover:text-accent hover:scale-110 transition-all"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-orange-500 hover:scale-110 transition-all"><Code2 size={24} /></a>
            <a href="#" className="hover:text-yellow-600 hover:scale-110 transition-all"><ChefHat size={24} /></a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="glass p-6 rounded-lg font-mono text-sm md:text-base border border-border/50"
        >
          <div className="flex gap-2 mb-4 border-b border-border/50 pb-2">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
          </div>
          <div className="text-muted-foreground space-y-2">
            <p><span className="text-primary">const</span> <span className="text-white">developer</span> = {'{'}</p>
            <p className="pl-4"><span className="text-secondary">cpi</span>: <span className="text-accent">9.16</span>,</p>
            <p className="pl-4"><span className="text-secondary">projects_deployed</span>: <span className="text-accent">"3+"</span>,</p>
            <p className="pl-4"><span className="text-secondary">github_repos</span>: <span className="text-accent">"20+"</span>,</p>
            <p className="pl-4"><span className="text-secondary">ml_focus</span>: [<span className="text-green-400">"NLP"</span>, <span className="text-green-400">"Analytics"</span>, <span className="text-green-400">"Prediction"</span>]</p>
            <p>{'};'}</p>
            <p className="mt-4"><span className="text-primary">developer</span>.<span className="text-secondary">execute</span>();<span className="inline-block w-2 h-4 bg-white ml-1 animate-pulse"></span></p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-muted-foreground">
        <ChevronDown size={32} />
      </div>
    </section>
  );
}
