import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contact" className="py-24 border-t border-border" data-testid="contact-section">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label mb-12">05 — Contact</p>

          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <h2
                className="font-serif mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", color: "hsl(0 0% 5%)", lineHeight: "1.2" }}
              >
                Let's Build Something Extraordinary Together.
              </h2>
              <p
                style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "hsl(0 0% 42%)", marginBottom: "2rem", lineHeight: "1.8" }}
              >
                Open to internships, collaborations, and research projects.
              </p>

              <div style={{ borderTop: "1px solid hsl(0 0% 88%)", paddingTop: "1.5rem", marginBottom: "1.5rem" }}>
                <p className="section-label mb-2">Email</p>
                <a
                  href="mailto:dhruvisrivastava27@gmail.com"
                  className="exhibit-link"
                  data-testid="contact-email"
                >
                  dhruvisrivastava27@gmail.com →
                </a>
              </div>

              <div style={{ borderTop: "1px solid hsl(0 0% 88%)", paddingTop: "1.5rem" }}>
                <p className="section-label mb-3">Elsewhere</p>
                <div className="flex flex-wrap gap-6">
                  {["GitHub", "LinkedIn", "LeetCode", "CodeChef"].map((name) => (
                    <a
                      key={name}
                      href="#"
                      className="exhibit-link"
                      data-testid={`contact-social-${name.toLowerCase()}`}
                    >
                      {name} →
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col justify-center h-full"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.85rem", color: "hsl(0 0% 28%)" }}
                >
                  <p className="section-label mb-3">Received.</p>
                  <p>Thank you for reaching out. I'll be in touch.</p>
                </motion.div>
              ) : (
                <form
                  className="flex flex-col gap-8"
                  onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
                  data-testid="contact-form"
                >
                  <div>
                    <label className="section-label block mb-2">Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      required
                      className="underline-input"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="underline-input"
                      data-testid="input-email"
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Message</label>
                    <textarea
                      placeholder="What are you working on?"
                      rows={4}
                      required
                      className="underline-input resize-none"
                      data-testid="input-message"
                    />
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="exhibit-link"
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

          <div
            style={{ borderTop: "1px solid hsl(0 0% 88%)", marginTop: "5rem", paddingTop: "1.5rem" }}
          >
            <p className="section-label">2025 Dhruvi Srivastava</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
