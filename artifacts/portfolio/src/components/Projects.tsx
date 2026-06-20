import { motion } from "framer-motion";

const exhibits = [
  {
    number: "Exhibit I",
    title: "Crime Atlas",
    subtitle: "ML Crime Analytics Platform",
    stack: "Python · Scikit-Learn · Pandas · Flask · HTML/CSS",
    story: "Started as a question — can raw crime data reveal patterns that prevent harm? Built an end-to-end platform from data ingestion to deployment.",
    problem: "Crime data exists but insight doesn't. Analysts need tools that surface patterns, not just numbers.",
    process: "Raw data ingestion → Feature engineering → Scikit-Learn model training → Flask REST API → Interactive dashboard → Deployed on Render.",
    outcome: "A publicly accessible live application with crime-hotspot mapping across 5+ analytical dimensions.",
    links: { github: "#", live: "#" },
  },
  {
    number: "Exhibit II",
    title: "REEL",
    subtitle: "AI Movie Recommendation Engine",
    stack: "Python · NLP · Scikit-Learn · Pandas · NumPy",
    story: "A recommendation problem. 5,000+ movies, one user, infinite options.",
    problem: "How do you recommend what someone doesn't know they want yet?",
    process: "CountVectorizer → cosine similarity on movie metadata → optimized vectorization pipeline → responsive UI.",
    outcome: "A personalized recommendation engine with measurably faster query performance on large datasets.",
    links: { github: "#" },
  },
  {
    number: "Exhibit III",
    title: "NexusCRM",
    subtitle: "Customer Relationship Management Platform",
    stack: "Python · Flask · SQLAlchemy · HTML/CSS",
    story: "Built to understand what goes into enterprise-grade software — auth, data, scale.",
    problem: "Most CRM tutorials scratch the surface. This one goes deep.",
    process: "Role-based authentication → CRUD operations → SQLAlchemy ORM → RESTful API endpoints → Modular architecture.",
    outcome: "A production-ready CRM with responsive dashboards and scalable customer lifecycle management.",
    links: { github: "#" },
  },
  {
    number: "Exhibit IV",
    title: "Hospital Management System",
    subtitle: "Systems Programming",
    stack: "C · Data Structures · File Handling",
    story: "Before frameworks and libraries — understanding the foundation.",
    problem: "How do you build a real system with no libraries, just C and a file system?",
    process: "Modular architecture → file-based persistent storage → data structures for patient, doctor, and appointment management.",
    outcome: "A working console-based management system built from first principles.",
    links: {},
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 border-t border-border" data-testid="projects-section">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label mb-4">03 — Projects</p>
          <p
            className="mb-12"
            style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", color: "hsl(0 0% 42%)" }}
          >
            Projects become exhibits.
          </p>
        </motion.div>

        <div className="flex flex-col">
          {exhibits.map((ex, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              style={{ borderTop: "1px solid hsl(0 0% 88%)", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}
              data-testid={`exhibit-${i}`}
            >
              <p className="section-label mb-3">{ex.number}</p>
              <h3
                className="font-serif mb-1"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "hsl(0 0% 5%)", lineHeight: "1.15" }}
              >
                {ex.title}
              </h3>
              <p
                className="mb-8"
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "hsl(0 0% 42%)", fontStyle: "italic" }}
              >
                {ex.subtitle} — {ex.stack}
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "hsl(0 0% 28%)", lineHeight: "1.8" }}>
                  <p className="section-label mb-2">Background</p>
                  <p>{ex.story}</p>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "hsl(0 0% 28%)", lineHeight: "1.8" }}>
                  <p className="section-label mb-2">Problem</p>
                  <p>{ex.problem}</p>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "hsl(0 0% 28%)", lineHeight: "1.8" }}>
                  <p className="section-label mb-2">Process</p>
                  <p>{ex.process}</p>
                </div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "hsl(0 0% 28%)", lineHeight: "1.8" }}>
                  <p className="section-label mb-2">Outcome</p>
                  <p>{ex.outcome}</p>
                </div>
              </div>

              <div className="flex gap-6">
                {ex.links.github && (
                  <a href={ex.links.github} className="exhibit-link" data-testid={`exhibit-${i}-github`}>
                    GitHub →
                  </a>
                )}
                {ex.links.live && (
                  <a href={ex.links.live} className="exhibit-link" data-testid={`exhibit-${i}-live`}>
                    Live Demo →
                  </a>
                )}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid hsl(0 0% 88%)" }} />
        </div>
      </div>
    </section>
  );
}
