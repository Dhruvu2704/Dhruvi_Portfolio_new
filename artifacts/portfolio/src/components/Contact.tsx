import { motion } from "framer-motion";
import { useState } from "react";

const socials = [
  { label: "GitHub", href: "https://github.com/Dhruvu2704" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/dhruvi-srivastava-317627375/" },
  { label: "LeetCode", href: "https://leetcode.com/u/dhruvisri27/" },
  { label: "CodeChef", href: "https://www.codechef.com/users/dhruvisri27" },
  { label: "Email", href: "mailto:dhruvisrivastava27@gmail.com" },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      data-testid="contact-section"
      style={{
        borderTop: "1px solid #1E1E22",
        padding: "10rem 2rem",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div className="exhibit-number" style={{ position: "absolute", top: "4rem", right: 0 }}>06</div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "1.5rem" }}>
          End of Exhibition
        </p>
        <div className="gold-line" style={{ marginBottom: "4rem" }} />

        <h2
          className="font-serif"
          style={{
            fontSize: "clamp(2rem, 6vw, 5rem)",
            fontWeight: 300,
            fontStyle: "italic",
            color: "#E8E4DC",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            marginBottom: "1.5rem",
            maxWidth: "700px",
          }}
        >
          Let's Build Something Extraordinary Together.
        </h2>
        <p
          style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "0.85rem",
            fontWeight: 300,
            color: "#5A5550",
            marginBottom: "5rem",
          }}
        >
          Open to internships, research collaborations, and ambitious projects.
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
          <div>
            <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "2rem" }}>Find Me</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
              {socials.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease: "easeOut" }}
                  style={{ borderTop: "1px solid #1E1E22", padding: "1.25rem 0" }}
                >
                  <a href={s.href} className="museum-link" target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" data-testid={`contact-${s.label.toLowerCase()}`}>
                    {s.label} →
                  </a>
                </motion.div>
              ))}
              <div style={{ borderTop: "1px solid #1E1E22" }} />
            </div>

            <div style={{ marginTop: "2.5rem" }}>
              <p className="exhibit-label" style={{ marginBottom: "0.5rem" }}>Direct</p>
              <a
                href="mailto:dhruvisrivastava27@gmail.com"
                className="museum-link"
                style={{ fontSize: "0.78rem" }}
                data-testid="contact-email"
              >
                dhruvisrivastava27@gmail.com →
              </a>
            </div>
          </div>

          <div>
            <p className="exhibit-label" style={{ color: "#C9A96E", marginBottom: "2rem" }}>Write to Me</p>
            {sent ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                <p className="font-serif" style={{ fontSize: "1.4rem", fontWeight: 300, fontStyle: "italic", color: "#C9A96E" }}>
                  Received. I'll be in touch.
                </p>
              </motion.div>
            ) : (
              <form
                style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
                onSubmit={(e) => { e.preventDefault(); setSent(true); }}
                data-testid="contact-form"
              >
                <div>
                  <label className="exhibit-label" style={{ display: "block", marginBottom: "0.5rem" }}>Name</label>
                  <input type="text" placeholder="Your name" required className="underline-input" data-testid="input-name" />
                </div>
                <div>
                  <label className="exhibit-label" style={{ display: "block", marginBottom: "0.5rem" }}>Email</label>
                  <input type="email" placeholder="your@email.com" required className="underline-input" data-testid="input-email" />
                </div>
                <div>
                  <label className="exhibit-label" style={{ display: "block", marginBottom: "0.5rem" }}>Message</label>
                  <textarea placeholder="What are you working on?" rows={4} required className="underline-input" style={{ resize: "none" }} data-testid="input-message" />
                </div>
                <div>
                  <button
                    type="submit"
                    className="museum-link"
                    style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
                    data-testid="button-send"
                  >
                    Send →
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        <div style={{ borderTop: "1px solid #1E1E22", marginTop: "6rem", paddingTop: "2rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p className="exhibit-label">Museum of Engineering &amp; Artificial Intelligence</p>
          <p className="exhibit-label">2025 — Dhruvi Srivastava</p>
        </div>
      </motion.div>
    </section>
  );
}
