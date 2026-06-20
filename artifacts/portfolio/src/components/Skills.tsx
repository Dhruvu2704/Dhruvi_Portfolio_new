import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "C", "JavaScript", "HTML", "CSS"]
    },
    {
      title: "ML & Data Science",
      skills: ["Machine Learning", "NLP", "Feature Engineering", "Data Analysis", "Model Evaluation", "Data Visualization"]
    },
    {
      title: "Libraries & Frameworks",
      skills: ["NumPy", "Pandas", "Matplotlib", "Scikit-Learn", "Flask", "FastAPI"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Jupyter Notebook", "VS Code", "Render", "Figma"]
    },
    {
      title: "Core Concepts",
      skills: ["OOP", "Data Structures & Algorithms", "REST APIs", "Database Management"]
    }
  ];

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-mono font-bold text-white mb-2">/skills</h2>
          <div className="w-20 h-1 bg-secondary"></div>
        </motion.div>

        <div className="space-y-12">
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <h3 className="text-xl font-mono text-secondary mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-4 py-2 glass rounded-full text-sm font-mono text-white hover:border-secondary hover:text-secondary transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
