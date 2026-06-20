import { motion } from "framer-motion";

const stats = [
  { label: "Academic Standing", value: "9.16", unit: "CPI" },
  { label: "Projects Deployed", value: "3+", unit: "Live" },
  { label: "Repositories", value: "20+", unit: "GitHub" },
];

const skillGroups = [
  {
    domain: "Languages",
    items: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    domain: "Intelligence",
    items: ["Machine Learning", "NLP", "Feature Engineering", "Data Analysis", "Model Evaluation"],
  },
  {
    domain: "Craft",
    items: ["NumPy", "Pandas", "Scikit-Learn", "Flask", "FastAPI", "Matplotlib"],
  },
  {
    domain: "Environment",
    items: ["Git", "GitHub", "Jupyter", "VS Code", "Render", "Figma"],
  },
  {
    domain: "Foundations",
    items: ["OOP", "Data Structures", "Algorithms", "REST APIs", "Database Design"],
  },
];

export default function Engineer() {
  return (
    <section
      id="engineer"
      data-testid="engineer-section"
      style={{ padding: "10rem 2rem", maxWidth: "1200px", margin: "0 auto", position: "relative" }}
    >
      <div className="exhibit-number" style={{ position: "absolute", top: "4rem", right: 0, lineHeight: 1 }}>01</div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "1.5rem" }}>
          The Engineer
        </p>
        <div className="gold-line" style={{ marginBottom: "4rem" }} />

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem", marginBottom: "7rem" }}>
          <div>
            <h2
              className="font-serif"
              style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 300, color: "#E8E4DC", lineHeight: 1.25, marginBottom: "2rem", fontStyle: "italic" }}
            >
              A first-year student who builds real systems.
            </h2>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#7A7570", lineHeight: 1.85 }}>
              <p style={{ marginBottom: "1rem" }}>
                B.Tech CSE in AI &amp; Data Science — GLA University, Greater Noida. Expected May 2029.
              </p>
              <p style={{ marginBottom: "1rem" }}>
                Represented Tagglabs at the Global AI Summit (Bharat Mandapam, Feb 2025), engaging 500+ attendees — founders, engineers, and investors — from across the AI ecosystem.
              </p>
              <p>
                Generative AI Certification — NASBA. Active DSA practitioner on LeetCode &amp; CodeChef.
              </p>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0", borderLeft: "1px solid #1E1E22" }}>
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                style={{ padding: "2rem 2.5rem", borderBottom: "1px solid #1E1E22" }}
                data-testid={`stat-${i}`}
              >
                <p className="exhibit-label" style={{ marginBottom: "0.75rem" }}>{s.label}</p>
                <div style={{ display: "flex", alignItems: "baseline", gap: "0.75rem" }}>
                  <span
                    className="font-serif"
                    style={{ fontSize: "3rem", fontWeight: 300, color: "#C9A96E", lineHeight: 1 }}
                  >
                    {s.value}
                  </span>
                  <span className="exhibit-label">{s.unit}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "3rem" }}>
          Curated Artifacts — Skills
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
              style={{
                borderTop: "1px solid #1E1E22",
                padding: "1.75rem 0",
                display: "grid",
                gridTemplateColumns: "180px 1fr",
                gap: "2rem",
                alignItems: "start",
              }}
              data-testid={`skill-group-${i}`}
            >
              <p className="exhibit-label" style={{ color: "#C9A96E", paddingTop: "0.1rem" }}>{group.domain}</p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem 1.5rem" }}>
                {group.items.map((item) => (
                  <span
                    key={item}
                    style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "0.82rem",
                      fontWeight: 300,
                      color: "#A8A29E",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
          <div style={{ borderTop: "1px solid #1E1E22" }} />
        </div>
      </motion.div>
    </section>
  );
}
