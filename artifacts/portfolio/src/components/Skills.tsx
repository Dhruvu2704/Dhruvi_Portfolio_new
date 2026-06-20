import { motion } from "framer-motion";

const categories = [
  {
    label: "Languages",
    skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"],
  },
  {
    label: "ML & Data Science",
    skills: ["Machine Learning", "NLP", "Feature Engineering", "Data Analysis", "Model Evaluation", "Data Visualization"],
  },
  {
    label: "Libraries & Frameworks",
    skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Flask", "FastAPI"],
  },
  {
    label: "Tools & Platforms",
    skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Render", "Figma"],
  },
  {
    label: "Core Concepts",
    skills: ["OOP", "Data Structures & Algorithms", "REST APIs", "Database Management"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 border-t border-border" data-testid="skills-section">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="section-label mb-12">02 — Skills</p>

          <div className="flex flex-col gap-0">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07, ease: "easeOut" }}
                style={{ borderTop: "1px solid hsl(0 0% 88%)", paddingTop: "1.5rem", paddingBottom: "1.5rem" }}
                className="grid md:grid-cols-3 gap-4"
                data-testid={`skill-category-${i}`}
              >
                <p className="section-label" style={{ paddingTop: "0.1rem" }}>{cat.label}</p>
                <p
                  className="md:col-span-2"
                  style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.82rem", color: "hsl(0 0% 18%)", lineHeight: "1.8" }}
                >
                  {cat.skills.join(" — ")}
                </p>
              </motion.div>
            ))}
            <div style={{ borderTop: "1px solid hsl(0 0% 88%)" }} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
