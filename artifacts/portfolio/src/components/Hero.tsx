import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center pt-24 pb-16"
      data-testid="hero-section"
    >
      <div className="max-w-5xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="section-label mb-8">The Work of</p>
          <h1
            className="font-serif leading-none mb-8"
            style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", color: "hsl(0 0% 5%)" }}
            data-testid="hero-name"
          >
            Dhruvi Srivastava
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
          className="section-label mb-12"
          style={{ fontSize: "0.75rem" }}
        >
          A collection of systems, experiments, and ideas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.35, ease: "easeOut" }}
          style={{ borderTop: "1px solid hsl(0 0% 88%)", paddingTop: "2rem" }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: "hsl(0 0% 42%)", lineHeight: "1.8" }}>
              <p>B.Tech CSE (AI &amp; Data Science)</p>
              <p>GLA University, Greater Noida</p>
              <p>CPI: 9.16 / 10</p>
            </div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem" }} className="flex gap-6">
              <a
                href="#"
                className="exhibit-link"
                data-testid="hero-link-github"
              >
                GitHub →
              </a>
              <a
                href="#"
                className="exhibit-link"
                data-testid="hero-link-linkedin"
              >
                LinkedIn →
              </a>
              <a
                href="#"
                className="exhibit-link"
                data-testid="hero-link-leetcode"
              >
                LeetCode →
              </a>
              <a
                href="mailto:dhruvisrivastava27@gmail.com"
                className="exhibit-link"
                data-testid="hero-link-mail"
              >
                Mail →
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="mt-16"
        >
          <a
            href="#about"
            className="section-label"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem" }}
          >
            Scroll ↓
          </a>
        </motion.div>
      </div>
    </section>
  );
}
