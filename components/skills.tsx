export default function Skills() {
  const skillCategories = [
    {
      category: "Design Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Protopie", "Framer"],
    },
    {
      category: "UX/UI",
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Interaction Design"],
    },
    {
      category: "Frontend",
      skills: ["HTML/CSS", "JavaScript", "React", "Tailwind CSS", "Responsive Design"],
    },
    {
      category: "Other",
      skills: ["Accessibility (WCAG)", "Design Thinking", "Usability Testing", "Information Architecture"],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-lg text-foreground/60">
            A comprehensive set of tools and methodologies for creating excellent experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{category.category}</h3>
              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill} className="p-3 rounded-lg bg-card border border-border text-foreground/80 text-sm">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
