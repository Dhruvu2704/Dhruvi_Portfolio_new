import { motion } from "framer-motion";

const exhibits = [
  {
    number: "01",
    id: "crime-atlas",
    title: "Crime Atlas",
    subtitle: "ML Crime Analytics Platform",
    tagline: "The challenge wasn't collecting data.\nIt was uncovering patterns hidden inside it.",
    domain: "Machine Learning · Data Science",
    stack: ["Python", "Scikit-Learn", "Pandas", "Flask", "HTML/CSS"],
    panels: [
      {
        label: "Problem",
        text: "Crime data exists in abundance. Actionable insight does not. Analysts needed tools that surface hidden patterns — not just tables of numbers.",
      },
      {
        label: "Investigation",
        text: "Raw data ingestion and cleaning. Feature engineering across 5+ analytical dimensions. Model training with Scikit-Learn. REST API design with Flask.",
      },
      {
        label: "Technology",
        text: "End-to-end ML pipeline: preprocessing → model training → prediction → visualization. Interactive dashboards with dynamic crime-hotspot mapping.",
      },
      {
        label: "Deployment",
        text: "Publicly accessible live application deployed on Render. The full lifecycle — from raw CSV to production URL — engineered from scratch.",
      },
    ],
    links: { github: "https://github.com/Dhruvu2704/Crime_Atlas", live: "https://crime-atlas.onrender.com" },
  },
  {
    number: "02",
    id: "reel",
    title: "REEL",
    subtitle: "AI Movie Recommendation Engine",
    tagline: "5,000+ movies. One user.\nInfinite possibilities, one answer.",
    domain: "NLP · Machine Learning",
    stack: ["Python", "NLP", "Scikit-Learn", "Pandas", "NumPy"],
    panels: [
      {
        label: "CountVectorizer",
        text: "Transformed raw movie metadata into high-dimensional feature vectors — capturing genre, cast, crew, and keywords into a single representation.",
      },
      {
        label: "Cosine Similarity",
        text: "Measured the angular distance between film feature vectors to surface the most semantically adjacent titles for any given query.",
      },
      {
        label: "Recommendation Engine",
        text: "Optimized vectorization and similarity computation pipeline, reducing query latency on large-scale datasets while maintaining recommendation accuracy.",
      },
      {
        label: "Interface",
        text: "Integrated the ML backend with a responsive UI, creating a seamless end-to-end experience from query input to ranked recommendation output.",
      },
    ],
    links: { github: "https://github.com/Dhruvu2704/REEL_ML_Model" },
  },
  {
    number: "03",
    id: "nexuscrm",
    title: "NexusCRM",
    subtitle: "Customer Relationship Management Platform",
    tagline: "Enterprise-grade architecture.\nBuilt from the ground up.",
    domain: "Full-Stack · Systems Design",
    stack: ["Python", "Flask", "SQLAlchemy", "HTML/CSS"],
    panels: [
      {
        label: "Authentication",
        text: "Role-based access control with secure session management. Different permission tiers govern what each user class can view, create, and modify.",
      },
      {
        label: "Data Architecture",
        text: "Relational database design with SQLAlchemy ORM. Complete CRUD operations across customer, interaction, and pipeline entities.",
      },
      {
        label: "API Layer",
        text: "Modular RESTful API endpoints built with Flask, supporting scalable customer lifecycle management workflows and external integration points.",
      },
      {
        label: "Interface",
        text: "Responsive dashboards that reduced manual data management overhead — operational efficiency through thoughtful UI, not just raw functionality.",
      },
    ],
    links: { github: "https://github.com/Dhruvu2704/NexusCRM_Python" },
  },
  {
    number: "04",
    id: "hms",
    title: "Hospital Management System",
    subtitle: "Systems Programming — The Foundation Exhibit",
    tagline: "Before the frameworks.\nBefore the libraries.\nJust C.",
    domain: "Systems · C Programming",
    stack: ["C", "Data Structures", "File Handling"],
    panels: [
      {
        label: "Constraint",
        text: "No frameworks. No ORMs. No abstractions. A console-based system built entirely with C and a file system as the persistence layer.",
      },
      {
        label: "Architecture",
        text: "Modular design with separation of concerns across patient, doctor, and appointment management modules. Each module handles its own data lifecycle.",
      },
      {
        label: "Data Structures",
        text: "Custom implementations of the data structures needed — not imported, not abstracted. Written from first principles to understand the foundation.",
      },
      {
        label: "Persistence",
        text: "File-based storage system replacing a database. Binary and text file handling for durable, crash-safe data across program sessions.",
      },
    ],
    links: { github: "https://github.com/Dhruvu2704/C_Project_2" },
  },
];

