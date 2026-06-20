import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: "0 2rem 6rem",
        maxWidth: "1200px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1px",
          height: "120px",
          background: "linear-gradient(to bottom, transparent, #C9A96E44, transparent)",
          opacity: 0.6,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <p className="exhibit-label" style={{ marginBottom: "2rem", color: "#C9A96E" }}>
          Museum of Engineering &amp; Artificial Intelligence
        </p>

        <h1
          className="font-serif"
          data-testid="hero-name"
          style={{
            fontSize: "clamp(3.5rem, 9vw, 9rem)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.02em",
            color: "#E8E4DC",
            marginBottom: "3rem",
          }}
        >
          Dhruvi<br />
          <span style={{ fontStyle: "italic", color: "#C9A96E" }}>Srivastava</span>
        </h1>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.35rem", marginBottom: "4rem" }}>
          {["Engineer.", "Builder.", "AI Explorer."].map((word, i) => (
            <motion.p
              key={word}
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.4 + i * 0.15, ease: "easeOut" }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
                fontWeight: 300,
                color: i === 0 ? "#E8E4DC" : "#7A7570",
                letterSpacing: "0.02em",
              }}
            >
              {word}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1, ease: "easeOut" }}
          style={{ display: "flex", alignItems: "center", gap: "2rem" }}
        >
          <div className="gold-line" />
          <p className="exhibit-label">Scroll to enter the exhibition</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
