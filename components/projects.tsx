import ProjectCard from "./project-card"

const projects = [
  {
    id: 1,
    title: "Mobile Banking App",
    description:
      "A comprehensive redesign of a banking app focused on simplifying complex financial operations for everyday users.",
    tags: ["UX Research", "UI Design", "Mobile"],
    image: "/mobile-banking-app.png",
    year: "2024",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Complete design system and redesign for a major e-commerce platform, improving conversion rates by 35%.",
    tags: ["Design System", "E-Commerce", "Accessibility"],
    image: "/ecommerce-website-design.png",
    year: "2024",
  },
  {
    id: 3,
    title: "SaaS Dashboard",
    description:
      "Intuitive dashboard redesign for a data analytics platform, making complex data accessible and actionable.",
    tags: ["Dashboard", "Data Viz", "SaaS"],
    image: "/dashboard-user-interface-design.jpg",
    year: "2023",
  },
  {
    id: 4,
    title: "Travel Planning App",
    description: "End-to-end UX/UI design for a collaborative travel planning application with real-time features.",
    tags: ["Mobile", "Collaboration", "UX Design"],
    image: "/travel-app-interface.png",
    year: "2023",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Selected Work</h2>
          <p className="text-lg text-foreground/60">A selection of recent projects showcasing my approach to design.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
