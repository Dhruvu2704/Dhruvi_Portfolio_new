import { motion } from "framer-motion";

export default function Experience() {
  return (
    <section id="experience" className="py-24 border-t border-border" data-testid="experience-section">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label mb-12">04 — Experience</p>

          <div style={{ borderTop: "1px solid hsl(0 0% 88%)", paddingTop: "2.5rem", paddingBottom: "2.5rem" }}>
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <p className="section-label mb-3">Position</p>
                <p
                  className="font-serif mb-1"
                  style={{ fontSize: "1.15rem", color: "hsl(0 0% 5%)", lineHeight: "1.4" }}
                >
                  Event Promoter &amp; AI Tech Showcase Representative
                </p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "hsl(0 0% 42%)", marginTop: "0.5rem" }}>
                  Tagglabs
                </p>
              </div>

              <div>
                <p className="section-label mb-3">Event</p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", color: "hsl(0 0% 18%)", lineHeight: "1.8" }}>
                  Global AI Summit
                </p>
                <p style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "hsl(0 0% 42%)", marginTop: "0.25rem" }}>
                  February 2025
                  <br />
                  Bharat Mandapam, New Delhi
                </p>
              </div>

              <div>
                <p className="section-label mb-3">Highlights</p>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: "hsl(0 0% 28%)", lineHeight: "1.85" }}>
                  <p className="mb-4">
                    Represented Tagglabs at the Global AI Summit, engaging 500+ attendees including founders, engineers, and investors from the AI ecosystem.
                  </p>
                  <p>
                    Showcased AI-powered products and interactive demos; strengthened stakeholder communication and professional networking in a premier national technology event.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div style={{ borderTop: "1px solid hsl(0 0% 88%)" }} />
        </motion.div>
      </div>
    </section>
  );
}
