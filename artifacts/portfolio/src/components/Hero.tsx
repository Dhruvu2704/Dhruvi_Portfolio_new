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
        background: `
          radial-gradient(
            circle at 35% 55%,
            rgba(212,175,55,0.12) 0%,
            rgba(212,175,55,0.05) 25%,
            transparent 60%
          )
        `,
      }}
    >
      {/* Vertical museum guide line */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "1px",
          height: "140px",
          background:
            "linear-gradient(to bottom, transparent, rgba(212,175,55,0.5), transparent)",
          opacity: 0.8,
        }}
      />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Museum Label */}
        <p
          className="exhibit-label"
          style={{
            marginBottom: "2rem",
            color: "#D4AF37",
            letterSpacing: "0.18em",
          }}
        >
          Museum of Engineering & Artificial Intelligence
        </p>

        {/* Name */}
        <h1
          className="font-serif"
          data-testid="hero-name"
          style={{
            fontSize: "clamp(4rem, 10vw, 10rem)",
            fontWeight: 300,
            lineHeight: 0.95,
            letterSpacing: "-0.03em",
            color: "#F5F1EA",
            marginBottom: "1.5rem",
            textShadow: "0 0 30px rgba(212,175,55,0.08)",
          }}
        >
          Dhruvi
          <br />
          <span
            style={{
              fontStyle: "italic",
              color: "#D4AF37",
            }}
          >
            Srivastava
          </span>
        </h1>

        {/* Quick Stats */}
        <div
          style={{
            display: "flex",
            gap: "1.5rem",
            flexWrap: "wrap",
            marginBottom: "3rem",
            color: "#D4AF37",
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            opacity: 0.9,
          }}
        >
          <span>AI & DS</span>
          <span>•</span>
          <span>ML Projects</span>
          <span>•</span>
          <span>LeetCode</span>
        </div>

        {/* Identity Lines */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.45rem",
            marginBottom: "4rem",
          }}
        >
          {["Engineer.", "Builder.", "AI Explorer."].map((word, i) => (
            <motion.p
              key={word}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.4 + i * 0.15,
                ease: "easeOut",
              }}
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)",
                fontWeight: 300,
                color: i === 0 ? "#F5F1EA" : "#B5B0A8",
                letterSpacing: "0.03em",
              }}
            >
              {word}
            </motion.p>
          ))}
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: "easeOut",
          }}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <div
            style={{
              width: "80px",
              height: "1px",
              background: "#D4AF37",
              opacity: 0.8,
            }}
          />

          <p
            className="exhibit-label"
            style={{
              color: "#C8C2B8",
            }}
          >
            Scroll to enter the exhibition
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
