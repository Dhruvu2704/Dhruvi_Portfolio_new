import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section
      id="experience"
      data-testid="experience-section"
      style={{
        padding: "10rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
        borderTop: "1px solid #1E1E22",
      }}
    >
      <div className="exhibit-number" style={{ position: "absolute", top: "4rem", right: 0 }}>05</div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "1.5rem" }}>
          Field Experience
        </p>
        <div className="gold-line" style={{ marginBottom: "5rem" }} />

        <div style={{ display: "grid", gridTemplateColumns: "240px 1fr", gap: "5rem" }}>
          <div>
            <p className="exhibit-label" style={{ marginBottom: "1rem" }}>Date &amp; Venue</p>
            <p
              className="font-serif"
              style={{ fontSize: "1.05rem", fontWeight: 300, color: "#E8E4DC", lineHeight: 1.6, marginBottom: "0.5rem" }}
            >
              February 2025
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.78rem", fontWeight: 300, color: "#5A5550" }}>
              Bharat Mandapam<br />New Delhi, India
            </p>
          </div>

          <div>
            <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "1rem" }}>
              Global AI Summit — Tagglabs
            </p>
            <h3
              className="font-serif"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", fontWeight: 300, color: "#E8E4DC", lineHeight: 1.2, marginBottom: "2.5rem", fontStyle: "italic" }}
            >
              Event Promoter &amp; AI Tech Showcase Representative
            </h3>

            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {[
                "Represented Tagglabs at the Global AI Summit, engaging 500+ attendees including founders, engineers, and investors from across the AI ecosystem.",
                "Showcased AI-powered products and interactive demos. Strengthened stakeholder communication and professional networking in a premier national technology event.",
              ].map((text, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
                  style={{ borderTop: "1px solid #1E1E22", padding: "1.5rem 0" }}
                >
                  <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "0.85rem", fontWeight: 300, color: "#7A7570", lineHeight: 1.85 }}>
                    {text}
                  </p>
                </motion.div>
              ))}
              <div style={{ borderTop: "1px solid #1E1E22" }} />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
