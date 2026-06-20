import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { label: "CPI", value: "9.16/10" },
    { label: "Projects Deployed", value: "3+" },
    { label: "GitHub Repos", value: "20+" },
    { label: "DSA", value: "LeetCode & CodeChef" },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-mono font-bold text-white mb-2">/about</h2>
          <div className="w-20 h-1 bg-primary"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-muted-foreground text-lg leading-relaxed"
          >
            <p>
              I'm a 1st-year AI & Data Science student who builds real things, not just learns them. 
              My focus is on engineering machine learning systems and intelligent applications from 
              concept to production.
            </p>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-white font-mono mb-2">Education</h3>
              <p>B.Tech CSE (AI & Data Science)</p>
              <p>GLA University, Greater Noida</p>
              <p>Expected May 2029</p>
            </div>
            <div className="space-y-4">
              <div className="border-l-2 border-primary pl-4">
                <p className="text-white">Represented Tagglabs at Global AI Summit (Feb 2025)</p>
                <p className="text-sm">Engaged 500+ attendees including founders, engineers, and investors.</p>
              </div>
              <div className="border-l-2 border-secondary pl-4">
                <p className="text-white">Generative AI Certification</p>
                <p className="text-sm">NASBA Certified</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="glass p-6 rounded-lg flex flex-col justify-center items-center text-center hover:border-primary/50 transition-colors">
                <span className="text-2xl font-bold font-mono text-white mb-2">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
