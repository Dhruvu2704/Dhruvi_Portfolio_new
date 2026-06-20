import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-mono font-bold text-white mb-2">/experience</h2>
          <div className="w-20 h-1 bg-pink-500"></div>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2">
            <div className="w-full h-1/2 bg-gradient-to-b from-primary to-pink-500"></div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:w-1/2 md:pr-12 md:ml-auto md:text-left relative"
          >
            <div className="hidden md:block absolute top-6 -left-3 w-6 h-6 rounded-full bg-background border-2 border-primary z-10"></div>
            
            <div className="glass p-8 rounded-xl border border-primary/20 hover:border-primary/50 transition-colors">
              <h3 className="text-xl font-bold text-white mb-1">Event Promoter & AI Tech Showcase Representative</h3>
              <div className="text-primary font-mono text-sm mb-4">Tagglabs | Feb 2025 | Bharat Mandapam, New Delhi</div>
              
              <ul className="space-y-3 text-muted-foreground list-disc pl-4">
                <li>Represented Tagglabs at the Global AI Summit, engaging 500+ attendees including founders, engineers, and investors from the AI ecosystem.</li>
                <li>Showcased AI-powered products and interactive demos; strengthened stakeholder communication and professional networking.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