export default function Exhibitions() {
  return (
    <section
      id="exhibitions"
      data-testid="exhibitions-section"
      style={{ padding: "4rem 0 10rem" }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem", marginBottom: "6rem" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "1.5rem" }}>
            Exhibitions
          </p>
          <div className="gold-line" />
        </motion.div>
      </div>

      {exhibits.map((exhibit, idx) => (
        <motion.div
          key={exhibit.id}
          id={exhibit.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1, ease: "easeOut" }}
          style={{
            borderTop: "1px solid #1E1E22",
            padding: "6rem 2rem",
            position: "relative",
            overflow: "hidden",
          }}
          data-testid={`exhibit-${idx}`}
        >
          <div className="exhibit-number" style={{ position: "absolute", top: "2rem", right: "1rem" }}>
            {exhibit.number}
          </div>

          <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", marginBottom: "5rem" }}>
              <div>
                <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "1.25rem" }}>
                  Exhibition {exhibit.number} — {exhibit.domain}
                </p>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 5rem)",
                    fontWeight: 300,
                    color: "#E8E4DC",
                    lineHeight: 1.05,
                    letterSpacing: "-0.02em",
                    marginBottom: "1.5rem",
                  }}
                >
                  {exhibit.title}
                </h2>
                <p
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "0.78rem",
                    fontWeight: 300,
                    color: "#5A5550",
                    letterSpacing: "0.04em",
                    marginBottom: "3rem",
                    fontStyle: "italic",
                  }}
                >
                  {exhibit.subtitle}
                </p>

                <p
                  className="font-serif"
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 300,
                    color: "#A8A29E",
                    lineHeight: 1.7,
                    fontStyle: "italic",
                    whiteSpace: "pre-line",
                    marginBottom: "3rem",
                  }}
                >
                  "{exhibit.tagline}"
                </p>

                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem 1rem", marginBottom: "3rem" }}>
                  {exhibit.stack.map((tech) => (
                    <span
                      key={tech}
                      className="exhibit-label"
                      style={{
                        border: "1px solid #2A2A2E",
                        padding: "0.35rem 0.75rem",
                        color: "#7A7570",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "2rem" }}>
                  {exhibit.links.github && (
                    <a href={exhibit.links.github} className="museum-link" target="_blank" rel="noopener noreferrer" data-testid={`exhibit-${idx}-github`}>
                      GitHub →
                    </a>
                  )}
                  {exhibit.links.live && (
                    <a href={exhibit.links.live} className="museum-link" target="_blank" rel="noopener noreferrer" data-testid={`exhibit-${idx}-live`}>
                      Live Demo →
                    </a>
                  )}
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
                {exhibit.panels.map((panel, pi) => (
                  <motion.div
                    key={pi}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: pi * 0.1, ease: "easeOut" }}
                    style={{
                      borderTop: "1px solid #1E1E22",
                      padding: "1.75rem 0 1.75rem 2rem",
                    }}
                  >
                    <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "0.75rem" }}>
                      {panel.label}
                    </p>
                    <p
                      style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "0.82rem",
                        fontWeight: 300,
                        color: "#7A7570",
                        lineHeight: 1.8,
                      }}
                    >
                      {panel.text}
                    </p>
                  </motion.div>
                ))}
                <div style={{ borderTop: "1px solid #1E1E22" }} />
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
