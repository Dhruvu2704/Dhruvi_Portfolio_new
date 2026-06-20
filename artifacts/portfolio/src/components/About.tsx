import { motion } from "framer-motion";

const stats = [
  { label: "CPI", value: "9.16 / 10" },
  { label: "Projects Deployed", value: "3+" },
  { label: "GitHub Repositories", value: "20+" },
  { label: "DSA Practice", value: "LeetCode & CodeChef" },
];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-border" data-testid="about-section">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label mb-12">01 — About</p>

          <div className="grid md:grid-cols-2 gap-16">
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", color: "hsl(0 0% 28%)", lineHeight: "1.9" }}>
              <p className="mb-6">
                I'm a first-year AI &amp; Data Science engineering student who builds real systems — not just studies them. My focus is on engineering machine learning applications from concept to production.
              </p>
              <p className="mb-6">
                In February 2025, I represented Tagglabs at the Global AI Summit (Bharat Mandapam, New Delhi) — engaging 500+ attendees including founders, engineers, and investors from the AI ecosystem.
              </p>
              <p>
                Generative AI Certification — NASBA (National Association of State Boards of Accountancy).
              </p>
            </div>

            <div className="flex flex-col gap-0">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: "easeOut" }}
                  style={{ borderTop: "1px solid hsl(0 0% 88%)", paddingTop: "1.25rem", paddingBottom: "1.25rem" }}
                  data-testid={`stat-${i}`}
                >
                  <p className="section-label mb-1">{stat.label}</p>
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.5rem", color: "hsl(0 0% 5%)" }}>
                    {stat.value}
                  </p>
                </motion.div>
              ))}
              <div style={{ borderTop: "1px solid hsl(0 0% 88%)" }} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
