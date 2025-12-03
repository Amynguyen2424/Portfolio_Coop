import { ExternalLink } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  year: string
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden rounded-lg mb-4 bg-card">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-sm text-foreground/50">{project.year}</p>
          </div>
          <ExternalLink
            size={18}
            className="text-foreground/40 group-hover:text-accent transition-colors flex-shrink-0"
          />
        </div>

        <p className="text-foreground/70 leading-relaxed">{project.description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-3 py-1 rounded-full bg-muted text-muted-foreground">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
