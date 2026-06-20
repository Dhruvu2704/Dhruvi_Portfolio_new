import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Crime Atlas",
      tag: "ML / Data Science",
      badges: ["Python", "Scikit-Learn", "Pandas", "Flask", "HTML/CSS"],
      desc: "Engineered an end-to-end ML crime analytics platform — from raw data ingestion and feature engineering to model training, REST API integration, and public cloud deployment on Render. Interactive dashboards with crime-hotspot mapping across 5+ analytical dimensions.",
      links: { github: "#", live: "#" }
    },
    {
      title: "REEL — AI Movie Recommendation",
      tag: "NLP / ML",
      badges: ["Python", "NLP", "Scikit-Learn", "Pandas", "NumPy"],
      desc: "Content-based filtering recommendation engine using CountVectorizer + cosine similarity on 5,000+ movie metadata records. Optimized vectorization and similarity pipeline for large-scale dataset queries.",
      links: { github: "#" }
    },
    {
      title: "NexusCRM",
      tag: "Full-Stack",
      badges: ["Python", "Flask", "SQLAlchemy", "HTML/CSS"],
      desc: "Full-stack CRM with role-based authentication, CRUD operations, and relational database integration. Modular backend with RESTful API endpoints for scalable customer lifecycle management.",
      links: { github: "#" }
    },
    {
      title: "Hospital Management System",
      tag: "Systems",
      badges: ["C", "Data Structures", "File Handling"],
      desc: "Console-based system managing patients, doctors, and appointments using modular architecture and file-based persistent storage in C.",
      links: {}
    }
  ];

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-mono font-bold text-white mb-2">/projects</h2>
          <div className="w-20 h-1 bg-accent"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-xl relative group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="absolute top-4 right-4 text-xs font-mono text-accent bg-accent/10 px-3 py-1 rounded-full border border-accent/20">
                {project.tag}
              </div>
              <h3 className="text-2xl font-bold text-white mb-4 mt-2">{project.title}</h3>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.badges.map(badge => (
                  <span key={badge} className="text-xs font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                    {badge}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground mb-6 line-clamp-3 group-hover:line-clamp-none transition-all">
                {project.desc}
              </p>
              <div className="flex gap-4">
                {project.links.github && (
                  <a href={project.links.github} className="text-white hover:text-primary transition-colors flex items-center gap-2">
                    <SiGithub size={20} /> <span className="font-mono text-sm">Code</span>
                  </a>
                )}
                {project.links.live && (
                  <a href={project.links.live} className="text-white hover:text-secondary transition-colors flex items-center gap-2">
                    <ExternalLink size={20} /> <span className="font-mono text-sm">Live</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
